import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Gallery | Our Painting Work Across Auckland",
  description:
    "Photos of PaintLink's completed painting work across West & Central Auckland — exteriors, interiors, roofs, decks and villa restorations.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        intro="A selection of recent jobs across West and Central Auckland. We're adding new photos all the time — before-and-afters especially, because nothing shows the difference like them."
        crumbs={[{ name: "Gallery", href: "/gallery" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <GalleryGrid />
      </section>
      <CtaSection
        heading="Want your place in the gallery?"
        text="Every one of these jobs started with a free quote. Yours can too."
      />
    </>
  );
}
