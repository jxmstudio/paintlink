"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "./useReducedMotion";

export type ProjectTile = { src: string; alt: string; label: string };

function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Auto-scrolling, swipeable strip of project photos. Uses native horizontal
 * scroll (touch + keyboard friendly) with a gentle timed advance that pauses
 * on hover and stops entirely under reduced motion.
 */
export function ProjectsCarousel({
  tiles,
  interval = 4500,
}: {
  tiles: ProjectTile[];
  interval?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || paused) return;
    const el = ref.current;
    if (!el) return;
    const id = setInterval(() => {
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollBy({ left: el.clientWidth * 0.8, behavior: "smooth" });
    }, interval);
    return () => clearInterval(id);
  }, [reduced, paused, interval]);

  const page = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Recent projects"
    >
      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {tiles.map((tile) => (
          <Link
            key={tile.src}
            href="/projects"
            className="group relative aspect-[4/5] w-[46%] shrink-0 snap-start overflow-hidden rounded-xl border border-navy/10 shadow-sm sm:w-[31%] lg:w-[23%]"
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/85 to-transparent px-4 pb-3 pt-10 text-sm font-bold text-white">
              {tile.label}
            </span>
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={() => page(-1)}
        aria-label="Scroll to previous projects"
        className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-md transition-colors hover:border-brand hover:text-brand sm:flex"
      >
        <Chevron className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => page(1)}
        aria-label="Scroll to more projects"
        className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-md transition-colors hover:border-brand hover:text-brand sm:flex"
      >
        <Chevron className="h-5 w-5 rotate-180" />
      </button>
    </div>
  );
}
