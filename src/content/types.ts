export type Faq = {
  q: string;
  a: string;
};

export type ContentSection = {
  heading: string;
  body: string[];
  items?: string[];
};

export type Photo = { src: string; alt: string };

/** Two photos of the same subject, shown side by side with Before/After badges. */
export type BeforeAfterPair = {
  before: Photo;
  after: Photo;
  /** Overrides the default "Before"/"After" badge text. */
  labels?: { before: string; after: string };
  /** Shape of each half. Defaults to 3/4 (portrait). */
  aspect?: "3/4" | "4/3" | "1/1";
  caption?: string;
};

/**
 * An ordered piece of a service page body. Used when a page needs a bespoke
 * text/photo running order (see the interior page) rather than the standard
 * intro + sections layout.
 */
export type ServiceBlock =
  | {
      kind: "text";
      heading?: string;
      body: string[];
      /** Plain bullet list (rendered with check icons), like ContentSection.items. */
      items?: string[];
      checkItems?: { title: string; text: string }[];
    }
  | { kind: "photo"; src: string; alt: string }
  | {
      kind: "beforeAfter";
      heading?: string;
      body?: string[];
      /** Stacked vertically when there's more than one. */
      pairs: BeforeAfterPair[];
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
  /** Photo used on service cards, and as the lead image when `blocks` is unset. */
  image?: { src: string; alt: string };
  /**
   * Bespoke body layout. When set, the page renders these in order instead of
   * `intro` + `sections`, and drops the lead image and hero intro so the first
   * block starts the page.
   */
  blocks?: ServiceBlock[];
  /** Replaces the sidebar's "What's included" box with this photo + quote CTA. */
  sidebarPhoto?: { src: string; alt: string };
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
