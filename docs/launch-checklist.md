# PaintLink — Launch checklist

Build-complete → live. Work through in order.

## Waiting on Shane

- [ ] **Exterior page files** — his layout is: Part 1 text → Photo 1 → Part 2 text →
      Part 3 text → Photo 2 → Photo 3 → Questions ("keep everything else same").
      The interior page already uses the `blocks` system in `src/content/services.ts`
      that this layout needs, so once the Dropbox files arrive it's a data-only edit:
      copy the `blocks` / `sidebarPhoto` / `faqs` shape from the `interior-painting`
      record, run the photos through the import script, done. No template work.
- [ ] **Copy review** — `docs/PaintLink-copy-review.docx` sent for his tracked-changes
      markup of the remaining pages (~20% he wants reworded).

## Before launch

- [ ] **Replace placeholder testimonials** — `src/content/testimonials.ts` (marked with
      "Placeholder"). Get 4–6 real reviews from Shane.
- [x] **Add real job photos** — done. Shane's photos are optimised in `public/gallery/` and
      curated in `src/content/gallery.ts` (singles + before/after pairs). To add more later,
      drop an optimised image in `public/gallery/` and add an entry there. A few unused
      extras (interior-3..6, exterior-1/4, paint-stripping-2..4, roof-2, villa-exterior-1)
      are already in the folder for rotation.
      Note: suburb captions are only set where known (St Marys Bay) — ask Shane where the
      other jobs were and add `location` fields for stronger local SEO.
- [ ] **Quote form backend** — now posts straight to JXM Forms, no env var needed
      (`docs/form-setup.md`). Send a test enquiry end-to-end and have JXM confirm it
      landed in the dashboard.
- [ ] **Confirm business details with Shane** — hours (`src/content/site.ts`, currently
      Mon–Sat 7:30–5:30 as a sensible default), and whether he wants a street address shown
      (schema currently lists Henderson locality only).
- [ ] **Social links** — if Facebook/Instagram pages are set up for the launch package, add
      `sameAs` links in `src/lib/schema.ts` and icons in the footer.

## Deploy

- [ ] Push to a Git repo, connect to Vercel (or Netlify) — zero-config Next.js deploy.
- [ ] Point `paintlink.co.nz` DNS at the host; verify HTTPS + www→apex redirect.
- [ ] Check `https://paintlink.co.nz/sitemap.xml` and `/robots.txt` resolve.

## After launch (proposal commitments)

- [ ] Google Search Console — verify domain, submit sitemap, request indexing of key pages.
- [ ] Confirm indexing of home + service + location pages after a few days.
- [ ] Google Business Profile (if add-on purchased) — create, link to site, categories:
      Painter / House Painter / Commercial Painter; service areas West Auckland primary.
- [ ] Test click-to-call on a real phone, and form submission from mobile.
- [ ] Run Lighthouse on home + one service page (target 90+ performance/SEO).
- [ ] Handover session with Shane — how enquiries arrive, how to send photos for updates,
      review-collection routine.
