import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, yearsInBusiness } from "@/content/site";
import { services } from "@/content/services";
import { locationsByRegion } from "@/content/locations";
import { testimonials } from "@/content/testimonials";
import { ShaderBackdrop } from "@/components/ShaderBackdrop";
import { ServiceCard, AreaCard, CheckIcon } from "@/components/Cards";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CtaSection } from "@/components/CtaSection";
import { PhoneIcon } from "@/components/Header";

export const metadata: Metadata = {
  title: { absolute: "PaintLink | House Painters West & Central Auckland" },
  description:
    "PaintLink are professional house painters serving West & Central Auckland since 2018. Interior, exterior, roof & commercial painting — free quotes, quality guaranteed.",
  alternates: { canonical: "/" },
};

const whyUs = [
  {
    title: `Established ${site.establishedYear}`,
    text: `${yearsInBusiness()}+ years of painting Auckland homes and businesses — experience you can see in the finish.`,
  },
  {
    title: "Preparation first",
    text: "We fill, sand, prime and repair before painting, because prep is what makes a paint job last.",
  },
  {
    title: "Genuinely local",
    text: "West Auckland based, working across Central Auckland daily. A local team, not a franchise.",
  },
  {
    title: "Fixed, honest quotes",
    text: "Clear scope, fixed price, no surprises — and we turn quotes around fast.",
  },
];

export default function HomePage() {
  const west = locationsByRegion("West Auckland");
  const central = locationsByRegion("Central Auckland");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-dark text-white">
        <ShaderBackdrop />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy-dark/55 to-navy-dark/20"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-200">
            West &amp; Central Auckland Painters
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Quality painting, <span className="text-brand-200">done properly.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Interior, exterior, roof and commercial painting across Auckland — from villa
            restorations in Grey Lynn to family homes in Henderson. Painting since{" "}
            {site.establishedYear}, and proud of every finish.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-brand px-7 py-4 text-center text-base font-bold text-white shadow-lg transition-colors hover:bg-brand-dark"
            >
              Get a Free Quote
            </Link>
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/75">
            {["Free quotes", "Fully insured", "Interior & exterior", "All of Auckland"].map(
              (chip) => (
                <li key={chip} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-brand-200" />
                  {chip}
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            Painting services for every job
          </h2>
          <p className="mt-3 text-navy-dark/70">
            One team for the whole property — inside, outside, roof and grounds. Every service
            starts with proper preparation and ends with a finish we’d put our name on.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* Villa & character feature */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-200">
              Central Auckland Specialists
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Villa &amp; character home painting
            </h2>
            <p className="mt-4 leading-relaxed text-white/80">
              Grey Lynn, Ponsonby, Mt Eden, Westmere, Herne Bay — Auckland’s villa belt is full
              of hundred-year-old homes that deserve painters who understand them. Heritage
              detail, sash windows, lead-safe practices and colour schemes that suit the era:
              it’s specialist work, and it’s ours.
            </p>
            <Link
              href="/villa-character-painting"
              className="mt-6 inline-block rounded-lg bg-brand px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Villa &amp; Character Painting →
            </Link>
          </div>
          <ul className="grid gap-3">
            {[
              "Full villa exterior restorations",
              "Safe lead-based paint practices",
              "Sash window & heritage joinery care",
              "Era-appropriate colour consulting",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-semibold"
              >
                <CheckIcon className="h-5 w-5 shrink-0 text-brand-200" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy">
          Why Aucklanders choose PaintLink
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => (
            <div key={item.title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-white">
                <CheckIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-dark/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent work */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Recent work
              </h2>
              <p className="mt-3 text-white/70">
                Real jobs, no stock photos — villas, roofs, cedar and interiors across
                Auckland.
              </p>
            </div>
            <Link
              href="/gallery"
              className="rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              View the Gallery →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: "/gallery/st-marys-bay-after.jpg",
                alt: "Villa in St Marys Bay after a full exterior repaint",
                label: "Villa repaint",
              },
              {
                src: "/gallery/cedar-restoration-after.jpg",
                alt: "Restored cedar soffit with a rich, even tone",
                label: "Cedar restoration",
              },
              {
                src: "/gallery/roof-1.jpg",
                alt: "Long-run roof freshly coated in charcoal grey",
                label: "Roof repaint",
              },
              {
                src: "/gallery/interior-1.jpg",
                alt: "Villa hallway interior painted crisp white",
                label: "Interior repaint",
              },
            ].map((photo) => (
              <Link
                key={photo.src}
                href="/gallery"
                className="group relative aspect-[4/5] overflow-hidden rounded-xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/90 to-transparent px-4 pb-3 pt-10 text-sm font-bold text-white">
                  {photo.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-brand-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">Areas we cover</h2>
            <p className="mt-3 text-navy-dark/70">
              {site.serviceAreaSummary} If your suburb isn’t listed, call us anyway — we go
              wherever the work is.
            </p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                West Auckland
              </h3>
              <div className="mt-4 grid gap-4">
                {west.map((l) => (
                  <AreaCard key={l.slug} location={l} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                Central Auckland
              </h3>
              <div className="mt-4 grid gap-4">
                {central.map((l) => (
                  <AreaCard key={l.slug} location={l} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            What our clients say
          </h2>
          <Link href="/testimonials" className="font-bold text-brand hover:underline">
            All testimonials →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.quote} t={t} />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
