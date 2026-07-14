import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/Cards";
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
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-brand/25 bg-brand-50 p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-navy">
            Own a villa or character home?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-dark/75">
            We specialise in Central Auckland’s villas and bungalows — heritage detail,
            lead-safe practices and era-appropriate colour schemes.
          </p>
          <Link
            href="/villa-character-painting"
            className="mt-4 inline-block font-bold text-brand hover:underline"
          >
            Villa &amp; Character Painting →
          </Link>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
