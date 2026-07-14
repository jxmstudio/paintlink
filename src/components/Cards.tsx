import Link from "next/link";
import type { Location, Service } from "@/content/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand">
        <RollerIcon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-navy group-hover:text-brand-dark">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-dark/70">{service.blurb}</p>
      <span className="mt-4 text-sm font-bold text-brand group-hover:underline">
        Learn more →
      </span>
    </Link>
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
