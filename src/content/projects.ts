// Recent projects — the job list Shane supplied (August 2026), in his order.
//
// The projects page follows the wgb.co.nz layout Shane asked for (Sept 2026):
// an index of cards, each linking to its own /projects/[slug] page with the
// full write-up and photo gallery. Projects without photos render as a compact
// "coming soon" list on the index until the photos arrive.
//
// TODO (Shane): for each project still marked `photos: []`, send through the
// photos and a sentence or two about the job, and we'll promote it to a full
// project page. Before/after pairs are especially good — they carry the page.

import type { BeforeAfterPair, Photo } from "./types";

export type Project = {
  slug: string;
  title: string;
  location?: string;
  /** Service slugs — rendered as linked tags. */
  services: string[];
  /** One-liner under the title on the projects index card. */
  tagline?: string;
  /** Subheading at the top of the project's own page. */
  subtitle?: string;
  /** Full write-up, one string per paragraph, shown on the project's page. */
  writeUp?: string[];
  /** Optional before/after pair, shown with Before/After badges. */
  beforeAfter?: BeforeAfterPair;
  /**
   * The project's main photo. Leads on the index card and the project page,
   * ahead of the before/after pair. Falls back to the pair's "after", then
   * the first of `photos`.
   */
  mainPhoto?: Photo;
  /** Remaining photos for the project. First one leads on the index card. */
  photos: Photo[];
};

export const projects: Project[] = [
  {
    slug: "commercial-jobs",
    title: "Commercial jobs",
    services: ["commercial-painting", "exterior-painting"],
    tagline: "Offices, retail and multi-unit buildings, painted around live tenancies.",
    subtitle: "Painting that works around live businesses",
    writeUp: [
      "Offices, retail and multi-unit buildings across Auckland, worked from elevated platforms and scaffold so trading and tenancies carry on around us. Staged programmes, after-hours work where it's needed, and a fixed scope signed off before we start.",
    ],
    photos: [
      {
        src: "/gallery/commercial-1.jpg",
        alt: "PaintLink painter on an elevated work platform repainting a two-storey commercial building in Auckland",
      },
    ],
  },
  {
    slug: "royal-road-school",
    title: "Royal Road School",
    location: "Massey",
    services: ["school-painting", "interior-painting", "exterior-painting", "roof-painting"],
    tagline: "A full interior and exterior repaint, delivered over the school holidays.",
    subtitle: "The whole campus refreshed over the Christmas break",
    writeUp: [
      "Royal Road School contacted us to freshen up and maintain a number of their buildings, with a mix of interior and exterior painting required across the school — the interior of the hall and lunchroom, the hall roof, a large classroom block exterior, the library, toilet blocks, front desk, staffroom and administration areas.",
      "With a large amount of work to complete while keeping disruption to the school to a minimum, the project was scheduled over the Christmas holiday period, and our team completed the full scope on time and on budget, ready for students and staff to return for the new school year.",
    ],
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
    slug: "st-marys-bay-villa",
    title: "St Marys Bay villa",
    location: "St Marys Bay",
    services: ["exterior-painting", "paint-stripping-removal"],
    tagline: "Stripped to bare timber, restored — and still flawless five years on.",
    subtitle: "Proper preparation, proven five years later",
    // Write-up supplied by Shane (Dropbox screenshot, Aug 2026).
    writeUp: [
      "This villa required a full exterior strip and extensive timber rot repairs before we could even begin painting. We thought we'd do something a little different with this project. These finished photos weren't taken when the job was completed — they were taken five years later.",
      "We returned to carry out a few minor touch-ups before the owners put the property on the market, giving us the perfect opportunity to photograph it again. Five years after completion, the paintwork still looks like it was finished yesterday. A great example of what proper preparation, quality materials and a thorough painting system can achieve.",
    ],
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
    slug: "valley-rd-mt-eden",
    title: "Valley Rd character home",
    location: "Mt Eden",
    services: ["interior-painting", "exterior-painting"],
    tagline: "Character kept, contemporary finish delivered — an award-winning Mt Eden home.",
    subtitle: "Complete repaint of a character bungalow and its contemporary extension",
    // Write-up supplied by Shane (Dropbox screenshot, Sept 2026), in full.
    writeUp: [
      "This Mt Eden project involved the complete interior and exterior painting of a character Auckland bungalow following an extensive renovation and extension.",
      "Paint Link was brought in to complete the painting throughout the original home and the new contemporary addition. Careful preparation was a major part of the project, particularly across the existing character areas where older surfaces and detailed timberwork required extra attention before painting.",
      "Inside, we completed the full painting of the renovated and newly built spaces, working across a combination of original features and new finishes to achieve a consistent, high-quality result throughout the home.",
      "Externally, the house was fully prepared and painted, including the original bungalow and new addition. Particular attention was given to the weatherboards, trims and detailed exterior elements to ensure a sharp finish and long-term protection.",
      "The finished painting complemented the transformation of the property and contributed to what became an award-winning home, delivering a finish appropriate to the quality of the overall build.",
    ],
    // Shane's "Main photo valley rd project" (Dropbox New Updates folder,
    // Sep 2026) — the bright porch-and-steps shot leads the page and card.
    mainPhoto: {
      src: "/gallery/valley-rd-main.jpg",
      alt: "The finished Valley Rd bungalow's front porch and steps in warm sunlight, blue-grey weatherboards with red joinery",
    },
    beforeAfter: {
      before: {
        src: "/gallery/valley-rd-before.jpg",
        alt: "Valley Rd bungalow wrapped in scaffold during preparation, seen from the street steps",
      },
      after: {
        src: "/gallery/valley-rd-after.jpg",
        alt: "Valley Rd bungalow finished in soft blue-grey with deep red joinery, seen from the same street steps",
      },
    },
    // Shane's Dropbox set (Sept 2026), in the order he asked for:
    // start of job → prep → finished exterior → interiors.
    photos: [
      // Start of job
      {
        src: "/gallery/valley-rd-scaffold-start.jpg",
        alt: "Scaffolding going up across the front verandah of the Valley Rd bungalow at the start of the job",
      },
      {
        src: "/gallery/valley-rd-start-wrapped-roof.jpg",
        alt: "The bungalow shrink-wrapped for weather protection with weatherboards sanded back in patches",
      },
      // Prep
      {
        src: "/gallery/valley-rd-prep-columns.jpg",
        alt: "Porch columns and balustrade stripped back to bare timber during preparation",
      },
      {
        src: "/gallery/valley-rd-prep-verandah-arches.jpg",
        alt: "Verandah arches and columns stripped to bare timber behind the scaffold",
      },
      {
        src: "/gallery/valley-rd-prep-window-joinery.jpg",
        alt: "Bay window joinery stripped back to bare timber on the scaffold deck",
      },
      {
        src: "/gallery/valley-rd-prep-weatherboards.jpg",
        alt: "Weatherboards sanded back to bare timber around new window joinery before priming",
      },
      // Finished exterior
      {
        src: "/gallery/valley-rd-front.jpg",
        alt: "Finished Valley Rd character bungalow with fretwork arches, white columns and red-trimmed windows",
      },
      {
        src: "/gallery/valley-rd-ext-wide.jpg",
        alt: "Wide view of the finished bungalow in soft blue-grey under a dramatic sky",
      },
      {
        src: "/gallery/valley-rd-ext-front-corner.jpg",
        alt: "Front corner of the finished bungalow with red-trimmed windows and fresh landscaping",
      },
      {
        src: "/gallery/valley-rd-ext-porch-bay.jpg",
        alt: "Repainted front porch and bay window with deep red joinery against blue-grey weatherboards",
      },
      {
        src: "/gallery/valley-rd-ext-bay-window.jpg",
        alt: "Finished bay window with deep red frames and crisp white trim from the driveway",
      },
      {
        src: "/gallery/valley-rd-ext-porch-doors.jpg",
        alt: "Front porch with deep red doors, stained glass and freshly painted blue-grey floor",
      },
      {
        src: "/gallery/valley-rd-porch.jpg",
        alt: "Repainted veranda with deep red French doors and fresh blue-grey weatherboards",
      },
      {
        src: "/gallery/valley-rd-ext-porch-closeup.jpg",
        alt: "Close view of the finished porch with red French doors and detailed white columns",
      },
      {
        src: "/gallery/valley-rd-ext-columns.jpg",
        alt: "Verandah columns and fretwork arches freshly painted, looking up from the porch",
      },
      {
        src: "/gallery/valley-rd-ext-gable-arches.jpg",
        alt: "Gable and arched verandah detail with red-trimmed window after repainting",
      },
      {
        src: "/gallery/valley-rd-ext-verandah-door.jpg",
        alt: "Verandah with white columns and deep red front door after repainting",
      },
      {
        src: "/gallery/valley-rd-ext-verandah-walkway.jpg",
        alt: "Repainted verandah walkway with red French doors and blue-grey deck",
      },
      {
        src: "/gallery/valley-rd-ext-balustrade.jpg",
        alt: "Freshly painted white balustrade running along the side of the house",
      },
      {
        src: "/gallery/valley-rd-porch-chairs.jpg",
        alt: "Finished porch with black wire chairs, red-trimmed windows and French doors",
      },
      {
        src: "/gallery/valley-rd-courtyard.jpg",
        alt: "Rear courtyard of the extended bungalow with stone pavers, mature tree and swing",
      },
      {
        src: "/gallery/valley-rd-rear-extension.jpg",
        alt: "Rear of the extended bungalow with painted weatherboards opening onto the deck and garden",
      },
      {
        src: "/gallery/valley-rd-rear-pool.jpg",
        alt: "Rear of the extended bungalow at dusk with new deck and pool",
      },
      // Interiors
      {
        src: "/gallery/valley-rd-hallway.jpg",
        alt: "Repainted hallway through original glazed double doors, with stained glass above the front door",
      },
      {
        src: "/gallery/valley-rd-bedroom-door.jpg",
        alt: "Original panelled door and stained-glass window freshly painted in the character part of the home",
      },
      {
        src: "/gallery/valley-rd-dining-kitchen.jpg",
        alt: "Dining space in the new extension with high painted ceilings and timber kitchen beyond",
      },
      {
        src: "/gallery/valley-rd-kitchen-island.jpg",
        alt: "Timber kitchen island under a freshly painted raked ceiling in the new extension",
      },
      {
        src: "/gallery/valley-rd-kitchenette.jpg",
        alt: "Butler's pantry with blue tiled splashback, timber cabinetry and open shelving",
      },
      {
        src: "/gallery/valley-rd-ceiling-beams.jpg",
        alt: "Original ceiling beams painted in soft blue in a character room with leadlight windows",
      },
      {
        src: "/gallery/valley-rd-window-seat.jpg",
        alt: "Timber-lined window seat in the new extension looking out to the garden",
      },
      {
        src: "/gallery/valley-rd-window-seat-2.jpg",
        alt: "Window seat with cushions framed in timber, looking out over the rear garden",
      },
      {
        src: "/gallery/valley-rd-tv-room.jpg",
        alt: "Timber-panelled media room with open shelving and freshly painted ceiling",
      },
      {
        src: "/gallery/valley-rd-shelving.jpg",
        alt: "Open timber shelving between the kitchen and living spaces of the extension",
      },
      {
        src: "/gallery/valley-rd-stair-detail.jpg",
        alt: "Freshly painted stair detail where the new joinery meets the original home",
      },
    ],
  },
  {
    slug: "grey-lynn-villa",
    title: "Grey Lynn villa",
    location: "Grey Lynn",
    services: ["exterior-painting", "paint-stripping-removal"],
    photos: [],
  },
  {
    slug: "te-arai-rural-escape",
    title: "Te Arai rural escape",
    location: "Te Arai",
    services: ["interior-painting", "exterior-painting"],
    tagline: "A finish built around the architecture of a rural getaway.",
    // Heading supplied by Shane (Dropbox screenshot, Sept 2026).
    subtitle: "A finish built around the architecture",
    // Write-up supplied by Shane (Dropbox screenshot, Sept 2026), in full.
    writeUp: [
      "This architectural new build in Te Arai was designed as a rural getaway, combining contemporary architecture with natural materials that complement the surrounding landscape.",
      "Painting involved considerably more than simply applying colour. From the interior painting and detailed clear coating of exposed timber to exterior staining and specialist two-pack coatings, each surface required its own preparation, products and application methods.",
      "The result is a durable, carefully detailed finish that protects the different materials while allowing the architecture, natural timber features and rural character of this Te Arai retreat to stand out.",
    ],
    photos: [
      // Exterior and courtyard
      {
        src: "/gallery/te-arai-front.jpg",
        alt: "Front elevation of the single-level Te Arai home set on a grassy rise",
      },
      {
        src: "/gallery/te-arai-exterior.jpg",
        alt: "Brick and glass corner of the Te Arai new build under a wide painted soffit, with planted rock garden",
      },
      {
        src: "/gallery/te-arai-deck.jpg",
        alt: "Covered outdoor dining deck at Te Arai looking out over the rural landscape",
      },
      {
        src: "/gallery/te-arai-courtyard.jpg",
        alt: "Sheltered brick courtyard with outdoor fireplace and timber chairs",
      },
      {
        src: "/gallery/te-arai-courtyard-corner.jpg",
        alt: "Sheltered courtyard corner with timber chairs opening off the living space",
      },
      {
        src: "/gallery/te-arai-courtyard-doors.jpg",
        alt: "Full-height glazed doors folded open between the living space and brick courtyard",
      },
      {
        src: "/gallery/te-arai-cedar.jpg",
        alt: "Green-stained cedar courtyard walls above brickwork, with chimney flue against the sky",
      },
      // Interiors
      {
        src: "/gallery/te-arai-living.jpg",
        alt: "Open-plan living room with green-stained timber kitchen joinery and full-height glazing",
      },
      {
        src: "/gallery/te-arai-living-fireplace.jpg",
        alt: "Living room with freestanding fireplace, soft furnishings and views over the farmland",
      },
      {
        src: "/gallery/te-arai-fireplace.jpg",
        alt: "Freestanding black fireplace on a stone hearth beside full-height glazing",
      },
      {
        src: "/gallery/te-arai-dining.jpg",
        alt: "Timber dining table and chairs beside the green-stained kitchen joinery",
      },
      {
        src: "/gallery/te-arai-dining-view.jpg",
        alt: "Dining space with polished concrete floor and full-height glazing to the landscape",
      },
      {
        src: "/gallery/te-arai-bedroom.jpg",
        alt: "Bedroom with picture window framing the rural outlook, timber sill clear-coated",
      },
      {
        src: "/gallery/te-arai-bunk-room.jpg",
        alt: "Bunk room with green-stained timber bunks and soft pink carpet",
      },
      {
        src: "/gallery/te-arai-bathroom.jpg",
        alt: "Bathroom with green mosaic-tiled shower, timber vanity and stone basin",
      },
    ],
  },
  {
    slug: "te-atatu-minor-dwelling",
    title: "Te Atatū minor dwelling",
    location: "Te Atatū",
    services: ["interior-painting", "exterior-painting"],
    photos: [],
  },
  {
    slug: "sandringham-minor-dwelling",
    title: "Sandringham minor dwelling",
    location: "Sandringham",
    services: ["interior-painting", "exterior-painting"],
    photos: [],
  },
  {
    slug: "mt-albert-villa-extension",
    title: "Mt Albert villa extension",
    location: "Mt Albert",
    services: ["interior-painting", "exterior-painting"],
    photos: [],
  },
  {
    slug: "mt-eden-road-character-home",
    title: "Mt Eden Road character home",
    location: "Mt Eden",
    services: ["exterior-painting"],
    photos: [],
  },
  {
    slug: "laingholm-character-home",
    title: "Laingholm character home",
    location: "Laingholm",
    services: ["exterior-painting"],
    photos: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Projects with photos get their own /projects/[slug] page. */
export function projectsWithPages(): Project[] {
  return projects.filter((p) => p.photos.length > 0 || p.beforeAfter);
}

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
