import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import type { Faq } from "@/content/types";

export function FaqSection({ faqs, heading = "Common questions" }: { faqs: Faq[]; heading?: string }) {
  if (faqs.length === 0) return null;
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <JsonLd data={faqSchema(faqs)} />
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{heading}</h2>
      <div className="mt-6 divide-y divide-navy/10 rounded-xl border border-navy/10 bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-navy [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden="true"
                className="text-brand transition-transform group-open:rotate-45"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-navy-dark/75">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
