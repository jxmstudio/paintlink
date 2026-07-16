import Link from "next/link";
import { site } from "@/content/site";
import { PhoneIcon } from "@/components/Header";

export function CtaSection({
  heading = "Ready for a fresh coat?",
  text = "Tell us about your job and we'll come back with a free, no-obligation quote — usually within a couple of days.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-2 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-50 to-brand-100/60 px-6 py-10 sm:px-10 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-navy-dark/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-brand px-6 py-3.5 text-center text-base font-bold text-white shadow-md transition-colors hover:bg-brand-dark"
          >
            Get a Free Quote
          </Link>
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-lg border border-navy/25 bg-white px-6 py-3.5 text-base font-bold text-navy transition-colors hover:border-brand hover:text-brand"
          >
            <PhoneIcon className="h-5 w-5" />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
