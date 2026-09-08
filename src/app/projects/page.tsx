import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, projectsWithPages, unassignedWork } from "@/content/projects";
import { getService } from "@/content/services";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Recent Projects | House Painting Auckland",
  description:
    "Recent PaintLink projects across Auckland — villa restorations, school and commercial work, roof recoats and interior repaints, with before-and-after photos from real jobs.",
  alternates: { canonical: "/projects" },
};

// wgb.co.nz-style index (Shane's Sept 2026 request): each project is a card
// with a lead photo and one-liner, linking through to its own page.
export default function ProjectsPage() {
  const withPages = projectsWithPages();
  const awaitingPhotos = projects.filter((p) => p.photos.length === 0 && !p.beforeAfter);

  return (
    <>
      <PageHero
        title="Recent Projects"
        intro="Every project here is a real job by our own team — from everyday repaints to award-winning homes. Have a look around each one, from the first day on site through to the finished result."
        crumbs={[{ name: "Projects", href: "/projects" }]}
      />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 lg:space-y-24 lg:py-20">
        {withPages.map((project, i) => {
          const lead = project.beforeAfter?.after ?? project.photos[0];
          const flip = i % 2 === 1;
          return (
            <Reveal key={project.slug}>
              <article className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View project: ${project.title}`}
                  className={`group relative block aspect-[16/11] overflow-hidden rounded-2xl border border-navy/10 bg-brand-50 shadow-sm ${flip ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={lead.src}
                    alt={lead.alt}
                    fill
                    sizes="(min-width: 1024px) 44rem, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    priority={i === 0}
                  />
                </Link>
                <div className={flip ? "lg:order-1" : ""}>
                  {project.location && (
                    <p className="text-sm font-bold uppercase tracking-widest text-brand">
                      {project.location}
                    </p>
                  )}
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="transition-colors hover:text-brand"
                    >
                      {project.title}
                    </Link>
                  </h2>
                  {project.tagline && (
                    <p className="mt-3 text-lg leading-relaxed text-navy-dark/75">
                      {project.tagline}
                    </p>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-flex items-center gap-2 font-bold text-brand transition-colors hover:text-navy"
                  >
                    View this project
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {awaitingPhotos.length > 0 && (
        <section className="border-y border-navy/10 bg-brand-50/40">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-navy">
                Also recently completed
              </h2>
              <p className="mt-3 text-navy-dark/70">
                More jobs from around Auckland — photos for these are on their way.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {awaitingPhotos.map((project, i) => (
                <Reveal
                  as="li"
                  key={project.slug}
                  delay={(i % 3) * 80}
                  className="flex flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                >
                  {project.location && (
                    <p className="text-xs font-bold uppercase tracking-widest text-brand">
                      {project.location}
                    </p>
                  )}
                  <h3 className="mt-1 flex-1 text-lg font-bold text-navy">{project.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.services
                      .map((slug) => getService(slug))
                      .filter((s) => s !== undefined)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="inline-block rounded-full border border-navy/15 px-3 py-1 text-xs font-semibold text-navy hover:border-brand hover:text-brand"
                          >
                            {s.shortName}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-navy-dark/45">
                    Photos coming soon
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {unassignedWork.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">
              More of our work
            </h2>
            <p className="mt-3 text-navy-dark/70">
              Villas, roofs, cedar, decks and interiors from jobs across West and Central
              Auckland.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {unassignedWork.map((photo, i) => (
              <Reveal
                key={photo.src}
                delay={(i % 4) * 70}
                className="group relative aspect-square overflow-hidden rounded-xl border border-navy/10 bg-brand-50 shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 16rem, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CtaSection
        heading="Want your place on this page?"
        text="Every one of these jobs started with a free quote. Tell us what needs painting and we'll take it from there."
      />
    </>
  );
}
