import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projectsWithPages } from "@/content/projects";
import { getService } from "@/content/services";
import { PageHero } from "@/components/PageHero";
import { ProjectShowcase } from "@/components/ProjectGallery";
import { CtaSection } from "@/components/CtaSection";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectsWithPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Recent Projects`,
    description: project.tagline ?? project.writeUp?.[0],
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  // Projects still waiting on photos don't get a page yet.
  if (!project || (project.photos.length === 0 && !project.beforeAfter)) notFound();

  const services = project.services
    .map((s) => getService(s))
    .filter((s) => s !== undefined);

  return (
    <>
      <PageHero
        title={project.title}
        intro={project.subtitle}
        crumbs={[
          { name: "Projects", href: "/projects" },
          { name: project.title, href: `/projects/${project.slug}` },
        ]}
      />

      <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <ProjectShowcase
          mainPhoto={project.mainPhoto}
          beforeAfter={project.beforeAfter}
          photos={project.photos}
        >
          {project.location && (
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              {project.location}
            </p>
          )}
          {project.writeUp?.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed text-navy-dark/80">
              {paragraph}
            </p>
          ))}
          {services.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-block rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy hover:border-brand hover:text-brand"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </ProjectShowcase>
      </article>

      <CtaSection
        heading="Want a finish like this one?"
        text="Every one of these jobs started with a free quote. Tell us what needs painting and we'll take it from there."
      />
    </>
  );
}
