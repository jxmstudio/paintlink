import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { locations } from "@/content/locations";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/logo-icon.png" alt="" width={40} height={40} className="h-10 w-10" />
            <span className="text-lg font-extrabold italic tracking-tight">PAINT&nbsp;LINK</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Professional painters serving West and Central Auckland since{" "}
            {site.establishedYear}. Interior, exterior, roof and commercial painting done
            properly.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <p>
              <a href={site.phoneHref} className="font-bold text-white hover:text-brand-200">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={site.emailHref} className="text-white/80 hover:text-brand-200">
                {site.email}
              </a>
            </p>
            <p className="text-white/60">{site.hours}</p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-200">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/75 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/villa-character-painting" className="text-white/75 hover:text-white">
                Villa &amp; Character Painting
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-200">
            Areas We Cover
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/areas/${l.slug}`} className="text-white/75 hover:text-white">
                  Painters {l.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas" className="font-semibold text-brand-200 hover:text-white">
                All service areas →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-200">PaintLink</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-white/75 hover:text-white">About Us</Link></li>
            <li><Link href="/projects" className="text-white/75 hover:text-white">Recent Projects</Link></li>
            <li><Link href="/testimonials" className="text-white/75 hover:text-white">Testimonials</Link></li>
            <li><Link href="/contact" className="text-white/75 hover:text-white">Get a Free Quote</Link></li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Website by{" "}
            <a
              href="https://jxmstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80"
            >
              JXMStudio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
