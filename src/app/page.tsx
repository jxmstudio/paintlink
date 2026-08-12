import type { Metadata } from "next";
import Link from "next/link";
import { site, yearsInBusiness } from "@/content/site";
import { services } from "@/content/services";
import { villaCard } from "@/content/villa";
import { locationsByRegion } from "@/content/locations";
import { testimonials } from "@/content/testimonials";
import { ServiceCard, LinkCard, AreaCard, CheckIcon } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { PhoneIcon } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";

export const metadata: Metadata = {
  title: { absolute: "PaintLink | House Painters West & Central Auckland" },
  description:
    "PaintLink are professional house painters serving West & Central Auckland since 2018. Interior, exterior, roof & commercial painting — free quotes, quality guaranteed.",
  alternates: { canonical: "/" },
};

const heroSlides = [
  {
    src: "/gallery/st-marys-bay-after.jpg",
    alt: "Two-storey villa in St Marys Bay after a full exterior repaint by PaintLink",
  },
  {
    src: "/gallery/exterior-job-1.jpg",
    alt: "Contemporary home painted deep crimson with cream trim and timber louvre screens",
  },
  {
    src: "/gallery/roof-after-charcoal.jpg",
    alt: "Long-run iron roof restored and recoated in charcoal grey",
  },
  {
    src: "/gallery/cedar-restoration-after.jpg",
    alt: "Cedar soffit restored by PaintLink to a rich, even tone",
  },
  {
    src: "/gallery/interior-1.jpg",
    alt: "Villa hallway with original archway and mouldings painted crisp white",
  },
];

const projectTiles = [
  { src: "/gallery/st-marys-bay-after.jpg", alt: "Villa in St Marys Bay after a full exterior repaint", label: "Villa repaint" },
  { src: "/gallery/exterior-job-1.jpg", alt: "Modern home exterior painted deep crimson", label: "Exterior repaint" },
  { src: "/gallery/roof-after-charcoal.jpg", alt: "Iron roof recoated in charcoal grey", label: "Roof restoration" },
  { src: "/gallery/cedar-restoration-after.jpg", alt: "Restored cedar soffit with a rich, even tone", label: "Cedar restoration" },
  { src: "/gallery/interior-1.jpg", alt: "Villa hallway interior painted crisp white", label: "Interior repaint" },
  { src: "/gallery/deck-fence-1.jpg", alt: "Timber fence and retaining walls stained dark brown", label: "Deck & fence" },
  { src: "/gallery/commercial-1.jpg", alt: "Two-storey commercial building being repainted", label: "Commercial" },
  { src: "/gallery/villa-weatherboard-exteriors.jpg", alt: "Character villa weatherboard exterior freshly painted", label: "Weatherboard villa" },
];

export default function HomePage() {
  const west = locationsByRegion("West Auckland");
  const central = locationsByRegion("Central Auckland");

  return (
    <>
      {/* Hero — white, photo-led */}
      <section className="relative overflow-hidden border-b border-navy/10 bg-white">
        <div
          aria-hidden="true"
          className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-50 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              West &amp; Central Auckland Painters
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Quality painting, <span className="text-brand">done properly.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-dark/75">
              Interior, exterior, roof and commercial painting across Auckland — from villa
              restorations in Grey Lynn to family homes in Henderson. Painting since{" "}
              {site.establishedYear}, and proud of every finish.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-brand px-7 py-4 text-center text-base font-bold text-white shadow-md transition-colors hover:bg-brand-dark"
              >
                Get a Free Quote
              </Link>
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-lg border border-navy/25 px-7 py-4 text-base font-bold text-navy transition-colors hover:border-brand hover:text-brand"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-navy-dark/70">
              {["Free quotes", "Fully insured", "Interior & exterior", "All of Auckland"].map(
                (chip) => (
                  <li key={chip} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-brand" />
                    {chip}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <HeroCarousel slides={heroSlides} />
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-navy/10 bg-white px-5 py-4 shadow-lg">
              <p className="text-2xl font-extrabold text-brand">{yearsInBusiness()}+ years</p>
              <p className="text-sm font-semibold text-navy-dark/70">
                painting Auckland homes
              </p>
            </div>
          </div>
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
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80} className="flex">
              <ServiceCard service={s} />
            </Reveal>
          ))}
          <Reveal delay={(services.length % 3) * 80} className="flex">
            <LinkCard {...villaCard} />
          </Reveal>
        </div>
      </section>

      {/* Recent projects */}
      <section className="border-y border-navy/10 bg-brand-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-navy">
                Recent projects
              </h2>
              <p className="mt-3 text-navy-dark/70">
                Real jobs, no stock photos — villas, roofs, cedar and interiors across
                Auckland.
              </p>
            </div>
            <Link
              href="/projects"
              className="rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              View Recent Projects →
            </Link>
          </div>
          <div className="mt-10">
            <ProjectsCarousel tiles={projectTiles} />
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
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
      </section>

      {/* Testimonials */}
      <section className="border-t border-navy/10 bg-brand-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            What our clients say
          </h2>
          <Link href="/testimonials" className="font-bold text-brand hover:underline">
            All testimonials →
          </Link>
        </div>
        <div className="mt-10">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
