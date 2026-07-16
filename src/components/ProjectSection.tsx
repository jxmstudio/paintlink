import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { getService } from "@/content/services";

const badgeClass =
  "absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm";

export function ProjectSection({ project, flip }: { project: Project; flip: boolean }) {
  const services = project.services
    .map((slug) => getService(slug))
    .filter((s) => s !== undefined);

  return (
    <article className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      {/* Photos */}
      <div className={flip ? "lg:order-2" : ""}>
        {project.beforeAfter ? (
          <div className="relative grid grid-cols-2 gap-1 overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 p-1 shadow-sm">
            <div className="relative aspect-[3/4] overflow-hidden rounded-l-xl">
              <Image
                src={`/gallery/${project.beforeAfter.before.src}`}
                alt={project.beforeAfter.before.alt}
                fill
                sizes="(min-width: 1024px) 20rem, 50vw"
                className="object-cover"
              />
              <span className={`${badgeClass} bg-navy-dark/85 text-white`}>Before</span>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-r-xl">
              <Image
                src={`/gallery/${project.beforeAfter.after.src}`}
                alt={project.beforeAfter.after.alt}
                fill
                sizes="(min-width: 1024px) 20rem, 50vw"
                className="object-cover"
              />
              <span className={`${badgeClass} bg-brand text-white`}>After</span>
            </div>
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-lg ring-1 ring-navy/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        ) : (
          project.photos[0] && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
              <Image
                src={`/gallery/${project.photos[0].src}`}
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
                    src={`/gallery/${photo.src}`}
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
        <p className="mt-4 leading-relaxed text-navy-dark/75">{project.summary}</p>
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
