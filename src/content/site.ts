export const site = {
  name: "PaintLink",
  legalName: "PaintLink",
  domain: "paintlink.co.nz",
  url: "https://paintlink.co.nz",
  phone: "021 145 2876",
  phoneHref: "tel:+64211452876",
  email: "info@paintlink.co.nz",
  emailHref: "mailto:info@paintlink.co.nz",
  establishedYear: 2018,
  owner: "Shane Williams",
  description:
    "Professional house painters serving West and Central Auckland. Interior, exterior, roof and commercial painting — quality workmanship since 2018.",
  serviceAreaSummary:
    "Based in West Auckland, working across Central Auckland and the wider Auckland region.",
  regions: ["West Auckland", "Central Auckland"] as const,
  hours: "Mon–Sat, 7:30am–5:30pm",
} as const;

/** Years in business, computed so the site never goes stale. */
export function yearsInBusiness(): number {
  return new Date().getFullYear() - site.establishedYear;
}
