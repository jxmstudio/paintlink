import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { locationsByRegion } from "@/content/locations";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { CheckIcon } from "@/components/Cards";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Villa & Character Home Painting Auckland | PaintLink" },
  description:
    "Specialist villa and character home painters in Central Auckland — Grey Lynn, Ponsonby, Mt Eden, Westmere, Herne Bay. Heritage detail, lead-safe practices, free quotes.",
  alternates: { canonical: "/villa-character-painting" },
};

const faqs = [
  {
    q: "What makes villa painting different from painting a modern home?",
    a: "Age and detail. A villa exterior has far more timber joinery, mouldings and hand-detail than a modern house, plus a century of paint history underneath — often including lead. It needs more preparation time, more brushwork, and painters who know what they're looking at.",
  },
  {
    q: "How do you deal with lead paint on older homes?",
    a: "We assume lead is present on any pre-1980s home and follow safe practices as standard — containment sheeting, wet sanding and scraping methods, and proper collection and disposal of debris. It protects your family, your garden and our team.",
  },
  {
    q: "Can you recommend heritage colour schemes?",
    a: "Yes — from traditional resene heritage palettes through to modern monochrome schemes that still respect the era. We'll look at your home's period, the streetscape and your taste, and put test patches on the actual walls.",
  },
  {
    q: "Do you paint bungalows as well as villas?",
    a: "Absolutely. 1920s–30s bungalows are a big part of our Central Auckland work — shingle bands, deep verandahs, casement windows and all. The same heritage-first approach applies.",
  },
];

const expertise = [
  {
    title: "Heritage weatherboard exteriors",
    text: "Hundreds of metres of kauri weatherboard, scraped, primed and repainted properly — with rot repairs and re-puttying along the way.",
  },
  {
    title: "Sash windows & original joinery",
    text: "Original double-hung sashes freed, eased, re-puttied and painted so they still slide — not glued shut with paint.",
  },
  {
    title: "Verandahs, fretwork & detail",
    text: "Turned posts, balustrades, brackets and fretwork picked out cleanly — the details that make a villa a villa.",
  },
  {
    title: "Interior character work",
    text: "High stud walls, timber panelling, ceiling roses and enamelled trim — finished to suit homes with real history.",
  },
];

export default function VillaPage() {
  const central = locationsByRegion("Central Auckland");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Villa & Character Home Painting — Auckland",
          serviceType: "Villa and Character Home Painting",
          url: `${site.url}/villa-character-painting`,
          provider: { "@id": `${site.url}/#business` },
          areaServed: central.map((l) => ({ "@type": "Place", name: `${l.name}, Auckland` })),
        }}
      />
      <PageHero
        title="Villa & Character Home Painting in Auckland"
        intro="Central Auckland's villa and bungalow belt — Grey Lynn, Ponsonby, Mt Eden, Freemans Bay, Westmere, Herne Bay — holds homes that are a century old and full of craftsmanship you can't buy anymore. Painting them well is specialist work. It's the work we love most."
        crumbs={[{ name: "Villa & Character Painting", href: "/villa-character-painting" }]}
      />

      <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-3xl">
          <p className="leading-relaxed text-navy-dark/80">
            Character homes reward the painter who takes them seriously — and punish the one
            who doesn’t. Skip the preparation on a villa and the coastal weather finds every
            shortcut within a couple of winters. Use the wrong approach on old joinery and
            windows stop opening, putty falls out, and detail disappears under sludgy layers
            of paint.
          </p>
          <p className="mt-4 leading-relaxed text-navy-dark/80">
            PaintLink has painted Auckland’s older homes since {site.establishedYear}. We know
            what a hundred-year-old weatherboard needs before it can hold new paint, how to
            handle the lead-based coats hiding in its history, and how to pick colour schemes
            that make a character home look like it’s always been cared for.
          </p>
        </div>

        <section className="mt-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                src: "/gallery/st-marys-bay-after.jpg",
                alt: "Two-storey villa in St Marys Bay after a full exterior repaint by PaintLink",
              },
              {
                src: "/gallery/villa-exterior-3.jpg",
                alt: "Restored villa verandah with turned posts and fretwork, freshly painted",
              },
              {
                src: "/gallery/st-marys-door-after.jpg",
                alt: "Villa front door with stained-glass surround, freshly repainted",
              },
            ].map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/5] overflow-hidden rounded-xl border border-navy/10 shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-navy-dark/60">
            Recent villa work, including a full exterior restoration in St Marys Bay —{" "}
            <Link href="/gallery" className="font-semibold text-brand hover:underline">
              see more in the gallery
            </Link>
            .
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            What villa &amp; character work involves
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {expertise.map((item) => (
              <div key={item.title} className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-dark/70">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-navy p-8 text-white sm:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Lead paint — the part you can’t skip
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/80">
            Nearly every villa and bungalow in Auckland carries lead-based paint in its older
            layers. Dry-sanding it carelessly spreads contaminated dust across your property
            and your neighbours’. We follow safe lead practices on every character home as
            standard: containment, wet preparation methods, protective sheeting, and proper
            disposal. It’s slower and it’s the right way — no exceptions.
          </p>
          <Link
            href="/services/paint-stripping-removal"
            className="mt-6 inline-block font-bold text-brand-200 hover:text-white"
          >
            More about paint stripping &amp; removal →
          </Link>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Where we do villa work
          </h2>
          <p className="mt-3 max-w-2xl text-navy-dark/70">
            Most of our character home painting happens across Central Auckland’s villa
            suburbs:
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {central.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/areas/${l.slug}`}
                  className="inline-block rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy hover:border-brand hover:text-brand"
                >
                  Painters {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <FaqSection faqs={faqs} heading="Villa painting — common questions" />
      <CtaSection
        heading="Own a villa or character home?"
        text="Get painters who treat it with the respect it's earned. Free quotes, honest scoping, heritage-appropriate finishes."
      />
    </>
  );
}
