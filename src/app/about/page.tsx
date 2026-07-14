import type { Metadata } from "next";
import Image from "next/image";
import { site, yearsInBusiness } from "@/content/site";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { CheckIcon } from "@/components/Cards";

export const metadata: Metadata = {
  title: "About Us | West Auckland Painters Since 2018",
  description:
    "PaintLink is a West Auckland based painting business established in 2018 by Shane Williams. Quality workmanship, honest quotes and a reputation built job by job.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Do it once, do it right",
    text: "Proper preparation, quality products and no shortcuts — a paint job should last years, not seasons.",
  },
  {
    title: "Straight answers",
    text: "Honest scoping and fixed quotes. If something doesn't need doing, we'll tell you. If something does, we'll tell you that too.",
  },
  {
    title: "Respect for your place",
    text: "Tidy sites, protected furniture and gardens, and a clean handover. We work like guests in your home, because we are.",
  },
  {
    title: "Turn up, follow through",
    text: "We show up when we say we will, keep you posted, and finish what we start on schedule.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About PaintLink"
        intro={`A West Auckland painting business built the old-fashioned way — job by job, referral by referral, since ${site.establishedYear}.`}
        crumbs={[{ name: "About", href: "/about" }]}
      />

      <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="max-w-3xl space-y-4 leading-relaxed text-navy-dark/80">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              The story so far
            </h2>
            <p>
              PaintLink was established in {site.establishedYear} by {site.owner}, and for{" "}
              {yearsInBusiness()}+ years the business has run on one simple idea: do quality
              work, and the next job takes care of itself. No flashy advertising, no cutting
              corners to win on price — just careful preparation, good products and finishes
              that speak for themselves.
            </p>
            <p>
              That approach has taken us all over Auckland. We’re based in West Auckland and do
              a lot of our work here — Henderson, Titirangi, New Lynn, Te Atatū, Glen Eden —
              and we’ve become specialists in Central Auckland’s villa and character homes,
              where careful workmanship matters most. Between the two, we’ve painted just about
              everything: weatherboard family homes, hundred-year-old villas, cedar houses in
              the bush, rentals on tight turnarounds, shops, offices and schools.
            </p>
            <p>
              We’re painters first and foremost. That means when we wash your house, we do it
              in a way that protects the paint. When we quote, we scope what the surface
              actually needs. And when we hand over, the job’s actually finished — touch-ups
              done, site clean, and paint left labelled for the future.
            </p>
            <p>
              If you’re after a painter who treats your place like their own reputation depends
              on it — because ours does — we’d love to hear about your job.
            </p>
          </div>

          <aside className="rounded-2xl border border-navy/10 bg-brand-50/60 p-8 text-center">
            <Image
              src="/logo-full.png"
              alt="PaintLink logo"
              width={280}
              height={250}
              className="mx-auto h-auto w-56"
            />
            <dl className="mt-6 space-y-4 text-left">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <dt className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Established
                </dt>
                <dd className="mt-1 text-xl font-extrabold text-navy">{site.establishedYear}</dd>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <dt className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Based in
                </dt>
                <dd className="mt-1 text-xl font-extrabold text-navy">West Auckland</dd>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <dt className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Get in touch
                </dt>
                <dd className="mt-1 font-bold text-navy">
                  <a href={site.phoneHref} className="hover:text-brand">
                    {site.phone}
                  </a>
                  <br />
                  <a href={site.emailHref} className="text-sm font-semibold text-navy-dark/70 hover:text-brand">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            How we work
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-white">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-dark/70">{v.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <CtaSection heading="Let's talk about your job" />
    </>
  );
}
