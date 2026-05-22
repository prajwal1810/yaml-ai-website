'use client';

import { useState } from 'react';
import { Button } from './Button';

const workflowOptions = [
  'WhatsApp AI Agents',
  'AI Voice Calling',
  'CRM Automation',
  'Lead Qualification',
  'Customer Support',
  'Appointment Booking',
  'Not sure yet'
];

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  workflow: workflowOptions[0],
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setStatus('sending');
    setNotice('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Could not send your message.');
      }

      setForm(initialForm);
      setStatus('success');
      setNotice('Your automation brief has been sent. We will get back to you soon.');
    } catch (error) {
      setStatus('error');
      setNotice(error instanceof Error ? error.message : 'Could not send your message.');
    }
  }

  const disabled = status === 'sending';

  return (
    <form className="rounded-[2rem] border border-line bg-white p-5 shadow-card sm:p-7" onSubmit={submitForm}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" onChange={updateField} required value={form.name} />
        <Field label="Company" name="company" onChange={updateField} required value={form.company} />
        <Field label="Email" name="email" onChange={updateField} required type="email" value={form.email} />
        <Field label="WhatsApp / Phone" name="phone" onChange={updateField} value={form.phone} />
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          Automation needed
        </span>
        <select
          className="focus-ring w-full rounded-2xl border border-line bg-white px-4 py-4 text-ink transition focus:border-skybrand/40"
          name="workflow"
          onChange={updateField}
          required
          value={form.workflow}
        >
          {workflowOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          What should AI handle first?
        </span>
        <textarea
          className="focus-ring min-h-36 w-full resize-y rounded-2xl border border-line bg-white px-4 py-4 text-ink transition placeholder:text-slate-400 focus:border-skybrand/40"
          name="message"
          onChange={updateField}
          placeholder="Example: New leads come from Meta ads and WhatsApp, but our team replies late and forgets to update Zoho."
          required
          value={form.message}
        />
      </label>
      <button
        className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
        disabled={disabled}
        type="submit"
      >
        {disabled ? 'Sending brief...' : 'Send automation brief'}
      </button>
      {notice ? (
        <p
          className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${
            status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {notice}
        </p>
      ) : null}
      <div className="mt-4 flex justify-center">
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </form>
  );
}

function Field({ label, name, type = 'text', required = false, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <input
        className="focus-ring w-full rounded-2xl border border-line bg-white px-4 py-4 text-ink transition placeholder:text-slate-400 focus:border-skybrand/40"
        name={name}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
      />
    </label>
  );
}
