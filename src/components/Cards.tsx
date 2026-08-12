import Image from "next/image";
import Link from "next/link";
import type { Location, Service } from "@/content/types";

/**
 * The photo-led card used across the services grids. Takes a plain shape so
 * pages that aren't under /services (villa & character) can sit in the same
 * grid and look identical.
 */
export function LinkCard({
  href,
  title,
  blurb,
  image,
  priority = false,
}: {
  href: string;
  title: string;
  blurb: string;
  image?: { src: string; alt: string };
  /** Set on above-the-fold cards so they don't lazy-load in late. */
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex w-full flex-col overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-navy/10 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      {image && (
        // brand-50 backdrop means the card reads as "loading", never as broken.
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-50">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-dark/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      )}
      <div className="relative flex flex-1 flex-col p-6">
        {/* Accent rule that draws itself across the card on hover. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
        <h3 className="text-lg font-bold text-navy transition-colors group-hover:text-brand-dark">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-dark/70">{blurb}</p>
        <span className="mt-4 flex items-center gap-1.5 text-sm font-bold text-brand">
          Learn more
          <span
            aria-hidden="true"
            className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export function ServiceCard({
  service,
  priority = false,
}: {
  service: Service;
  priority?: boolean;
}) {
  return (
    <LinkCard
      href={`/services/${service.slug}`}
      title={service.name}
      blurb={service.blurb}
      image={service.image}
      priority={priority}
    />
  );
}

export function AreaCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/areas/${location.slug}`}
      className="group flex items-start gap-4 rounded-xl border border-navy/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
    >
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand">
        <PinIcon className="h-5 w-5" />
      </span>
      <span>
        <span className="block font-bold text-navy group-hover:text-brand-dark">
          {location.name}
        </span>
        <span className="mt-1 block text-sm text-navy-dark/70">{location.blurb}</span>
      </span>
    </Link>
  );
}

export function RollerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 5.5A1.5 1.5 0 0 1 6.5 4h9A1.5 1.5 0 0 1 17 5.5v2A1.5 1.5 0 0 1 15.5 9h-9A1.5 1.5 0 0 1 5 7.5v-2z" />
      <path d="M17 6h2.5A1.5 1.5 0 0 1 21 7.5v2a1.5 1.5 0 0 1-1.5 1.5H12.8a.8.8 0 0 0-.8.8V14" />
      <rect x="10.75" y="14" width="2.5" height="6.5" rx="0.8" />
    </svg>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}
