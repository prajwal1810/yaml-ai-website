import type { Config, Context } from '@netlify/functions';

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  workflow?: string;
  message?: string;
};

type NetlifyEnv = {
  env?: {
    get: (name: string) => string | undefined;
  };
};

const ALERT_TO = 'prajwalmurkewar@gmail.com';

function env(name: string) {
  return (globalThis as unknown as { Netlify?: NetlifyEnv }).Netlify?.env?.get(name);
}

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store'
    }
  });
}

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function validate(payload: ContactPayload) {
  const lead = {
    name: clean(payload.name),
    company: clean(payload.company),
    email: clean(payload.email),
    phone: clean(payload.phone),
    workflow: clean(payload.workflow),
    message: clean(payload.message)
  };

  if (!lead.name || !lead.company || !lead.email || !lead.workflow || !lead.message) {
    throw new Error('Please fill all required fields.');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    throw new Error('Please enter a valid email address.');
  }

  return lead;
}

function normalizePrivateKey(key: string) {
  return key.replace(/\\n/g, '\n');
}

async function createGoogleAccessToken() {
  const serviceAccountEmail = env('GOOGLE_SERVICE_ACCOUNT_EMAIL');
  const privateKey = env('GOOGLE_PRIVATE_KEY');

  if (!serviceAccountEmail || !privateKey) {
    throw new Error('Google Sheets credentials are missing.');
  }

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: serviceAccountEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedClaim = base64UrlEncode(JSON.stringify(claim));
  const unsignedJwt = `${encodedHeader}.${encodedClaim}`;
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    pemToArrayBuffer(normalizePrivateKey(privateKey)),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, new TextEncoder().encode(unsignedJwt));
  const jwt = `${unsignedJwt}.${base64UrlEncode(signature)}`;

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  if (!response.ok) {
    throw new Error('Google authentication failed.');
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error('Google did not return an access token.');
  }

  return data.access_token;
}

function pemToArrayBuffer(pem: string) {
  const base64 = pem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes.buffer;
}

function base64UrlEncode(input: string | ArrayBuffer) {
  const bytes = typeof input === 'string' ? new TextEncoder().encode(input) : new Uint8Array(input);
  let binary = '';

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function appendToSheet(lead: ReturnType<typeof validate>) {
  const sheetId = env('GOOGLE_SHEET_ID');
  const sheetTab = env('GOOGLE_SHEET_TAB') || 'Leads';

  if (!sheetId) {
    throw new Error('Google Sheet ID is missing.');
  }

  const accessToken = await createGoogleAccessToken();
  const submittedAt = new Date().toISOString();
  const values = [[submittedAt, lead.name, lead.company, lead.email, lead.phone, lead.workflow, lead.message]];
  const range = encodeURIComponent(`${sheetTab}!A:G`);
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ values })
    }
  );

  if (!response.ok) {
    throw new Error('Could not save the lead to Google Sheets.');
  }
}

async function sendEmailAlert(lead: ReturnType<typeof validate>) {
  const resendApiKey = env('RESEND_API_KEY');
  const from = env('CONTACT_ALERT_FROM');

  if (!resendApiKey || !from) {
    throw new Error('Email alert settings are missing.');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to: [ALERT_TO],
      reply_to: lead.email,
      subject: `New YAML AI lead: ${lead.company}`,
      html: `
        <h2>New YAML AI contact form lead</h2>
        <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(lead.company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
        <p><strong>WhatsApp / Phone:</strong> ${escapeHtml(lead.phone || 'Not provided')}</p>
        <p><strong>Automation needed:</strong> ${escapeHtml(lead.workflow)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(lead.message).replace(/\n/g, '<br />')}</p>
      `
    })
  });

  if (!response.ok) {
    throw new Error('Could not send the email alert.');
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed.' }, 405);
  }

  try {
    const payload = (await req.json()) as ContactPayload;
    const lead = validate(payload);

    await appendToSheet(lead);
    await sendEmailAlert(lead);

    return json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Something went wrong.';
    console.error(message);
    return json({ error: message }, 400);
  }
};

export const config: Config = {
  path: '/api/contact'
};
