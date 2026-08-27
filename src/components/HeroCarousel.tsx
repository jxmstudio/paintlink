"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "./useReducedMotion";

export type CarouselSlide = { src: string; alt: string; caption?: string };

function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Cross-fading hero image. Auto-advances every `interval`ms, pauses on hover,
 * and holds on the first slide when the visitor prefers reduced motion.
 */
export function HeroCarousel({
  slides,
  interval = 5500,
}: {
  slides: CarouselSlide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const count = slides.length;

  useEffect(() => {
    if (reduced || paused || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [reduced, paused, count, interval]);

  const go = (i: number) => setIndex(((i % count) + count) % count);

  return (
    <div
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-navy/10 shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Recent PaintLink work"
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 ${
            reduced ? "" : "transition-opacity duration-1000 ease-in-out"
          } ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i === index ? undefined : true}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="(min-width: 640px) 28rem, 100vw"
            className="object-cover"
          />
          {s.caption && (
            // Oversized on purpose — the awards need to stand out (client request, Aug 2026).
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/55 to-transparent px-5 pb-10 pt-20 text-2xl font-extrabold leading-snug text-white drop-shadow-md sm:text-3xl">
              {s.caption}
            </p>
          )}
        </div>
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy opacity-0 shadow transition-opacity hover:bg-white focus-visible:opacity-100 group-hover:opacity-100"
          >
            <Chevron className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy opacity-0 shadow transition-opacity hover:bg-white focus-visible:opacity-100 group-hover:opacity-100"
          >
            <Chevron className="h-5 w-5 rotate-180" />
          </button>

          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show photo ${i + 1} of ${count}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
