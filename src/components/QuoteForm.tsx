"use client";

import { useState } from "react";
import { services } from "@/content/services";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-lg border border-navy/20 bg-white px-4 py-3 text-sm text-navy-dark placeholder:text-navy-dark/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-brand/30 bg-brand-50 p-8 text-center">
        <h3 className="text-xl font-extrabold text-navy">Thanks — we’ve got it!</h3>
        <p className="mt-2 text-sm text-navy-dark/75">
          Your enquiry has been sent. We’ll be in touch shortly to talk through your job —
          usually within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="Quote request form">
      {/* Honeypot — real users never see or fill this field */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className="mb-1.5 block text-sm font-bold text-navy">
            Name *
          </label>
          <input id="qf-name" name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="qf-phone" className="mb-1.5 block text-sm font-bold text-navy">
            Phone *
          </label>
          <input id="qf-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="021 ..." />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-email" className="mb-1.5 block text-sm font-bold text-navy">
            Email
          </label>
          <input id="qf-email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="qf-suburb" className="mb-1.5 block text-sm font-bold text-navy">
            Suburb
          </label>
          <input id="qf-suburb" name="suburb" className={inputClass} placeholder="e.g. Henderson" />
        </div>
      </div>

      <div>
        <label htmlFor="qf-service" className="mb-1.5 block text-sm font-bold text-navy">
          What do you need painted?
        </label>
        <select id="qf-service" name="service" className={inputClass} defaultValue="">
          <option value="" disabled>
            Choose a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Villa / character home">Villa / character home</option>
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="qf-message" className="mb-1.5 block text-sm font-bold text-navy">
          Tell us about the job *
        </label>
        <textarea
          id="qf-message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="A rough idea of what needs doing — rooms, exterior, timeframes, anything useful."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          Something went wrong sending your enquiry. Please try again, or call us on 021 145 2876.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-brand px-6 py-3.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Quote Request"}
      </button>
    </form>
  );
}
