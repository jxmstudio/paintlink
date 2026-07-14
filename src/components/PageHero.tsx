import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type Crumb = { name: string; href: string };

export function PageHero({
  title,
  intro,
  crumbs,
}: {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-brand-dark text-white">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        {crumbs && crumbs.length > 0 && (
          <>
            <JsonLd data={breadcrumbSchema([{ name: "Home", href: "" }, ...crumbs])} />
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/60">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                {crumbs.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-1.5">
                    <span aria-hidden="true">/</span>
                    {i === crumbs.length - 1 ? (
                      <span className="text-white/85">{c.name}</span>
                    ) : (
                      <Link href={c.href} className="hover:text-white">
                        {c.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </>
        )}
        <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>
        )}
      </div>
    </section>
  );
}
