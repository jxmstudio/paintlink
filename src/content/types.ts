export type Faq = {
  q: string;
  a: string;
};

export type ContentSection = {
  heading: string;
  body: string[];
  items?: string[];
};

export type Service = {
  slug: string;
  name: string;
  /** Short label for nav/cards where space is tight. */
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** One-liner used on cards and index listings. */
  blurb: string;
  intro: string[];
  sections: ContentSection[];
  included: string[];
  faqs: Faq[];
  /** Optional real job photo shown on the service page (path under /public). */
  image?: { src: string; alt: string };
};

export type Region = "West Auckland" | "Central Auckland";

export type Location = {
  slug: string;
  name: string;
  region: Region;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  blurb: string;
  intro: string[];
  sections: ContentSection[];
  /** Service slugs featured on this location page. */
  featuredServices: string[];
  faqs: Faq[];
};
