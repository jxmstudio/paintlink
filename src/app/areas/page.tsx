import type { Metadata } from "next";
import { locationsByRegion } from "@/content/locations";
import { site } from "@/content/site";
import { PageHero } from "@/components/PageHero";
import { AreaCard } from "@/components/Cards";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Service Areas | Painters West & Central Auckland",
  description:
    "PaintLink covers all of Auckland, with a focus on West Auckland (Henderson, Titirangi, New Lynn, Te Atatū, Glen Eden) and Central Auckland's villa suburbs. Free quotes.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  const west = locationsByRegion("West Auckland");
  const central = locationsByRegion("Central Auckland");

  return (
    <>
      <PageHero
        title="Areas We Cover"
        intro={`${site.serviceAreaSummary} These are the suburbs where we do the bulk of our work — but we quote jobs right across the Auckland region, so if you don't see your suburb, get in touch anyway.`}
        crumbs={[{ name: "Areas", href: "/areas" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">West Auckland</h2>
            <p className="mt-2 text-sm text-navy-dark/70">
              Our home turf — based here, working here every week.
            </p>
            <div className="mt-6 grid gap-4">
              {west.map((l) => (
                <AreaCard key={l.slug} location={l} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">
              Central Auckland
            </h2>
            <p className="mt-2 text-sm text-navy-dark/70">
              Specialist villa and character home territory.
            </p>
            <div className="mt-6 grid gap-4">
              {central.map((l) => (
                <AreaCard key={l.slug} location={l} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaSection
        heading="Don't see your suburb?"
        text="We cover the whole Auckland region — West and Central are simply where we're busiest. Call us and we'll sort you out."
      />
    </>
  );
}
