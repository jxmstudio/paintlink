"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { BeforeAfterPair, Photo } from "@/content/types";
import { BeforeAfterPhotos } from "@/components/BeforeAfter";

function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Full-screen lightbox over a photo list. Arrow keys / on-screen chevrons move
 * through the set, Escape or the backdrop closes it.
 */
function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const count = photos.length;
  const go = useCallback(
    (i: number) => onNavigate(((i % count) + count) % count),
    [count, onNavigate],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key === "ArrowRight") go(index + 1);
    };
    window.addEventListener("keydown", onKey);
    // Lock page scroll while the lightbox is open.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, go, onClose]);

  const photo = photos[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[100] flex flex-col bg-navy-dark/95"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-3 text-white sm:px-6">
        <p className="text-sm font-semibold text-white/80">
          {index + 1} / {count}
        </p>
        <button
          type="button"
          aria-label="Close photo viewer"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/25"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div className="relative mx-4 mb-4 flex-1 sm:mx-14" onClick={(e) => e.stopPropagation()}>
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              go(index - 1);
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:left-4"
          >
            <Chevron className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              go(index + 1);
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:right-4"
          >
            <Chevron className="h-6 w-6 rotate-180" />
          </button>
        </>
      )}

      {/* No caption under the photo — removed at client's request (Sep 2026). */}
      <div className="pb-5" />
    </div>
  );
}

/**
 * The photo half of a project section: lead before/after pair (or lead photo)
 * plus a thumbnail grid. Every photo opens the lightbox at full size, and the
 * viewer scrolls through the whole set in order.
 */
export function ProjectGallery({
  beforeAfter,
  photos,
}: {
  beforeAfter?: BeforeAfterPair;
  photos: Photo[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  // The full set the lightbox scrolls through, in display order.
  const all: Photo[] = beforeAfter ? [beforeAfter.before, beforeAfter.after, ...photos] : photos;
  const thumbs = beforeAfter ? photos : photos.slice(1);
  const thumbOffset = all.length - thumbs.length;

  return (
    <div>
      {beforeAfter ? (
        <button
          type="button"
          onClick={() => setOpen(0)}
          aria-label="View before and after photos full size"
          className="block w-full cursor-zoom-in text-left"
        >
          <BeforeAfterPhotos pair={beforeAfter} />
        </button>
      ) : (
        photos[0] && (
          <button
            type="button"
            onClick={() => setOpen(0)}
            aria-label="View photo full size"
            className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-navy/10 shadow-sm"
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover"
            />
          </button>
        )
      )}

      {thumbs.length > 0 && (
        <div className={`mt-3 grid gap-3 ${thumbs.length >= 4 ? "grid-cols-4" : "grid-cols-3"}`}>
          {thumbs.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setOpen(thumbOffset + i)}
              aria-label={`View photo full size: ${photo.alt}`}
              className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-lg border border-navy/10"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 10rem, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.06]"
              />
            </button>
          ))}
        </div>
      )}

      {open !== null && (
        <Lightbox photos={all} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
      )}
    </div>
  );
}

/**
 * The photo layout for a project's own page (wgb.co.nz-style, Sept 2026):
 * a lead before/after pair (or lead photo) beside the write-up, then a
 * "Take a look around" grid of the full set. One lightbox covers everything.
 *
 * `children` is the server-rendered write-up column.
 */
export function ProjectShowcase({
  beforeAfter,
  photos,
  children,
}: {
  beforeAfter?: BeforeAfterPair;
  photos: Photo[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<number | null>(null);

  // Lightbox order: before/after first (when present), then the photo set.
  const all: Photo[] = beforeAfter ? [beforeAfter.before, beforeAfter.after, ...photos] : photos;
  // Without a before/after pair the first photo leads beside the write-up, so
  // the grid starts from the second.
  const gridPhotos = beforeAfter ? photos : photos.slice(1);
  const gridOffset = all.length - gridPhotos.length;

  return (
    <>
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div>{children}</div>
        <div>
          {beforeAfter ? (
            <button
              type="button"
              onClick={() => setOpen(0)}
              aria-label="View before and after photos full size"
              className="block w-full cursor-zoom-in text-left"
            >
              <BeforeAfterPhotos pair={beforeAfter} />
            </button>
          ) : (
            photos[0] && (
              <button
                type="button"
                onClick={() => setOpen(0)}
                aria-label="View photo full size"
                className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-navy/10 shadow-sm"
              >
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  sizes="(min-width: 1024px) 40rem, 100vw"
                  className="object-cover"
                  priority
                />
              </button>
            )
          )}
        </div>
      </div>

      {gridPhotos.length > 0 && (
        <div className="mt-16 lg:mt-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            Take a look around
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {gridPhotos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpen(gridOffset + i)}
                aria-label={`View photo full size: ${photo.alt}`}
                className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-xl border border-navy/10 bg-brand-50"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 24rem, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {open !== null && (
        <Lightbox photos={all} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
      )}
    </>
  );
}
