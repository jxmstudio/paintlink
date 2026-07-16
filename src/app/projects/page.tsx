import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { PageHero } from "@/components/PageHero";
import { ProjectSection } from "@/components/ProjectSection";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Recent Projects | House Painting Auckland",
  description:
    "Recent PaintLink projects across Auckland — villa restorations, roof recoats, cedar work and interior repaints, with before-and-after photos from real jobs.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Recent Projects"
        intro="A look at recent jobs across Auckland — real houses, real photos, and the before-and-afters that show what proper preparation and a quality finish actually do."
        crumbs={[{ name: "Projects", href: "/projects" }]}
      />
      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:space-y-24 lg:py-20">
        {projects.map((project, i) => (
          <ProjectSection key={project.title} project={project} flip={i % 2 === 1} />
        ))}
      </div>
      <CtaSection
        heading="Want your place on this page?"
        text="Every one of these jobs started with a free quote. Tell us what needs painting and we'll take it from there."
      />
    </>
  );
}
