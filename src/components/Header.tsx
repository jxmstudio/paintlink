"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/villa-character-painting", label: "Villas & Character" },
  { href: "/areas", label: "Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem]">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="PaintLink home">
          <Image
            src="/logo-icon.png"
            alt=""
            width={44}
            height={44}
            priority
            className="h-10 w-10 lg:h-11 lg:w-11"
          />
          <span className="text-lg font-extrabold italic tracking-tight text-navy lg:text-xl">
            PAINT&nbsp;LINK
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              item.href === pathname ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`)) ||
              (item.href === "/services" && pathname.startsWith("/services")) ||
              (item.href === "/areas" && pathname.startsWith("/areas"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "text-brand"
                    : "text-navy hover:bg-brand-50 hover:text-brand-dark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-dark sm:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-brand-50 lg:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-navy/10 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-navy hover:bg-brand-50"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-base font-bold text-white"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  );
}
