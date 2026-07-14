import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getLocation } from "@/content/locations";
import { getService } from "@/content/services";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { ServiceCard } from "@/components/Cards";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: { absolute: location.metaTitle },
    description: location.metaDescription,
    alternates: { canonical: `/areas/${location.slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const featured = location.featuredServices
    .map((s) => getService(s))
    .filter((s) => s !== undefined);
  const nearby = locations.filter(
    (l) => l.region === location.region && l.slug !== location.slug
  );

  return (
    <>
      <PageHero
        title={location.h1}
        intro={location.intro[0]}
        crumbs={[
          { name: "Areas", href: "/areas" },
          { name: location.name, href: `/areas/${location.slug}` },
        ]}
      />

      <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-3xl">
          {location.intro.slice(1).map((p) => (
            <p key={p} className="mb-4 leading-relaxed text-navy-dark/80">
              {p}
            </p>
          ))}
          {location.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy">
                {section.heading}
              </h2>
              {section.body.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-navy-dark/80">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">
            Popular services in {location.name}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-xl border border-navy/10 bg-brand-50/60 p-6 sm:p-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
            Also painting in {location.region}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {nearby.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/areas/${l.slug}`}
                  className="inline-block rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-brand hover:text-brand"
                >
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/areas"
                className="inline-block rounded-full bg-brand px-4 py-2 text-sm font-bold text-white hover:bg-brand-dark"
              >
                All areas →
              </Link>
            </li>
          </ul>
        </section>
      </article>

      <FaqSection
        faqs={location.faqs}
        heading={`Painting in ${location.name} — common questions`}
      />
      <CtaSection
        heading={`Need a painter in ${location.name}?`}
        text="Local team, free quotes, honest advice. Tell us about your job and we'll take it from there."
      />
    </>
  );
}
