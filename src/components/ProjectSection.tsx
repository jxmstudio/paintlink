import Link from "next/link";
import type { Project } from "@/content/projects";
import { getService } from "@/content/services";
import { ProjectGallery } from "@/components/ProjectGallery";

export function ProjectSection({ project, flip }: { project: Project; flip: boolean }) {
  const services = project.services
    .map((slug) => getService(slug))
    .filter((s) => s !== undefined);

  return (
    <article className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      {/* Photos — every photo opens full size in the lightbox */}
      <div className={flip ? "lg:order-2" : ""}>
        <ProjectGallery beforeAfter={project.beforeAfter} photos={project.photos} />
      </div>

      {/* Write-up */}
      <div className={flip ? "lg:order-1" : ""}>
        {project.location && (
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            {project.location}
          </p>
        )}
        <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          {project.title}
        </h2>
        {project.summary && (
          <p className="mt-4 leading-relaxed text-navy-dark/75">{project.summary}</p>
        )}
        {services.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
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
      </div>
    </article>
  );
}
