import type { Testimonial } from "@/content/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-sm">
      <div className="flex gap-0.5 text-amber-400" aria-label="5 star review">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
          </svg>
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-dark/80">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-4 border-t border-navy/10 pt-4 text-sm">
        <span className="block font-bold text-navy">{t.name}</span>
        <span className="text-navy-dark/60">
          {t.job} · {t.suburb}
        </span>
      </figcaption>
    </figure>
  );
}
