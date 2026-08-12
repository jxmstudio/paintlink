import type { Metadata } from "next";
import { services } from "@/content/services";
import { villaCard } from "@/content/villa";
import { PageHero } from "@/components/PageHero";
import { ServiceCard, LinkCard } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Painting Services Auckland | Interior, Exterior, Roof & More",
  description:
    "Every painting service your property needs — interior, exterior, roof, commercial, decks, cedar, schools, rentals and house washing. West & Central Auckland. Free quotes.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Painting Services"
        intro="One experienced team for every surface on your property — inside, outside, roof and grounds. Every job starts with proper preparation, uses quality paint systems, and finishes with a tidy handover."
        crumbs={[{ name: "Services", href: "/services" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80} className="flex">
              <ServiceCard service={s} priority={i < 3} />
            </Reveal>
          ))}
          <Reveal delay={(services.length % 3) * 80} className="flex">
            <LinkCard {...villaCard} />
          </Reveal>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
