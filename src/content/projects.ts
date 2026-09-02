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
        alt: "Royal Road School hall exterior repainted in cream weatherboards with a recoated grey roof",
      },
      {
        src: "/gallery/royal-road-walkway.jpg",
        alt: "Covered walkway at Royal Road School with freshly painted white window joinery and blue classroom doors",
      },
      {
        src: "/gallery/royal-road-classroom-windows.jpg",
        alt: "Freshly painted white window joinery on the classroom block with blue benches below",
      },
      {
        src: "/gallery/royal-road-room11-door.jpg",
        alt: "Classroom block walkway with a blue door, white weatherboards and repainted bench seats",
      },
      {
        src: "/gallery/royal-road-courtyard.jpg",
        alt: "Wide view across the courtyard to the repainted classroom blocks",
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
        src: "/gallery/royal-road-library-seating.jpg",
        alt: "Curved tiered reading seats against fresh orange and green walls in the repainted library",
      },
      {
        src: "/gallery/royal-road-library-floor.jpg",
        alt: "Repainted library interior with lime-green floor, orange feature walls and timber shelving",
      },
      {
        src: "/gallery/royal-road-admin-foyer.jpg",
        alt: "Admin entry foyer with repainted white walls and timber joinery",
      },
      {
        src: "/gallery/royal-road-admin-corridor.jpg",
        alt: "Repainted admin corridor with white walls and timber door frames",
      },
      {
        src: "/gallery/royal-road-staffroom.jpg",
        alt: "Staffroom kitchenette repainted in white with navy cabinetry at Royal Road School",
      },
      {
        src: "/gallery/royal-road-staffroom-kitchenette.jpg",
        alt: "Staffroom kitchenette with navy cabinetry and repainted walls and ceiling",
      },
      {
        src: "/gallery/royal-road-toilet-block.jpg",
        alt: "Refreshed toilet block interior with white walls and timber trim at Royal Road School",
      },
      {
        src: "/gallery/royal-road-toilet-block-exterior.jpg",
        alt: "Toilet block exterior with fresh cream weatherboards, white louvre windows and blue trim",
      },
      {
        src: "/gallery/royal-road-toilet-courtyard.jpg",
        alt: "Repainted cream-and-blue toilet block beside the courtyard path",
      },
      {
        src: "/gallery/royal-road-hall-prep.jpg",
        alt: "Hall interior mid-preparation with scaffold tower and drop sheets before repainting",
      },
      {
        src: "/gallery/royal-road-hall-roof.jpg",
        alt: "Royal Road School hall roof recoated in charcoal grey, looking along the ridge",
      },
      {
        src: "/gallery/royal-road-hall-roof-2.jpg",
        alt: "Newly coated grey hall roof slope looking out over Royal Road",
      },
    ],
  },
  {
    title: "St Marys Bay villa",
    location: "St Marys Bay",
    services: ["exterior-painting", "paint-stripping-removal"],
    // Write-up supplied by Shane (Dropbox screenshot, Aug 2026).
    summary:
      "This villa required a full exterior strip and extensive timber rot repairs before we could even begin painting. We thought we'd do something a little different with this project. These finished photos weren't taken when the job was completed — they were taken five years later. We returned to carry out a few minor touch-ups before the owners put the property on the market, giving us the perfect opportunity to photograph it again. Five years after completion, the paintwork still looks like it was finished yesterday. A great example of what proper preparation, quality materials and a thorough painting system can achieve.",
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
    // Full photo set from Shane's Dropbox (Aug 2026), in job order:
    // before → prep → primer → finished. Every photo opens in the lightbox.
    photos: [
      // Before
      {
        src: "/gallery/st-marys-01-before-front.jpg",
        alt: "Full front elevation of the villa in its faded cream and teal scheme before restoration",
      },
      {
        src: "/gallery/st-marys-02-before-door.jpg",
        alt: "Original front door with stained-glass surround, its paint worn and scuffed, before restoration",
      },
      {
        src: "/gallery/st-marys-03-before-verandah.jpg",
        alt: "Verandah with tired, chalky cream weatherboards and teal-framed sash windows before painting",
      },
      {
        src: "/gallery/st-marys-04-before-bay.jpg",
        alt: "Corner bay window with rust streaks and peeling paint on the weatherboards before restoration",
      },
      {
        src: "/gallery/st-marys-05-before-bay-window.jpg",
        alt: "Bay window with worn teal sashes and rust-stained trim before restoration",
      },
      {
        src: "/gallery/st-marys-06-before-side.jpg",
        alt: "Weathered cream side elevation and gable of the villa before painting",
      },
      {
        src: "/gallery/st-marys-07-before-peeling.jpg",
        alt: "Close-up of badly flaking, peeling paint around a sash window before stripping",
      },
      {
        src: "/gallery/st-marys-08-before-sash-windows.jpg",
        alt: "Side wall with two sash windows showing cracked, flaking paint before restoration",
      },
      // Prep
      {
        src: "/gallery/st-marys-09-prep-scaffold-front.jpg",
        alt: "Front of the villa wrapped in scaffolding with weatherboards stripped back to bare timber",
      },
      {
        src: "/gallery/st-marys-10-prep-street.jpg",
        alt: "Street view of the villa stripped to bare timber under full scaffolding",
      },
      {
        src: "/gallery/st-marys-11-prep-stripping.jpg",
        alt: "Side elevation mid-strip, lower weatherboards sanded back to bare timber with filler patches",
      },
      {
        src: "/gallery/st-marys-12-prep-bare-timber.jpg",
        alt: "Weatherboards stripped back to clean bare timber along the scaffold walkway",
      },
      {
        src: "/gallery/st-marys-13-prep-repairs.jpg",
        alt: "Stripped weatherboards and sash windows with filler and patch repairs, seen from the scaffold",
      },
      {
        src: "/gallery/st-marys-14-prep-bay.jpg",
        alt: "Bay window stripped entirely to bare timber with masked glass, harbour behind",
      },
      {
        src: "/gallery/st-marys-15-prep-verandah-window.jpg",
        alt: "Verandah triple sash window stripped and sanded to raw timber, ready for priming",
      },
      {
        src: "/gallery/st-marys-16-prep-verandah-ceiling.jpg",
        alt: "Verandah ceiling and archway stripped to bare sanded timber during preparation",
      },
      // Primer
      {
        src: "/gallery/st-marys-17-primer-corner.jpg",
        alt: "Corner of the villa in patchy white primer with filler spots and undercoat strips",
      },
      {
        src: "/gallery/st-marys-18-primer-side.jpg",
        alt: "Long side wall in fresh primer and undercoat with filler patches",
      },
      {
        src: "/gallery/st-marys-19-primer-door.jpg",
        alt: "Front door and porch fully coated in white undercoat, stained glass exposed",
      },
      {
        src: "/gallery/st-marys-20-primer-bay.jpg",
        alt: "Bay window corner in white undercoat with masked panes behind the scaffold",
      },
      {
        src: "/gallery/st-marys-21-primer-bay-2.jpg",
        alt: "Undercoated bay window and weatherboards behind scaffold poles and netting",
      },
      // Finished
      {
        src: "/gallery/st-marys-22-finished-front.jpg",
        alt: "Completed St Marys Bay villa in soft blue-grey with white trim, navy sashes and picket fence",
      },
      {
        src: "/gallery/st-marys-23-finished-bay.jpg",
        alt: "Finished bay window with navy sash, crisp white trim and dentil detail",
      },
      {
        src: "/gallery/st-marys-24-finished-door.jpg",
        alt: "Navy front door with stained glass and sidelights framed in fresh white trim",
      },
      {
        src: "/gallery/st-marys-25-finished-door-2.jpg",
        alt: "Front door with Art Nouveau stained glass after repainting in navy and white",
      },
      {
        src: "/gallery/st-marys-26-finished-verandah-window.jpg",
        alt: "Verandah triple sash window repainted with navy sashes and white sills",
      },
      {
        src: "/gallery/st-marys-27-finished-verandah-window-2.jpg",
        alt: "Close view of the repainted triple sash window with navy frames and white mouldings",
      },
      {
        src: "/gallery/st-marys-28-finished-verandah.jpg",
        alt: "Repainted verandah wall with navy sash windows and door against pale grey-green boards",
      },
      {
        src: "/gallery/st-marys-29-finished-soffit.jpg",
        alt: "Freshly painted pale grey verandah soffit and beams seen from below",
      },
      {
        src: "/gallery/st-marys-30-finished-eaves.jpg",
        alt: "Underside of the repainted eaves and verandah return in pale grey",
      },
      {
        src: "/gallery/st-marys-31-finished-windows.jpg",
        alt: "Repainted navy-framed windows and white fascia above the garden path",
      },
      {
        src: "/gallery/st-marys-32-finished-gable.jpg",
        alt: "Grey-green gable end and weatherboards freshly painted",
      },
      {
        src: "/gallery/st-marys-33-finished-side.jpg",
        alt: "Two-storey side elevation in new grey-green paint with white-trimmed windows",
      },
      {
        src: "/gallery/st-marys-34-finished-upper.jpg",
        alt: "Upper-storey wall and navy-framed window in fresh paint",
      },
      {
        src: "/gallery/st-marys-35-finished-bathroom-window.jpg",
        alt: "Repainted soffit, frosted window and weatherboards seen from below",
      },
      {
        src: "/gallery/st-marys-36-finished-rear.jpg",
        alt: "Rear elevation with navy sash windows, white trim bands and chimney after repainting",
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
