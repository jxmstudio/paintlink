import { site } from "@/content/site";
import { locations } from "@/content/locations";
import type { Service } from "@/content/types";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: "+64 21 145 2876",
    email: site.email,
    foundingDate: String(site.establishedYear),
    description: site.description,
    image: `${site.url}/logo-full.png`,
    logo: `${site.url}/logo-icon.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Henderson",
      addressRegion: "Auckland",
      addressCountry: "NZ",
    },
    areaServed: [
      { "@type": "City", name: "Auckland" },
      ...locations.map((l) => ({
        "@type": "Place",
        name: `${l.name}, Auckland`,
      })),
    ],
    openingHours: "Mo-Sa 07:30-17:30",
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} — Auckland`,
    serviceType: service.name,
    description: service.metaDescription,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: [
      { "@type": "City", name: "Auckland" },
      { "@type": "Place", name: "West Auckland" },
      { "@type": "Place", name: "Central Auckland" },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
