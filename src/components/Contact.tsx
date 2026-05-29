import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { SOCIALS } from '../data/site';
import { SectionHeading } from './SectionHeading';

const FIELDS = [
  { key: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Shipanga' },
  { key: 'email', label: 'Your email', type: 'email', placeholder: 'jane@company.com' },
] as const;

const SERVICES_OPTIONS = [
  { value: '', label: 'Pick a service' },
  { value: 'training', label: 'Training & Facilitation' },
  { value: 'marketing', label: 'Marketing & Sales' },
  { value: 'events', label: 'Event Organising' },
  { value: 'software', label: 'Software Engineering' },
];

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? 'info@blessinginfotainment.com';

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;

    if (!accessKey) {
      setStatus('error');
      setErrorMessage(
        'This form is not configured yet. Email blessinginfotainment@gmail.com directly, or ask your developer to add VITE_WEB3FORMS_ACCESS_KEY.',
      );
      return;
    }

    const fd = new FormData(form);
    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const serviceVal = String(fd.get('service') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    const serviceLabel =
      SERVICES_OPTIONS.find((o) => o.value === serviceVal)?.label ?? serviceVal;

    setStatus('loading');

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          to: contactEmail,
          from_name: 'Blessing Infotainment Website',
          replyto: email,
          subject: `New project enquiry — ${serviceLabel} (${name})`,
          name,
          email,
          message: [
            `Service: ${serviceLabel}`,
            '',
            'Project brief:',
            message,
            '',
            `Submitted from blessinginfotainment.com — reply to ${email}`,
          ].join('\n'),
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || data.success === false) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      form.reset();
      setStatus('success');
      window.setTimeout(() => setStatus('idle'), 8000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Send failed. Please try again.');
    }
  };

  const busy = status === 'loading';
  const showSuccess = status === 'success';

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-savanna-50 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-sun-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-ink-200/40 blur-3xl"
      />

      <div className="container-tight relative">
        <SectionHeading
          eyebrow="Let's build"
          title={
            <>
              Tell us about <span className="gradient-text">the work</span>.
            </>
          }
          description="Share a few details and we'll come back within one working day. No pressure — just a conversation."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-8"
          >
            <div className="rounded-3xl bg-ink-900 text-white p-7 md:p-8 relative overflow-hidden">
              <span className="absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-25" />
              <span
                aria-hidden
                className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-sun-400/30 blur-3xl"
              />

              <div className="relative space-y-6">
                <h3 className="heading-display text-2xl font-semibold">
                  Reach us directly
                </h3>

                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                      <Mail className="w-4 h-4 text-sun-300" />
                    </span>
                    <a
                      href="mailto:blessinginfotainment@gmail.com"
                      className="hover:text-sun-300 transition-colors"
                    >
                      blessinginfotainment@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                      <Phone className="w-4 h-4 text-sun-300" />
                    </span>
                    <span>
                      +264 81 709 5881
                      <span className="text-white/40 mx-2">/</span>
                      065 227 025
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                      <MapPin className="w-4 h-4 text-sun-300" />
                    </span>
                    <span>P.O Box 536, Oshakati, Namibia</span>
                  </li>
                </ul>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Follow us
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    {SOCIALS.map(({ Icon, url, label }) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-sun-400 hover:text-ink-900 text-white transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl bg-white border border-ink-100 shadow-soft p-7 md:p-9 space-y-5"
            aria-busy={busy}
          >
            {FIELDS.map((f) => (
              <div key={f.key}>
                <label
                  htmlFor={`contact-${f.key}`}
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 mb-2"
                >
                  {f.label}
                </label>
                <input
                  id={`contact-${f.key}`}
                  name={f.key}
                  type={f.type}
                  required
                  disabled={busy}
                  autoComplete={f.key === 'email' ? 'email' : 'name'}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3.5 rounded-xl border border-ink-100 bg-savanna-50/50 focus:bg-white focus:border-sun-400 focus:ring-4 focus:ring-sun-100 outline-none transition-all disabled:opacity-60"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="contact-service"
                className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 mb-2"
              >
                Service
              </label>
              <select
                id="contact-service"
                name="service"
                required
                defaultValue=""
                disabled={busy}
                className="w-full px-4 py-3.5 rounded-xl border border-ink-100 bg-savanna-50/50 focus:bg-white focus:border-sun-400 focus:ring-4 focus:ring-sun-100 outline-none transition-all disabled:opacity-60"
              >
                {SERVICES_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 mb-2"
              >
                Project brief
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                disabled={busy}
                placeholder="Tell us a bit about your team, your timeline and the outcome you'd love to see…"
                className="w-full px-4 py-3.5 rounded-xl border border-ink-100 bg-savanna-50/50 focus:bg-white focus:border-sun-400 focus:ring-4 focus:ring-sun-100 outline-none transition-all resize-none disabled:opacity-60"
              />
            </div>

            {errorMessage && (
              <p
                role="alert"
                className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
              >
                {errorMessage}
              </p>
            )}

            {showSuccess && (
              <p
                role="status"
                className="text-sm text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3"
              >
                Thanks — your message was sent. We&apos;ll reply within one working day.
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:pointer-events-none"
            >
              {busy
                ? 'Sending…'
                : showSuccess
                  ? 'Message sent'
                  : 'Send message'}
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-ink-500">
              By submitting you agree we may contact you about your enquiry. No
              spam, ever.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
