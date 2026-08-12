import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { getService } from "@/content/services";
import { BeforeAfterPhotos } from "@/components/BeforeAfter";

export function ProjectSection({ project, flip }: { project: Project; flip: boolean }) {
  const services = project.services
    .map((slug) => getService(slug))
    .filter((s) => s !== undefined);

  return (
    <article className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      {/* Photos */}
      <div className={flip ? "lg:order-2" : ""}>
        {project.beforeAfter ? (
          <BeforeAfterPhotos pair={project.beforeAfter} />
        ) : (
          project.photos[0] && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
              <Image
                src={project.photos[0].src}
                alt={project.photos[0].alt}
                fill
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
          )
        )}

        {/* Thumbnail row: remaining photos (skip the lead photo when it's the main image) */}
        {(() => {
          const thumbs = project.beforeAfter ? project.photos : project.photos.slice(1);
          if (thumbs.length === 0) return null;
          return (
            <div className={`mt-3 grid gap-3 ${thumbs.length >= 4 ? "grid-cols-4" : "grid-cols-3"}`}>
              {thumbs.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-square overflow-hidden rounded-lg border border-navy/10"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 10rem, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          );
        })()}
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
