import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { PhoneIcon } from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact Us | Free Painting Quotes Auckland",
  description:
    "Get a free painting quote from PaintLink. Call 021 145 2876, email info@paintlink.co.nz or send us the details — West & Central Auckland, no obligation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get a Free Quote"
        intro="Tell us what needs painting and we'll come back to you quickly — usually within one business day — to arrange a look and a fixed quote. No obligation, no pressure."
        crumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">
              Request a quote
            </h2>
            <p className="mt-2 text-sm text-navy-dark/70">
              Fields marked * are required. The more detail you give us, the faster we can
              quote.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-brand/20 bg-brand-50 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                Prefer to talk?
              </h2>
              <a
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-xl font-extrabold text-navy hover:text-brand"
              >
                <PhoneIcon className="h-6 w-6 text-brand" />
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-navy-dark/65">{site.hours}</p>
            </div>

            <div className="rounded-xl border border-navy/10 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                Email
              </h2>
              <a
                href={site.emailHref}
                className="mt-2 block font-bold text-navy hover:text-brand"
              >
                {site.email}
              </a>
            </div>

            <div className="rounded-xl border border-navy/10 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                Where we work
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-dark/75">
                {site.serviceAreaSummary}
              </p>
            </div>

            <div className="rounded-xl border border-brand/25 bg-brand-50 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                Quoting tip
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-dark/75">
                Photos help! If you email us a few phone photos of the job, we can often give
                you a ballpark straight away.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
