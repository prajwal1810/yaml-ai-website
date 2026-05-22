# YAML AI Contact Backend Setup

The contact form posts to `/api/contact`, which is handled by `netlify/functions/contact.mts`.

When a lead submits the form, the function:

1. Adds a row to Google Sheets.
2. Sends an email alert to `prajwalmurkewar@gmail.com`.

## Netlify Environment Variables

Add these in Netlify:

`GOOGLE_SHEET_ID`

The ID from the Google Sheet URL.

`GOOGLE_SHEET_TAB`

Optional. Defaults to `Leads`.

`GOOGLE_SERVICE_ACCOUNT_EMAIL`

The `client_email` value from the Google service account JSON key.

`GOOGLE_PRIVATE_KEY`

The `private_key` value from the Google service account JSON key. Keep the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` text. Newlines can be pasted normally or stored as `\n`.

`RESEND_API_KEY`

API key from Resend.

`CONTACT_ALERT_FROM`

Verified sender email in Resend, for example `YAML AI <hello@yamlai.in>`.

## Google Sheet Columns

Create a sheet tab named `Leads` with this header row:

`Submitted At | Name | Company | Email | WhatsApp / Phone | Automation Needed | Message`

Share the Google Sheet with the service account email as Editor.
