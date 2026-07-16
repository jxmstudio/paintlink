// Recent projects — each entry is one job/house with its photo set.
//
// TODO (Shane): the photo groupings below are a best guess from the images
// themselves. Please confirm which photos belong to which job, add suburbs
// where known, and correct any titles/summaries. Each project is one object —
// easy to add, remove or reorder.

export type ProjectPhoto = { src: string; alt: string };

export type Project = {
  title: string;
  location?: string;
  /** Service slugs — rendered as linked tags. */
  services: string[];
  summary: string;
  /** Optional before/after pair, shown with Before/After badges. */
  beforeAfter?: { before: ProjectPhoto; after: ProjectPhoto };
  /** Remaining photos for the project. First one leads. */
  photos: ProjectPhoto[];
};

export const projects: Project[] = [
  {
    title: "Villa exterior restoration",
    location: "St Marys Bay",
    services: ["exterior-painting", "paint-stripping-removal"],
    summary:
      "A full exterior restoration of a two-storey character villa — weatherboards and joinery stripped back where the old coatings had failed, sash windows re-puttied and eased, and the whole exterior repainted in fresh whites and greys. The front door and stained-glass entry were restored to match.",
    beforeAfter: {
      before: {
        src: "st-marys-bay-before.jpg",
        alt: "St Marys Bay villa before its repaint, with tired and faded paintwork",
      },
      after: {
        src: "st-marys-bay-after.jpg",
        alt: "St Marys Bay villa after a full exterior repaint in fresh whites and greys",
      },
    },
    photos: [
      {
        src: "st-marys-bay-villa.jpg",
        alt: "Street view of the finished St Marys Bay villa behind a white picket fence",
      },
      {
        src: "st-marys-door-before.jpg",
        alt: "Front door with stained-glass surround before restoration",
      },
      {
        src: "st-marys-door-after.jpg",
        alt: "Front door with stained-glass surround after repainting",
      },
      {
        src: "paint-stripping-1.jpg",
        alt: "Bay window stripped back to bare timber during preparation",
      },
    ],
  },
  {
    title: "Villa weatherboard strip & repaint",
    // TODO (Shane): suburb + confirm these stripping/sash shots are one job
    services: ["paint-stripping-removal", "exterior-painting"],
    summary:
      "Generations of failed paint meant this villa needed serious preparation — weatherboards and window joinery stripped back to bare timber using safe lead-paint practices, then primed and rebuilt coat by coat. The sash windows went from bare, weathered timber to crisp black-and-white new.",
    beforeAfter: {
      before: {
        src: "villa-before.jpg",
        alt: "Original sash window stripped to bare timber during preparation",
      },
      after: {
        src: "villa-after.jpg",
        alt: "Finished porch with black sash windows and freshly painted weatherboards",
      },
    },
    photos: [
      { src: "paint-stripping-3.jpg", alt: "Weatherboards stripped back along the scaffold line" },
      { src: "paint-stripping-4.jpg", alt: "Window and dormer detail stripped to bare timber" },
      { src: "paint-stripping-2.jpg", alt: "Raw weatherboards ready for priming" },
    ],
  },
  {
    title: "Cedar restoration & re-stain",
    // TODO (Shane): suburb
    services: ["cedar-staining-restoration"],
    summary:
      "Sun-weathered cedar brought back to life — failed coatings and grey, oxidised timber removed with cedar-safe washing, then brightened and finished with a penetrating stain that restores the deep, even tone the cladding had when it was new.",
    beforeAfter: {
      before: {
        src: "cedar-restoration-before.jpg",
        alt: "Weathered cedar soffit with failing coating before restoration",
      },
      after: {
        src: "cedar-restoration-after.jpg",
        alt: "The same cedar restored to a rich, even tone",
      },
    },
    photos: [
      {
        src: "cedar-staining-1.jpg",
        alt: "Cedar cladding mid-stain, showing raw boards against freshly stained ones",
      },
      { src: "cedar-staining-2.jpg", alt: "Freshly stained cedar boards with an even finish" },
    ],
  },
  {
    title: "Concrete tile roof restoration",
    // TODO (Shane): suburb
    services: ["roof-painting", "house-washing-waterblasting"],
    summary:
      "A tired concrete tile roof treated for moss, waterblasted clean, repaired and recoated in a deep charcoal membrane system — years more life for a fraction of the cost of re-roofing.",
    beforeAfter: {
      before: {
        src: "roof-b-before.jpg",
        alt: "Concrete tile roof grey and weathered before restoration",
      },
      after: {
        src: "roof-b-after.jpg",
        alt: "Concrete tile roof recoated in uniform dark grey",
      },
    },
    photos: [],
  },
  {
    title: "Long-run roof coating, cedar home",
    // TODO (Shane): suburb + confirm roof-1 (harbour view) belongs to this job or its own
    services: ["roof-painting"],
    summary:
      "Long-run iron on a cedar-clad home, prepared and coated with a full roof membrane system for lasting protection against the weather.",
    beforeAfter: {
      before: {
        src: "roof-a-before.jpg",
        alt: "Long-run roof before coating, pale and weathered",
      },
      after: {
        src: "roof-a-after.jpg",
        alt: "Long-run roof after a full coating system in grey",
      },
    },
    photos: [
      {
        src: "roof-1.jpg",
        alt: "Long-run roof freshly coated in charcoal grey with harbour views beyond",
      },
    ],
  },
  {
    title: "Villa interior repaint",
    // TODO (Shane): suburb + confirm interior groupings (which shots are which house)
    services: ["interior-painting"],
    summary:
      "A full interior repaint through a character villa — original archways, deep skirtings and high ceilings painted in crisp whites that let the period detail do the talking.",
    photos: [
      { src: "interior-1.jpg", alt: "Villa hallway with original archway painted crisp white" },
      { src: "interior-3.jpg", alt: "Villa hallway archway detail freshly painted" },
      { src: "interior-4.jpg", alt: "White living room with original fireplace" },
      { src: "interior-6.jpg", alt: "Panelled ceiling with pendant light, freshly painted" },
    ],
  },
  {
    title: "Character home interior, warm neutrals",
    // TODO (Shane): suburb + confirm groupings
    services: ["interior-painting"],
    summary:
      "Warm modern neutrals through the living spaces, a panelled ceiling picked out cleanly, and bold green and yellow feature walls against natural timber — proof a character interior doesn't have to be all white.",
    photos: [
      {
        src: "interior-7.jpg",
        alt: "Living room with panelled ceiling and pendant lights in warm neutrals",
      },
      { src: "interior-2.jpg", alt: "Living room in warm neutrals with timber floors" },
      { src: "interior-5.jpg", alt: "Hallway in warm neutrals with polished timber floors" },
      {
        src: "interior-8.jpg",
        alt: "Bold green and yellow feature walls beside natural timber panelling",
      },
    ],
  },
  {
    title: "Exteriors: contemporary & weatherboard",
    // TODO (Shane): likely two separate jobs — split into two projects with suburbs
    services: ["exterior-painting"],
    summary:
      "A contemporary home's cedar-slat screens refreshed in deep red, and a classic weatherboard exterior finished in soft sage — two very different houses, the same preparation-first approach.",
    photos: [
      { src: "exterior-3.jpg", alt: "Modern home with cedar-slat screens repainted deep red" },
      { src: "exterior-4.jpg", alt: "Contemporary red-slat home exterior after repainting" },
      { src: "exterior-5.jpg", alt: "Weatherboard home repainted in soft sage green" },
      { src: "exterior-2.jpg", alt: "Villa eaves and arched window detail in white with red trim" },
    ],
  },
];
