// Gallery content — images live in /public/gallery (optimised to ~1600px max).
// Locations are only named where known; keep captions honest.

export type BeforeAfterPair = {
  before: string;
  after: string;
  label: string;
  location?: string;
  alt: string;
};

export type GalleryPhoto = {
  image: string;
  label: string;
  location?: string;
  alt: string;
  /** Natural dimensions of the optimised file (for uncropped masonry layout). */
  width: number;
  height: number;
};

const PORTRAIT = { width: 1200, height: 1600 };
const LANDSCAPE = { width: 1600, height: 1200 };

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    before: "st-marys-bay-before.jpg",
    after: "st-marys-bay-after.jpg",
    label: "Villa exterior repaint",
    location: "St Marys Bay",
    alt: "Two-storey villa exterior before and after a full repaint in fresh whites and greys",
  },
  {
    before: "cedar-restoration-before.jpg",
    after: "cedar-restoration-after.jpg",
    label: "Cedar restoration",
    alt: "Weathered cedar soffit before restoration and the same cedar restored to a rich, even tone",
  },
  {
    before: "roof-b-before.jpg",
    after: "roof-b-after.jpg",
    label: "Concrete tile roof restoration",
    alt: "Concrete tile roof before and after cleaning and recoating in dark grey",
  },
  {
    before: "st-marys-door-before.jpg",
    after: "st-marys-door-after.jpg",
    label: "Front door & entry restoration",
    location: "St Marys Bay",
    alt: "Villa front door with stained-glass surround before and after repainting",
  },
  {
    before: "villa-before.jpg",
    after: "villa-after.jpg",
    label: "Sash window restoration",
    alt: "Original sash window stripped and mid-preparation, then finished with black sashes and fresh weatherboards",
  },
  {
    before: "roof-a-before.jpg",
    after: "roof-a-after.jpg",
    label: "Long-run roof coating",
    alt: "Long-run roof on a cedar home before and after a full coating system",
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    image: "villa-exterior-3.jpg",
    label: "Villa verandah & fretwork",
    alt: "Restored villa verandah with turned posts and fretwork, freshly painted in blue-grey and white",
    ...LANDSCAPE,
  },
  {
    image: "interior-1.jpg",
    label: "Villa hallway interior",
    alt: "Villa hallway with original archway and mouldings painted crisp white",
    ...PORTRAIT,
  },
  {
    image: "exterior-5.jpg",
    label: "Weatherboard exterior repaint",
    alt: "Weatherboard home exterior freshly repainted in a soft sage green",
    ...PORTRAIT,
  },
  {
    image: "st-marys-bay-villa.jpg",
    label: "Villa exterior",
    location: "St Marys Bay",
    alt: "Street view of a freshly painted two-storey villa behind a white picket fence",
    ...LANDSCAPE,
  },
  {
    image: "interior-7.jpg",
    label: "Character interior repaint",
    alt: "Character living room with panelled ceiling and pendant lights, freshly painted in warm neutrals",
    ...PORTRAIT,
  },
  {
    image: "paint-stripping-1.jpg",
    label: "Full strip back to bare timber",
    alt: "Villa bay window stripped back to bare timber on scaffolding, ready for priming",
    ...PORTRAIT,
  },
  {
    image: "roof-1.jpg",
    label: "Long-run roof repaint",
    alt: "Long-run metal roof freshly coated in charcoal grey with harbour views beyond",
    ...PORTRAIT,
  },
  {
    image: "exterior-2.jpg",
    label: "Villa eaves & arch detail",
    alt: "Villa eaves and arched window detail finished in white with deep red trim",
    ...PORTRAIT,
  },
  {
    image: "exterior-3.jpg",
    label: "Contemporary exterior repaint",
    alt: "Modern home with horizontal cedar-slat screens repainted deep red",
    ...PORTRAIT,
  },
  {
    image: "cedar-staining-1.jpg",
    label: "Cedar re-staining in progress",
    alt: "Cedar cladding mid-stain, showing the contrast between raw and freshly stained boards",
    ...PORTRAIT,
  },
  {
    image: "interior-8.jpg",
    label: "Colour feature interior",
    alt: "Interior with bold green and yellow feature walls beside natural timber panelling",
    ...PORTRAIT,
  },
  {
    image: "villa-exterior-2.jpg",
    label: "Villa entry porch",
    alt: "Villa entry porch with freshly painted weatherboards and a blue-grey front door",
    ...PORTRAIT,
  },
  {
    image: "school-roof.jpg",
    label: "School roof repaint",
    alt: "Corrugated school roof freshly repainted in grey",
    ...PORTRAIT,
  },
  {
    image: "interior-2.jpg",
    label: "Living room refresh",
    alt: "Living room repainted in warm neutrals with polished timber floors",
    ...PORTRAIT,
  },
];
