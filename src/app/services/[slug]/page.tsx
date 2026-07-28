import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/content/services";
import { locations } from "@/content/locations";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { CheckIcon } from "@/components/Cards";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <PageHero
        title={service.h1}
        intro={service.blocks ? undefined : service.intro[0]}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div className="max-w-3xl">
            {service.blocks ? (
              service.blocks.map((block, i) =>
                block.kind === "photo" ? (
                  <div
                    key={block.src}
                    className="relative my-10 aspect-[4/3] w-full overflow-hidden rounded-xl border border-navy/10 shadow-sm"
                  >
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1024px) 48rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <section key={block.heading ?? block.body[0]} className="mt-10 first:mt-0">
                    {block.heading && (
                      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-navy">
                        {block.heading}
                      </h2>
                    )}
                    {block.body.map((p) => (
                      <p key={p} className="mb-4 leading-relaxed text-navy-dark/80">
                        {p}
                      </p>
                    ))}
                    {block.items && (
                      <ul className="mt-5 space-y-3">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                            <span className="leading-relaxed text-navy-dark/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {block.checkItems && (
                      <ul className="mt-6 space-y-4">
                        {block.checkItems.map((item) => (
                          <li key={item.title} className="flex items-start gap-3">
                            <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                            <span className="leading-relaxed text-navy-dark/80">
                              <strong className="font-bold text-navy">{item.title}</strong> —{" "}
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                )
              )
            ) : (
              <>
                {service.image && (
                  <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-xl border border-navy/10 shadow-sm">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 48rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                {service.intro.slice(1).map((p) => (
                  <p key={p} className="mb-4 leading-relaxed text-navy-dark/80">
                    {p}
                  </p>
                ))}

                {service.sections.map((section) => (
                  <section key={section.heading} className="mt-10">
                    <h2 className="text-2xl font-extrabold tracking-tight text-navy">
                      {section.heading}
                    </h2>
                    {section.body.map((p) => (
                      <p key={p} className="mt-4 leading-relaxed text-navy-dark/80">
                        {p}
                      </p>
                    ))}
                    {section.items && (
                      <ul className="mt-5 space-y-3">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                            <span className="leading-relaxed text-navy-dark/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {service.sidebarPhoto ? (
              <div className="overflow-hidden rounded-xl border border-navy/10 shadow-sm">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={service.sidebarPhoto.src}
                    alt={service.sidebarPhoto.alt}
                    fill
                    sizes="(min-width: 1024px) 20rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-brand-50/60 p-6">
                  <Link
                    href="/contact"
                    className="block rounded-lg bg-brand px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-dark"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-navy/10 bg-brand-50/60 p-6">
                <h2 className="text-lg font-extrabold text-navy">What’s included</h2>
                <ul className="mt-4 space-y-3">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span className="text-navy-dark/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 block rounded-lg bg-brand px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  Get a Free Quote
                </Link>
              </div>
            )}

            <div className="rounded-xl border border-navy/10 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                Where we do this work
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {locations.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/areas/${l.slug}`}
                      className="inline-block rounded-full border border-navy/15 px-3 py-1.5 text-xs font-semibold text-navy hover:border-brand hover:text-brand"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <FaqSection faqs={service.faqs} heading={`${service.name} — common questions`} />
      <CtaSection
        heading={`Need ${service.name.toLowerCase()}?`}
        text="Tell us about the job and we'll come back with a free, fixed quote — no obligation, no pressure."
      />
    </>
  );
}
