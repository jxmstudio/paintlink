import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { villaCard } from "@/content/villa";
import { locationsByRegion } from "@/content/locations";
import { testimonials } from "@/content/testimonials";
import { ServiceCard, LinkCard, AreaCard } from "@/components/Cards";
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

// Two licensed photos for now — Shane is licensing the rest from the photographer.
const heroSlides = [
  {
    src: "/gallery/dulux-grand-prix-2025.jpg",
    alt: "Award-winning villa renovation with deep maroon ceiling and skylight over the kitchen",
    caption: "Dulux Colour Awards 2025 Grand Prix winner",
  },
  {
    src: "/gallery/here-magazine-cover.jpg",
    alt: "Cover of Here magazine issue 31 featuring a villa renovation painted by PaintLink",
    caption: "As featured in Here magazine",
  },
];

const projectTiles = [
  { src: "/gallery/valley-rd-front.jpg", alt: "Character bungalow in Mt Eden repainted in blue-grey with red joinery", label: "Character bungalow" },
  { src: "/gallery/te-arai-exterior.jpg", alt: "Architectural new build in Te Arai with brick, glass and stained cedar", label: "Architectural new build" },
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
      {/* Hero — Valley Rd courtyard photo behind the H1, per Shane's mockup (Sep 2026).
          On phones the photo sits behind the text and buttons only, kept short so the
          whole house stays visible (client revision, Sep 2026); the awards carousel
          moves below it. On desktop the photo spans the full hero as before. */}
      <section className="border-b border-navy/10 bg-white">
        <div className="relative overflow-hidden">
          <Image
            src="/gallery/valley-rd-courtyard.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[38%_45%] lg:object-center"
          />
          {/* Gradient stays soft so the photo reads in full colour (client request, Sep 2026). */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-navy-dark/75 via-navy-dark/45 to-navy-dark/15"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/90">
                West &amp; Central Auckland Painters
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Trusted Auckland Painters for Homes &amp; Businesses
              </h1>
              <p className="mt-4 max-w-xl leading-relaxed text-white/90 sm:mt-5 sm:text-lg">
                Looking for reliable Auckland painters who deliver quality workmanship that
                lasts? PaintLink provides professional{" "}
                <strong className="font-bold text-white">
                  interior painting, exterior painting, roof painting, commercial painting,
                  and villa restoration
                </strong>{" "}
                throughout West and Central Auckland.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-lg bg-brand px-7 py-4 text-center text-base font-bold text-white shadow-md transition-colors hover:bg-brand-dark"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/40 px-7 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="relative hidden w-full lg:block">
              <HeroCarousel slides={heroSlides} />
            </div>
          </div>
        </div>

        {/* Awards carousel — below the photo on phones, over it on desktop */}
        <div className="mx-auto w-full max-w-md px-4 py-8 sm:px-6 lg:hidden">
          <HeroCarousel slides={heroSlides} />
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        {/* Copy supplied by Shane (Dropbox New Updates folder, Sep 2026), in full. */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            Quality Painters You Can Rely On
          </h2>
          <p className="mt-3 text-navy-dark/70">
            We provide professional{" "}
            <strong className="font-bold text-navy">
              interior, exterior and roof painting
            </strong>{" "}
            for everything from character homes and renovations through to high-end
            architectural new builds. Our work has seen us involved in a number of{" "}
            <strong className="font-bold text-navy">
              award-winning homes and building projects
            </strong>
            , where the quality of the painting and finishing needs to match the standard
            of the construction.
          </p>
          <p className="mt-3 text-navy-dark/70">
            Every project receives the same focus on{" "}
            <strong className="font-bold text-navy">
              thorough preparation, correct coating systems and attention to detail
            </strong>
            . Whether we&rsquo;re restoring an older weatherboard home, completing a full
            interior repaint or working alongside builders on a detailed architectural
            project, our aim is to deliver a finish that looks right and is made to last.
          </p>
          <p className="mt-3 text-navy-dark/70">
            <strong className="font-bold text-navy">
              Every photo you see on our website is from a project we&rsquo;ve actually
              completed &mdash; we don&rsquo;t use stock photography.
            </strong>{" "}
            From everyday residential repaints to some of Auckland&rsquo;s standout homes,
            the work shown throughout our website is a genuine representation of the
            projects we undertake and the standard of finish we deliver.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80} className="flex">
              <ServiceCard service={s} showBlurb={false} />
            </Reveal>
          ))}
          <Reveal delay={(services.length % 3) * 80} className="flex">
            <LinkCard href={villaCard.href} title={villaCard.title} image={villaCard.image} />
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

      {/* About — copy supplied by Shane, Aug 2026 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            About PaintLink
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-navy-dark/80">
            <p>
              PaintLink was established in 2018 by Shane Williams with a straightforward
              approach: provide good workmanship, use quality materials and be reliable from
              the first quote through to completion.
            </p>
            <p>
              We&rsquo;ve grown steadily over the years, with much of our work coming from
              repeat customers and referrals. We&rsquo;ve never tried to compete by being the
              cheapest. Instead, we focus on doing the preparation properly, using the right
              products for the job and delivering a finish that will last.
            </p>
            <p>
              We also believe the way a job is managed matters just as much as the painting
              itself. That means clear communication, respecting people&rsquo;s homes and
              properties, keeping the site tidy and dealing with any issues properly rather
              than rushing through them.
            </p>
            <p>
              Today, PaintLink remains an Auckland-owned and operated painting company.
              We&rsquo;ve grown since we started, but the way we approach the work
              hasn&rsquo;t changed &mdash; turn up when we say we will, do the job properly
              and leave the property looking the way it should.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="border-t border-navy/10 bg-white">
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
