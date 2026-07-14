import type { Metadata } from "next";
import { testimonials } from "@/content/testimonials";
import { PageHero } from "@/components/PageHero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Testimonials | What Our Clients Say",
  description:
    "Reviews from PaintLink clients across West & Central Auckland — homeowners, landlords and businesses on our painting, preparation and service.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="What Our Clients Say"
        intro="Our reputation is built one job at a time. Here's what homeowners, landlords and businesses across Auckland say about working with PaintLink."
        crumbs={[{ name: "Testimonials", href: "/testimonials" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.quote} t={t} />
          ))}
        </div>
      </section>
      <CtaSection
        heading="Ready to join them?"
        text="Free quotes across West & Central Auckland. Tell us about your job and we'll be in touch."
      />
    </>
  );
}
