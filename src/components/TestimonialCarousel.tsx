"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/content/testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { useReducedMotion } from "./useReducedMotion";

function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * One testimonial at a time on a sliding track. Auto-advances every
 * `interval`ms, pauses on hover, and skips the slide animation for visitors
 * who prefer reduced motion.
 */
export function TestimonialCarousel({
  testimonials,
  interval = 6000,
}: {
  testimonials: Testimonial[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const count = testimonials.length;

  useEffect(() => {
    if (reduced || paused || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [reduced, paused, count, interval]);

  const go = (i: number) => setIndex(((i % count) + count) % count);

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="overflow-hidden">
        <div
          className={`flex ${reduced ? "" : "transition-transform duration-700 ease-in-out"}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.quote} className="w-full shrink-0 px-1">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-colors hover:border-brand hover:text-brand"
          >
            <Chevron className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.quote}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show testimonial ${i + 1} of ${count}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-brand" : "w-2 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-colors hover:border-brand hover:text-brand"
          >
            <Chevron className="h-5 w-5 rotate-180" />
          </button>
        </div>
      )}
    </div>
  );
}
