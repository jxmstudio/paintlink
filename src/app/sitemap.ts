import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { projectsWithPages } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/services", priority: 0.9 },
    { path: "/villa-character-painting", priority: 0.9 },
    { path: "/areas", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/projects", priority: 0.7 },
    { path: "/testimonials", priority: 0.5 },
    { path: "/contact", priority: 0.8 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified,
      priority: 0.8,
    })),
    ...locations.map((l) => ({
      url: `${site.url}/areas/${l.slug}`,
      lastModified,
      priority: 0.7,
    })),
    ...projectsWithPages().map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      lastModified,
      priority: 0.6,
    })),
  ];
}
