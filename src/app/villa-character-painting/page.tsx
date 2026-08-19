import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { locationsByRegion } from "@/content/locations";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
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
    q: "What makes painting a villa or character home different?",
    a: "Unlike modern homes, villas and character homes often have decades of old paint, weathered timber, historic joinery and intricate architectural details. Achieving a long-lasting finish isn’t simply a matter of applying new paint. Every surface needs to be carefully assessed, repaired and prepared before painting begins. Done properly, the result protects the home while preserving its original character for years to come.",
  },
  {
    q: "Why is preparation so important on older homes?",
    a: "Preparation is where the quality of a paint job is determined. Older homes often require extensive sanding, timber repairs, replacing failed putty, filling, priming and, in some cases, stripping paint back to bare timber. These tasks are physically demanding and time-consuming, but they’re essential for a premium finish that lasts. Without proper preparation, even the best paint system will eventually fail.",
  },
  {
    q: "Do all villas need to be stripped back to bare timber?",
    a: "No. Every home is different. Some areas may only require sanding and spot repairs, while others are too deteriorated or have too many layers of old paint to provide a sound surface for repainting. Where necessary, stripping back to bare timber allows us to repair defects properly and build a coating system that will perform for many years.",
  },
  {
    q: "Can you help choose colours for a villa?",
    a: "Absolutely. Whether you’re restoring a traditional villa or giving it a more contemporary appearance, we can recommend colour schemes that complement the home’s architecture while respecting its character. We work with leading paint manufacturers to help homeowners choose colours that enhance both street appeal and long-term value.",
  },
  {
    q: "Can you repair rotten timber and damaged joinery?",
    a: "Yes. It’s common for older homes to have areas of timber deterioration caused by years of weather exposure. During preparation we identify damaged timber, recommend appropriate repairs and ensure the surface is properly restored before painting. Addressing these issues before painting helps maximise the lifespan of the new coating system.",
  },
  {
    q: "What if my home contains old lead-based paint?",
    a: "Many Auckland villas built before the 1970s may contain lead-based paint. Where lead paint is suspected, we follow safe preparation methods designed to minimise dust and protect your family, neighbours and our team. Every project is assessed individually to determine the safest and most appropriate preparation method.",
  },
];

const preparation = [
  "Painting an older home isn’t just another exterior repaint. Decades of weather, movement, moisture, and previous paint jobs all have to be dealt with before a new coating is applied. If those issues are ignored, the fresh paint may look great at first, but it often won’t stay that way.",
  "Many older homes have layers of paint built up over generations. In some areas, the only lasting solution is to strip the timber back to a sound surface before repairs and repainting can begin. It’s slow, physically demanding work that many painters simply aren’t equipped for, so it’s understandable that shortcuts are sometimes taken. Unfortunately, shortcuts have a habit of revealing themselves a few winters later.",
  "Poor preparation can leave windows painted shut, putty cracking and falling away, timber repairs failing prematurely, and intricate mouldings slowly disappearing beneath layer after layer of paint. Once that detail is lost, it’s difficult and expensive to restore.",
  "Preparing a character home properly is often the biggest part of the project. It can involve paint stripping, repairing damaged timber, replacing failed putty, careful sanding, filling, priming, and protecting every exposed surface before the finish coats are even applied. It’s labour-intensive work, but it’s what gives the final finish its durability and sharp appearance.",
  "At PaintLink, we’ve worked on Auckland’s older homes since 2018. We understand the challenges these homes present, from ageing weatherboards and historic joinery to older paint systems that require careful treatment. Every home is different, which is why we focus on preparing the surface correctly first, so the finished result not only looks premium on completion but continues to perform for years to come.",
];

const expertise = [
  {
    title: "Heritage weatherboard exteriors",
    text: "Hundreds of metres of kauri weatherboard, scraped, primed and repainted properly — with rot repairs and re-puttying along the way.",
    image: {
      src: "/gallery/villa-weatherboard-exteriors.jpg",
      alt: "Weatherboard villa exterior repainted in soft blue with white and navy trim",
    },
  },
  {
    title: "Sash windows & original joinery",
    text: "Original double-hung sashes freed, eased, re-puttied and painted so they still slide — not glued shut with paint.",
    image: {
      src: "/gallery/villa-sash-windows-joinery.jpg",
      alt: "Restored double-hung sash windows with crisp white joinery and navy sashes",
    },
  },
  {
    title: "Verandahs, fretwork & detail",
    text: "Turned posts, balustrades, brackets and fretwork picked out cleanly — the details that make a villa a villa.",
    image: {
      src: "/gallery/villa-verandahs-fretwork.jpg",
      alt: "Villa verandah with turned posts, arched fretwork and freshly painted balustrade",
    },
  },
  {
    title: "Interior character work, colonial ceilings and trim",
    text: "High stud walls, colonial ceilings, timber panelling, ceiling roses and enamelled trim — finished to suit homes with real history.",
    image: {
      src: "/gallery/villa-interior-character-work.jpg",
      alt: "Character interior with panelled ceiling detail, repainted above original timber floors",
    },
  },
  {
    title: "Paint stripping back to bare timber",
    text: "Where old coatings have failed, we strip right back using safe lead-paint practices — then prime and rebuild the system coat by coat.",
    image: {
      src: "/gallery/villa-paint-stripping.jpg",
      alt: "Villa weatherboards stripped back to bare timber from the scaffold, ready for priming",
    },
  },
  {
    title: "Rotten timber repair",
    text: "Rotten boards, sills and sections of joinery cut out and replaced before painting, so the new finish has something sound to sit on.",
    image: {
      src: "/gallery/villa-rotten-timber-repair.jpg",
      alt: "Repaired and repainted window sill and surround on a dark weatherboard villa",
    },
  },
  {
    title: "Villa roofs",
    text: "Long-run and corrugated roofs on character homes prepared and recoated — finishing the job the weather sees first.",
    image: {
      src: "/gallery/villa-roofs.jpg",
      alt: "Corrugated villa roof freshly coated in deep red against a blue sky",
    },
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
        crumbs={[{ name: "Villa & Character Painting", href: "/villa-character-painting" }]}
      />

      <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-3xl">
          <p className="leading-relaxed text-navy-dark/80">
            Central Auckland’s villa and bungalow suburbs—Grey Lynn, Ponsonby, Mt Eden,
            Freemans Bay, Westmere and Herne Bay—are home to some of Auckland’s most iconic
            character homes. Many are over 100 years old and feature craftsmanship that simply
            isn’t found in modern construction.
          </p>
          <p className="mt-4 leading-relaxed text-navy-dark/80">
            Painting villas and character homes requires a different approach to modern
            houses. From careful surface preparation to restoring historic timber and
            preserving intricate architectural details, PaintLink specialises in painting
            Auckland’s character homes with the attention they deserve.
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
                src: "/gallery/villa-exterior-1.jpg",
                alt: "Villa on scaffolding stripped back to bare timber, part-way through a full exterior restoration",
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
            <Link href="/projects" className="font-semibold text-brand hover:underline">
              see the full projects
            </Link>
            .
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            What villa &amp; character work involves
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-dark/70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Character homes demand a different level of preparation.
          </h2>
          <div className="mt-4 max-w-3xl">
            {preparation.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-navy-dark/80">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-50 to-brand-100/60 p-8 sm:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">
            Lead paint — the part you can’t skip
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-navy-dark/80">
            <p>
              Many Auckland villas and bungalows contain lead-based paint beneath older
              layers. Removing old paint without the proper precautions can spread
              contaminated dust around your property and neighbouring homes.
            </p>
            <p>
              Every character home is assessed individually, and where lead paint is present
              or suspected, we follow safe lead management practices. This includes
              containment, protective sheeting, careful removal methods where appropriate, and
              responsible disposal of waste.
            </p>
            <p>
              Taking the time to do it properly helps protect your family, our team, your
              neighbours, and the environment. It’s a slower process, but it’s the right one.
            </p>
          </div>
          <Link
            href="/services/paint-stripping-removal"
            className="mt-6 inline-block font-bold text-brand hover:underline"
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
        text="Your home deserves more than just a fresh coat of paint. It deserves careful preparation, attention to detail and a finish built to withstand Auckland’s climate. Contact PaintLink today for a free quote and expert advice on painting your villa, bungalow or character home."
      />
    </>
  );
}
