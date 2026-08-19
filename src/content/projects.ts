// Recent projects — the job list Shane supplied (August 2026), in his order.
//
// Projects with photos render as full sections. The rest render as a compact
// "coming soon" list until the photos arrive.
//
// TODO (Shane): for each project still marked `photos: []`, send through the
// photos and a sentence or two about the job, and we'll promote it to a full
// section. Before/after pairs are especially good — they carry the page.

import type { BeforeAfterPair, Photo } from "./types";

export type Project = {
  title: string;
  location?: string;
  /** Service slugs — rendered as linked tags. */
  services: string[];
  /** Omitted for projects still awaiting details from Shane. */
  summary?: string;
  /** Optional before/after pair, shown with Before/After badges. */
  beforeAfter?: BeforeAfterPair;
  /** Remaining photos for the project. First one leads. */
  photos: Photo[];
};

export const projects: Project[] = [
  {
    title: "Commercial jobs",
    services: ["commercial-painting", "exterior-painting"],
    summary:
      "Offices, retail and multi-unit buildings across Auckland, worked from elevated platforms and scaffold so trading and tenancies carry on around us. Staged programmes, after-hours work where it's needed, and a fixed scope signed off before we start.",
    photos: [
      {
        src: "/gallery/commercial-1.jpg",
        alt: "PaintLink painter on an elevated work platform repainting a two-storey commercial building in Auckland",
      },
    ],
  },
  {
    title: "Royal Road School",
    location: "Massey",
    services: ["school-painting", "interior-painting", "exterior-painting", "roof-painting"],
    summary:
      "Royal Road School contacted us to freshen up and maintain a number of their buildings, with a mix of interior and exterior painting required across the school — the interior of the hall and lunchroom, the hall roof, a large classroom block exterior, the library, toilet blocks, front desk, staffroom and administration areas. With a large amount of work to complete while keeping disruption to the school to a minimum, the project was scheduled over the Christmas holiday period, and our team completed the full scope on time and on budget, ready for students and staff to return for the new school year.",
    photos: [
      {
        src: "/gallery/school-1.jpg",
        alt: "Freshly repainted school classroom block with crisp white joinery and blue trim along a covered walkway",
      },
      {
        src: "/gallery/school-2.jpg",
        alt: "Bright school library breakout space with freshly painted orange and green feature walls and tiered seating",
      },
      {
        src: "/gallery/royal-road-classroom-block.jpg",
        alt: "Royal Road School classroom block exterior repainted in cream weatherboards with a recoated grey roof",
      },
      {
        src: "/gallery/royal-road-walkway.jpg",
        alt: "Covered walkway at Royal Road School with freshly painted white window joinery and blue classroom doors",
      },
      {
        src: "/gallery/royal-road-entry.jpg",
        alt: "Repainted glazed entry at Royal Road School with crisp white window frames and blue trim",
      },
      {
        src: "/gallery/royal-road-library.jpg",
        alt: "Library breakout space with fresh orange and green feature walls and curved bench seating",
      },
      {
        src: "/gallery/royal-road-staffroom.jpg",
        alt: "Staffroom kitchenette repainted in white with navy cabinetry at Royal Road School",
      },
      {
        src: "/gallery/royal-road-toilet-block.jpg",
        alt: "Refreshed toilet block interior with white walls and timber trim at Royal Road School",
      },
      {
        src: "/gallery/royal-road-hall-roof.jpg",
        alt: "Royal Road School hall roof recoated in charcoal grey, looking along the ridge",
      },
    ],
  },
  {
    title: "St Marys Bay villa",
    location: "St Marys Bay",
    services: ["exterior-painting", "paint-stripping-removal"],
    summary:
      "A full exterior restoration of a two-storey character villa — weatherboards and joinery stripped back where the old coatings had failed, sash windows re-puttied and eased, and the whole exterior repainted in fresh whites and greys. The front door and stained-glass entry were restored to match.",
    beforeAfter: {
      before: {
        src: "/gallery/st-marys-bay-before.jpg",
        alt: "St Marys Bay villa before its repaint, with tired and faded paintwork",
      },
      after: {
        src: "/gallery/st-marys-bay-after.jpg",
        alt: "St Marys Bay villa after a full exterior repaint in fresh whites and greys",
      },
    },
    photos: [
      {
        src: "/gallery/st-marys-bay-villa.jpg",
        alt: "Street view of the finished St Marys Bay villa behind a white picket fence",
      },
      {
        src: "/gallery/st-marys-door-before.jpg",
        alt: "Front door with stained-glass surround before restoration",
      },
      {
        src: "/gallery/st-marys-door-after.jpg",
        alt: "Front door with stained-glass surround after repainting",
      },
      {
        src: "/gallery/paint-stripping-1.jpg",
        alt: "Bay window stripped back to bare timber during preparation",
      },
    ],
  },
  {
    title: "Valley Rd character home",
    location: "Mt Eden",
    services: ["exterior-painting"],
    photos: [],
  },
  {
    title: "Grey Lynn villa",
    location: "Grey Lynn",
    services: ["exterior-painting", "paint-stripping-removal"],
    photos: [],
  },
  {
    title: "Te Arai farm house",
    location: "Te Arai",
    services: ["exterior-painting"],
    photos: [],
  },
  {
    title: "Te Atatū minor dwelling",
    location: "Te Atatū",
    services: ["interior-painting", "exterior-painting"],
    photos: [],
  },
  {
    title: "Sandringham minor dwelling",
    location: "Sandringham",
    services: ["interior-painting", "exterior-painting"],
    photos: [],
  },
  {
    title: "Mt Albert villa extension",
    location: "Mt Albert",
    services: ["interior-painting", "exterior-painting"],
    photos: [],
  },
  {
    title: "Mt Eden Road character home",
    location: "Mt Eden",
    services: ["exterior-painting"],
    photos: [],
  },
  {
    title: "Laingholm character home",
    location: "Laingholm",
    services: ["exterior-painting"],
    photos: [],
  },
];

/**
 * Photos from jobs that haven't been matched to a named project yet. Shown as
 * a strip at the foot of the projects page so the work is still on show.
 *
 * TODO (Shane): tell us which of the projects above these belong to and we'll
 * move them up into that project.
 */
export const unassignedWork: Photo[] = [
  {
    src: "/gallery/villa-after.jpg",
    alt: "Villa porch with black sash windows and freshly painted weatherboards after restoration",
  },
  {
    src: "/gallery/cedar-restoration-after.jpg",
    alt: "Cedar cladding restored and re-stained to a rich, even tone",
  },
  {
    src: "/gallery/roof-after-charcoal.jpg",
    alt: "Corrugated iron roof restored and recoated in charcoal grey",
  },
  {
    src: "/gallery/interior-1.jpg",
    alt: "Villa hallway with original archway and mouldings painted crisp white",
  },
  {
    src: "/gallery/exterior-job-1.jpg",
    alt: "Contemporary home exterior painted deep crimson with cream trim and timber louvre screens",
  },
  {
    src: "/gallery/interior-8.jpg",
    alt: "Bold green and yellow feature walls beside natural timber panelling",
  },
  {
    src: "/gallery/exterior-5.jpg",
    alt: "Weatherboard home exterior repainted in soft sage green",
  },
  {
    src: "/gallery/deck-fence-1.jpg",
    alt: "Timber boundary fence and retaining walls stained a rich dark brown",
  },
];
