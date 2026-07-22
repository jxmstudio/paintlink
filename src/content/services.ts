import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortName: "Interior",
    metaTitle: "Interior Painting Auckland | House Painters | PaintLink",
    metaDescription:
      "Professional interior painting across West & Central Auckland. Walls, ceilings, trim and doors — clean prep, sharp lines and a tidy finish. Free quotes since 2018.",
    h1: "Interior Painting in Auckland",
    image: {
      src: "/gallery/interior-1.jpg",
      alt: "Villa hallway with original archway and mouldings painted crisp white by PaintLink",
    },
    blurb:
      "Walls, ceilings, trim and doors — careful prep and a flawless finish that transforms your rooms.",
    // Body comes from `blocks` below (client-supplied layout), so intro/sections/
    // included are unused for this service — edit `blocks` instead.
    intro: [],
    sections: [],
    included: [],
    blocks: [
      {
        kind: "text",
        body: [
          "Your interior deserves a finish that looks exceptional and stands the test of time. Whether you’re building a new home, renovating an existing space, adding an extension, or simply refreshing tired walls, PaintLink provides professional interior painting tailored to your project.",
          "Proudly serving Auckland since 2018, we’ve completed everything from feature walls and complete home repaints to large-scale new builds, renovations, and extensions. We work with homeowners, builders, and developers to deliver clean lines, smooth finishes, and craftsmanship you can rely on.",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/interior-hallway-arch.jpg",
        alt: "Villa hallway with original arch and mouldings painted crisp white by PaintLink",
      },
      {
        kind: "text",
        body: [
          "The quality of an interior paint job is determined by the preparation—not just the paint itself. That’s why we invest the time in proper surface preparation, including plaster repairs, crack filling, sanding, stain blocking and priming to create a smooth, durable finish.",
          "Every project is completed with the same attention to detail. We protect your home, keep work areas clean and organised, minimise dust wherever possible, and leave every room looking as though we were never there—apart from the fresh new finish.",
        ],
      },
      {
        kind: "text",
        heading: "What we can help with inside your home",
        body: [
          "Whether you’re refreshing a single room, renovating your entire home, or completing a new build, we don’t just apply paint—we prepare every surface properly to achieve a flawless, long-lasting finish.",
        ],
        checkItems: [
          {
            title: "Wallpaper removal",
            text: "Complete removal, adhesive cleanup and surface preparation ready for painting.",
          },
          {
            title: "GIB stopping & plastering repairs",
            text: "New GIB stopping, skim coating, crack repairs and seamless plaster repairs that blend perfectly with existing walls.",
          },
          {
            title: "Water damage & leak repairs",
            text: "We repair and prepare damaged walls and ceilings caused by leaks before applying premium stain-blocking systems.",
          },
          {
            title: "Mould, smoke & stain treatment",
            text: "Professional mould treatment, stain blocking and surface restoration to prevent stains bleeding back through the new paint.",
          },
          {
            title: "Hole, dent & wall repairs",
            text: "From picture hook holes to major wall damage, we restore surfaces to a smooth, paint-ready finish.",
          },
          {
            title: "Kitchen, bathroom & laundry painting",
            text: "Moisture-resistant coatings designed for high-humidity areas that are easy to clean and built to last.",
          },
          {
            title: "Airless sprayed doors, trim & cabinetry",
            text: "Factory-smooth, cabinetry-grade finishes on doors, skirting boards, architraves, window frames and built-in cabinetry.",
          },
          {
            title: "New builds, renovations & extensions",
            text: "Complete interior painting for builders, developers and homeowners, from new GIB through to final handover.",
          },
        ],
      },
      {
        kind: "photo",
        src: "/gallery/interior-prep-masked.jpg",
        alt: "Interior fully masked and drop-sheeted, prepped and ready for painting",
      },
      {
        kind: "text",
        heading: "Painting While You’re Living at Home",
        body: [
          "Many of our projects are completed while homeowners are still living in the property, so we work around your daily routine to keep disruption to a minimum. We carefully move and protect furniture, cover all floors and surfaces, and complete the work in planned stages so you can continue using your home wherever possible.",
          "We maintain a clean, organised worksite from start to finish and use premium low-VOC paints whenever suitable, helping reduce odours and allowing rooms to be back in use sooner. At the end of each day, we leave the work area tidy and safe for your family.",
          "We also work on vacant homes, new builds, renovations, rental properties and homes being prepared for sale. Whether you have a strict deadline between tenancies or need your home ready before listing photos or handover, we’ll work with you to keep your project on schedule.",
        ],
      },
    ],
    sidebarPhoto: {
      src: "/gallery/interior-panelled-lounge.jpg",
      alt: "Character living room with panelled ceiling and timber floors, freshly repainted",
    },
    faqs: [
      {
        q: "How much does it cost to paint the interior of a house?",
        a: "Every home is different, so we provide a detailed quotation after inspecting the property. While new builds can often be priced using square metre rates because the surfaces are new and consistent, repaints can’t be accurately priced that way. Existing homes vary greatly in the amount of preparation required, including plaster repairs, crack filling, wallpaper removal, stain blocking, mould treatment, water damage repairs and surface restoration. Quoting each project individually ensures you receive an accurate price with no surprises.",
      },
      {
        q: "How long does it take to paint the interior of a house?",
        a: "The time required depends on the size of the property, the condition of the existing surfaces, the amount of preparation needed and the scope of work. After we’ve inspected your project and prepared your quotation, we’ll provide a clear timeframe so you know exactly what to expect before work begins. Throughout the project, we’ll keep you updated on our progress and any changes to the schedule.",
      },
      {
        q: "Will there be much smell?",
        a: "Modern premium low-VOC paints produce very little odour compared to older paint systems. Good ventilation and quality products mean most rooms can be used again shortly after painting.",
      },
      {
        q: "Do you guarantee your work?",
        a: "Yes. We stand behind the quality of our workmanship and use premium paint systems designed for long-term performance. If any workmanship issues arise, we’ll return and put them right.",
      },
      {
        q: "Can you paint kitchen cabinets?",
        a: "Yes. Existing cabinets can often be professionally refinished instead of replaced, giving your kitchen a completely new look at a fraction of the cost of installing new cabinetry.",
      },
      {
        q: "Do you spray doors, trims and cabinets?",
        a: "Yes. We can airless spray doors, skirting boards, architraves, window frames and cabinetry to achieve a smooth, factory-quality finish that isn’t possible with standard brush application alone.",
      },
      {
        q: "What type of paint do you use?",
        a: "We use premium paint systems from trusted manufacturers including Dulux, Resene, Wattyl and other professional coatings depending on your project and the finish required.",
      },
      {
        q: "Can you paint over mould?",
        a: "We don’t simply paint over mould. We first treat the affected area, identify any moisture-related issues where possible, apply mould-resistant products where appropriate, and use stain-blocking primers before repainting.",
      },
      {
        q: "Do you remove wallpaper?",
        a: "Yes. We professionally remove wallpaper, remove old adhesive, repair any wall damage and prepare the surface correctly before painting. Proper preparation helps prevent future paint failure.",
      },
      {
        q: "Can you repair water damage from leaks?",
        a: "Yes. Once the source of the leak has been repaired, we can restore damaged plasterboard, carry out plaster repairs, apply stain-blocking primers and repaint the affected areas.",
      },
      {
        q: "Can you repair damaged walls before painting?",
        a: "Absolutely. We repair dents, holes, cracked plaster, damaged GIB, water-damaged areas, nail holes and other surface imperfections before painting to ensure a smooth, professional finish.",
      },
      {
        q: "Do I need to empty the rooms first?",
        a: "We ask that personal items, valuables and small breakables are removed before we start. We can carefully move and protect larger furniture where needed, making the process as easy as possible for you.",
      },
      {
        q: "Can I stay in my home while you’re painting?",
        a: "Yes. Many of our projects are completed while homeowners are living in the property. We work in stages, protect your furniture and flooring, minimise disruption, and leave the work area clean and tidy at the end of each day.",
      },
    ],
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortName: "Exterior",
    metaTitle: "Exterior House Painting Auckland | PaintLink Painters",
    metaDescription:
      "Exterior house painting for weatherboard, brick, plaster and more across West & Central Auckland. Proper prep, quality paint systems and lasting protection. Free quotes.",
    h1: "Exterior House Painting in Auckland",
    image: {
      src: "/gallery/exterior-5.jpg",
      alt: "Weatherboard home exterior freshly repainted in soft sage green by PaintLink",
    },
    blurb:
      "Weatherboard, plaster, brick and more — proper prep and paint systems built for Auckland weather.",
    intro: [
      "Your exterior paint is more than street appeal — it's the first line of defence between Auckland's weather and your home's structure. Sun, salt air and driving winter rain break paint down over time, and once water gets behind the film, timber rot follows.",
      "PaintLink repaints exteriors across West and Central Auckland: weatherboard villas and bungalows, plaster and brick homes, cedar, Hardiplank and modern claddings. Every job starts with thorough washing and preparation, because paint only lasts as long as the surface under it.",
    ],
    sections: [
      {
        heading: "Preparation is the job",
        body: [
          "Anyone can apply topcoat. The value in a professional exterior repaint is everything that happens first:",
        ],
        items: [
          "Full house wash to remove dirt, chalk and surface contaminants",
          "Scraping and sanding back flaking or failing paint",
          "Repairing or replacing rotten timber and re-puttying where needed",
          "Priming bare timber and spot-priming repairs",
          "Gap filling and sealing around joinery",
          "Two full topcoats in a premium exterior system",
        ],
      },
      {
        heading: "Cladding types we work with",
        body: [
          "Auckland housing stock is varied and each cladding needs its own approach. Weatherboard needs careful scraping and attention to end grain. Cedar needs the right stain or paint system to handle its natural oils. Plaster and monolithic claddings need flexible coatings that move with the substrate. We've painted them all since 2018, and we'll specify the right system for yours — not just the same paint on everything.",
        ],
      },
    ],
    included: [
      "Full exterior wash-down before painting",
      "Scraping, sanding, priming and minor repairs",
      "Premium exterior paint systems with manufacturer-backed durability",
      "Gardens, paths and decks protected throughout",
      "Scaffolding or access equipment arranged where required",
    ],
    faqs: [
      {
        q: "What time of year is best for exterior painting in Auckland?",
        a: "Spring through autumn is ideal, but Auckland's climate lets us paint exteriors most of the year — we plan around weather windows and never paint onto damp surfaces. Booking ahead for summer is recommended as it fills up fast.",
      },
      {
        q: "How long should an exterior paint job last?",
        a: "With proper preparation and a premium paint system, expect 8–12 years from a weatherboard repaint, and often longer on plaster or brick. Cheap, rushed jobs fail in 3–5 years — which is why we don't do them.",
      },
      {
        q: "Do you fix rotten weatherboards before painting?",
        a: "Yes. Minor rot repairs, board replacement and re-puttying are part of our standard preparation. If we find major structural issues we'll flag them honestly before proceeding.",
      },
    ],
  },
  {
    slug: "roof-painting",
    name: "Roof Painting",
    shortName: "Roof",
    metaTitle: "Roof Painting Auckland | Tile & Iron Roof Restoration | PaintLink",
    metaDescription:
      "Roof painting and restoration for concrete tile, metal and long-run iron roofs across Auckland. Treat, seal and coat — years more life for your roof. Free quotes.",
    h1: "Roof Painting in Auckland",
    image: {
      src: "/gallery/roof-1.jpg",
      alt: "Long-run metal roof freshly coated in charcoal grey by PaintLink, harbour in the background",
    },
    blurb:
      "Concrete tile, metal and long-run iron — restore, protect and add years of life to your roof.",
    intro: [
      "A tired roof drags the whole house down — and left too long, surface corrosion and porous tiles turn into leaks and expensive replacement. Roof painting is a fraction of the cost of re-roofing, and done properly it adds a decade or more of life.",
      "PaintLink paints and restores concrete tile, metal tile and long-run iron roofs across West and Central Auckland, using roof coating systems designed for New Zealand conditions.",
    ],
    sections: [
      {
        heading: "Our roof restoration process",
        body: [
          "Roof coatings only perform on a properly prepared surface. Our standard process:",
        ],
        items: [
          "Moss and mould treatment, then full waterblast clean",
          "Repairs — replacing broken tiles, re-bedding ridge caps, treating rust on iron",
          "Priming or sealing as the substrate requires",
          "Two coats of a dedicated roof membrane system, applied by spray for an even finish",
        ],
      },
      {
        heading: "Safety and access",
        body: [
          "Roof work is done with proper edge protection or harness systems as the job requires — compliant with WorkSafe requirements, with no shortcuts. We arrange all access equipment as part of the quote, so the price you see covers the whole job.",
        ],
      },
    ],
    included: [
      "Moss/mould treatment and waterblasting",
      "Minor roof repairs before coating",
      "Full roof membrane systems, spray applied",
      "Colour change options — modernise the whole look of your home",
      "Safety equipment and access included in the quote",
    ],
    faqs: [
      {
        q: "Is roof painting worth it, or should I just re-roof?",
        a: "If the roof structure is sound, painting is almost always the better-value option — typically 10–20% of the cost of replacement. During our inspection we'll tell you honestly if your roof is beyond coating.",
      },
      {
        q: "How long does a painted roof last?",
        a: "A properly prepared and coated roof should give you 10–15 years before it needs recoating. We use proven roof membrane systems, not standard house paint.",
      },
      {
        q: "Can you change my roof colour?",
        a: "Absolutely — a colour change is one of the most dramatic and affordable ways to modernise your home's exterior. We can match popular COLORSTEEL® shades or work with your preference.",
      },
    ],
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    shortName: "Commercial",
    metaTitle: "Commercial Painters Auckland | Offices, Retail & More | PaintLink",
    metaDescription:
      "Commercial painting across Auckland — offices, retail, warehouses, body corporate and more. After-hours work, clear programmes and minimal disruption. Free quotes.",
    h1: "Commercial Painting in Auckland",
    // STAND-IN photo — swap for a real commercial job shot when Shane sends one.
    image: {
      src: "/gallery/exterior-3.jpg",
      alt: "Contemporary building exterior repainted by PaintLink",
    },
    blurb:
      "Offices, retail, warehouses and body corporate work — on programme, on budget, minimal disruption.",
    intro: [
      "Commercial painting is a different discipline from residential. It's about programme certainty, health and safety compliance, and getting quality work done without interrupting your business.",
      "PaintLink handles commercial projects across Auckland — office interiors and exteriors, retail fit-out repaints, warehouses and industrial spaces, medical rooms, cafes and restaurants, and body corporate / multi-unit work. We've worked in live environments since 2018 and we know how to paint around a business that can't stop.",
    ],
    sections: [
      {
        heading: "Built around your operation",
        body: [
          "We plan every commercial job around your trading hours and your people:",
        ],
        items: [
          "After-hours, overnight and weekend work where needed",
          "Staged programmes so areas are returned to service fast",
          "Low-odour, fast-cure coating systems for occupied spaces",
          "Site-specific safety plans and SiteWise/health & safety documentation on request",
          "Clear fixed quotes and reliable scheduling — no surprises for your budget",
        ],
      },
      {
        heading: "Property managers and body corporates",
        body: [
          "We work with property managers, facilities managers and body corporate committees on planned maintenance painting — the scheduled repaints that protect asset value and keep buildings compliant and presentable. We're used to providing detailed scopes, staged pricing, and the documentation your stakeholders need to sign off.",
        ],
      },
    ],
    included: [
      "Fixed-price quotes with clear scope documentation",
      "Flexible scheduling including nights and weekends",
      "Health and safety compliance and documentation",
      "Durable commercial-grade coating systems",
      "One point of contact from quote to completion",
    ],
    faqs: [
      {
        q: "Can you paint our premises without closing the business?",
        a: "Yes — most of our commercial work is done in live environments. We stage the work, paint after hours where needed, and use low-odour products so your team and customers barely notice us.",
      },
      {
        q: "Do you carry insurance and safety documentation?",
        a: "Yes. We carry full public liability insurance and provide site-specific safety plans and documentation as required for commercial sites.",
      },
      {
        q: "How do you price commercial painting work?",
        a: "We inspect the site, agree a detailed scope with you, and provide a fixed quote against that scope. For larger or staged projects we can break pricing down by area or stage to suit your budgeting.",
      },
    ],
  },
  {
    slug: "paint-stripping-removal",
    name: "Paint Stripping & Removal",
    shortName: "Paint Stripping",
    metaTitle: "Paint Stripping & Removal Auckland | PaintLink",
    metaDescription:
      "Professional paint stripping and removal in Auckland — failing paint, heritage timber and lead-based coatings handled safely. The right start for a lasting repaint.",
    h1: "Paint Stripping & Removal in Auckland",
    image: {
      src: "/gallery/paint-stripping-1.jpg",
      alt: "Villa bay window stripped back to bare timber on scaffolding, ready for priming",
    },
    blurb:
      "Failing, flaking or decades-old paint stripped back properly — including safe lead paint practices.",
    intro: [
      "Sometimes paint is too far gone to paint over. Decades of built-up coats, widespread flaking, or failed previous work mean the only right answer is stripping back — because new paint applied over a failing surface fails with it.",
      "PaintLink provides professional paint stripping and removal across Auckland, most often on older weatherboard homes, villas and bungalows where generations of paint have reached the end of their life. It's slow, skilled work, and it's the foundation of a repaint that actually lasts.",
    ],
    sections: [
      {
        heading: "How we strip paint",
        body: [
          "The right method depends on the substrate, the paint history and the site. We use a combination of:",
        ],
        items: [
          "Infrared and heat-based stripping for heavy build-up on timber",
          "Chemical stripping systems for detail work and mouldings",
          "Mechanical sanding with dust extraction",
          "Wet scraping methods where lead paint is present",
        ],
      },
      {
        heading: "Lead paint — handled safely",
        body: [
          "Most New Zealand homes painted before the 1980s carry lead-based paint somewhere. Disturbing it carelessly puts your family and garden at risk. We follow safe lead paint practices in line with NZ guidelines — containment, wet methods, protective sheeting, and proper collection and disposal of debris. If you own an older home, this is not a job for a casual approach.",
        ],
      },
    ],
    included: [
      "Assessment of paint condition and the right removal method",
      "Safe lead-based paint practices on pre-1980s homes",
      "Containment and site protection throughout",
      "Debris collection and responsible disposal",
      "Surfaces left primed and ready for repainting",
    ],
    faqs: [
      {
        q: "How do I know if my house has lead paint?",
        a: "If any part of your home was painted before the mid-1980s, assume lead is present in the older layers. We can test suspect areas and will always default to safe lead practices on older homes.",
      },
      {
        q: "Does the whole house need stripping, or just the bad areas?",
        a: "Usually only the failing areas need full removal — sound, well-adhered paint can be feathered and painted over. We assess board by board and only strip what genuinely needs it, which keeps your cost down.",
      },
      {
        q: "Is stripping expensive?",
        a: "It's more labour-intensive than standard preparation, but it's a one-time investment. Repainting over failing paint means paying for the same repaint again in a couple of years when it lets go.",
      },
    ],
  },
  {
    slug: "deck-fence-painting-staining",
    name: "Deck & Fence Painting and Staining",
    shortName: "Decks & Fences",
    metaTitle: "Deck & Fence Staining Auckland | Painting | PaintLink",
    metaDescription:
      "Deck staining, fence painting and timber protection across West & Central Auckland. Wash, prep, and the right stain or paint system for outdoor timber. Free quotes.",
    h1: "Deck & Fence Painting and Staining in Auckland",
    // STAND-IN photo — swap for a real deck/fence shot when Shane sends one.
    image: {
      src: "/gallery/cedar-staining-2.jpg",
      alt: "Freshly stained timber boards with a rich, even finish",
    },
    blurb:
      "Outdoor timber washed, prepped and protected — stains and paints that stand up to sun and rain.",
    intro: [
      "Decks and fences take more punishment than any other painted surface on your property — full sun, rain, foot traffic and no shelter. Left bare, timber greys, cracks and rots. Coated properly, it looks sharp and lasts decades.",
      "PaintLink stains and paints decks, fences, pergolas and outdoor timber across West and Central Auckland. We'll recommend the right system for your timber and how you use it — penetrating stains that show the grain, or solid colours for a clean contemporary look.",
    ],
    sections: [
      {
        heading: "Deck restoration done right",
        body: [
          "Stain applied over dirty, grey or flaking timber fails within a season. Our process protects your investment:",
        ],
        items: [
          "Clean and strip back — removing grey oxidised timber, old failed coatings, moss and mould",
          "Sanding and repairs — smoothing rough boards, fixing nails and fixings",
          "The right product — penetrating oils, semi-transparent stains, or full paint systems depending on timber and look",
          "Two coats, worked into end grain and gaps where moisture gets in",
        ],
      },
      {
        heading: "Fences, pergolas and outdoor timber",
        body: [
          "We handle boundary fences, pool fences, pergolas, retaining walls, garden structures and outdoor furniture. Spray application makes bigger runs of fencing quick and economical, with brushed detail where it counts. A freshly stained fence line is one of the cheapest big improvements you can make to a property's street appeal.",
        ],
      },
    ],
    included: [
      "Washing, stripping and sanding as required",
      "Stain and paint systems matched to your timber",
      "Spray or brush application to suit the job",
      "Gardens and surfaces protected from overspray",
      "Advice on maintenance to maximise coating life",
    ],
    faqs: [
      {
        q: "Should I stain or paint my deck?",
        a: "Stains penetrate the timber, show the grain and wear gracefully — they're our usual recommendation for decks. Paint gives a solid colour but can peel under foot traffic. We'll advise based on your timber's condition and the look you want.",
      },
      {
        q: "How often does a deck need re-staining?",
        a: "Horizontal surfaces in full Auckland sun typically want a maintenance coat every 2–3 years. Fences and vertical surfaces last much longer. Regular light maintenance is far cheaper than full restoration.",
      },
      {
        q: "Can you bring a grey, weathered deck back to life?",
        a: "Yes — in most cases weathered timber cleans up remarkably well with the right wash-down products and sanding. Once the grey oxidised layer is removed, fresh stain restores the original colour and depth.",
      },
    ],
  },
  {
    slug: "cedar-staining-restoration",
    name: "Cedar Staining & Restoration",
    shortName: "Cedar",
    metaTitle: "Cedar Staining & Restoration Auckland | PaintLink",
    metaDescription:
      "Specialist cedar staining and restoration across Auckland. Weathered cedar cleaned, restored and protected with the right stain systems. Free quotes from PaintLink.",
    h1: "Cedar Staining & Restoration in Auckland",
    image: {
      src: "/gallery/cedar-restoration-after.jpg",
      alt: "Cedar soffit restored by PaintLink to a rich, even tone",
    },
    blurb:
      "Specialist care for cedar cladding — restoring weathered boards and protecting them properly.",
    intro: [
      "Cedar is one of the most beautiful claddings on Auckland homes — and one of the most unforgiving when neglected. Untreated, it silvers, dries and cups; coated with the wrong product, it peels and blotches. Cedar needs specialist knowledge, and that's exactly what this service is.",
      "PaintLink restores and stains cedar cladding, screens and features across West and Central Auckland — from 1970s cedar homes in the Waitākere foothills to modern cedar-clad builds.",
    ],
    sections: [
      {
        heading: "Restoring weathered cedar",
        body: [
          "Grey, sun-damaged cedar can almost always be brought back. Our restoration process:",
        ],
        items: [
          "Gentle wash — cedar is soft, and aggressive waterblasting destroys the surface, so we use low pressure and the right cleaning chemistry",
          "Removal of failed coatings and oxidised grey timber",
          "Brightening treatments to restore the natural tone",
          "Penetrating oil or stain systems formulated for cedar's natural oils",
        ],
      },
      {
        heading: "Why cedar fails with the wrong products",
        body: [
          "Cedar's natural oils and movement reject film-forming paints and generic stains — they sit on the surface, then crack and peel in sheets. The right approach is a penetrating system that moves with the timber and wears by gentle erosion, so maintenance coats go on without stripping. We only use systems proven on New Zealand cedar, and we'll set you up with a simple maintenance cycle that keeps it looking sharp for decades.",
        ],
      },
    ],
    included: [
      "Low-pressure washing and cedar-safe cleaning",
      "Failed coating removal and timber brightening",
      "Penetrating stain and oil systems made for cedar",
      "Colour matching to existing or new tones",
      "A realistic maintenance plan for your cladding",
    ],
    faqs: [
      {
        q: "My cedar has gone grey — is it ruined?",
        a: "Almost certainly not. Greying is surface-level UV damage, and with the right cleaning and brightening treatments the original warm tone underneath can be restored before re-staining.",
      },
      {
        q: "Can you paint over cedar instead of staining?",
        a: "It's possible but we rarely recommend it — cedar's oils and movement make paint failure common, and once painted, going back to stain is a major job. Penetrating stains are the proven long-term approach.",
      },
      {
        q: "How often does cedar need re-coating?",
        a: "Depending on exposure, penetrating stains typically want refreshing every 2–4 years on hard-weathered faces. It's a quick, affordable maintenance job when done on schedule — and an expensive restoration when left a decade.",
      },
    ],
  },
  {
    slug: "school-painting",
    name: "School Painting",
    shortName: "Schools",
    metaTitle: "School Painting Auckland | Education Facilities | PaintLink",
    metaDescription:
      "School and education facility painting across Auckland — holiday programmes, safe working practices and durable finishes for classrooms, halls and exteriors.",
    h1: "School Painting in Auckland",
    image: {
      src: "/gallery/school-roof.jpg",
      alt: "School roof freshly repainted by PaintLink",
    },
    blurb:
      "Classrooms, halls and exteriors — painted safely, on schedule, around the school calendar.",
    intro: [
      "School painting runs on a calendar like no other job — the work has to land in term breaks, be completely safe around children, and stand up to the hardest wear any building gets.",
      "PaintLink paints schools and education facilities across Auckland: classroom blocks, halls and gymnasiums, administration buildings, exterior repaints, fences and playground structures. We plan the programme around your term dates and deliver it inside the window, because there's no flexibility on when the kids come back.",
    ],
    sections: [
      {
        heading: "Working in school environments",
        body: [
          "Schools have specific requirements and we're set up for them:",
        ],
        items: [
          "Holiday-period programmes — the bulk of work delivered in term breaks",
          "Police-vetted, professional team for any work during term time",
          "Full site safety management — secured work areas, no hazards left accessible",
          "Durable, scrubbable coating systems that survive classroom life",
          "Property/board reporting and documentation for Ministry-funded work",
        ],
      },
      {
        heading: "Planned maintenance for school property",
        body: [
          "We work with principals, property managers and boards on cyclical maintenance painting — the 5YA and planned maintenance work that keeps school buildings weathertight and presentable. We can inspect, prioritise the blocks that need attention first, and stage the programme across breaks and budgets.",
        ],
      },
    ],
    included: [
      "Programmes built around term dates and school events",
      "Police-vetted team and strict site safety",
      "Hard-wearing, low-VOC coating systems",
      "Interior, exterior, roofs and playground structures",
      "Documentation to support board and Ministry processes",
    ],
    faqs: [
      {
        q: "Can you complete painting within a two-week term break?",
        a: "Yes — that's how most school work runs. We scope the job precisely beforehand, resource it properly, and commit to handover before students return. Larger programmes are staged across multiple breaks.",
      },
      {
        q: "Do your painters have police vetting?",
        a: "Yes. Any of our team working on school sites during term time are police-vetted, and we follow the school's visitor and safety procedures at all times.",
      },
      {
        q: "What paint do you use in classrooms?",
        a: "Washable, scrubbable low-VOC acrylics designed for high-traffic commercial use. Classroom walls take a beating — the right system means marks wipe off rather than needing repaints.",
      },
    ],
  },
  {
    slug: "rental-property-painting",
    name: "Rental Property Painting",
    shortName: "Rentals",
    metaTitle: "Rental Property Painting Auckland | Landlords & PMs | PaintLink",
    metaDescription:
      "Fast, tidy rental property painting across Auckland for landlords and property managers. Between-tenancy turnarounds, Healthy Homes friendly, fair fixed pricing.",
    h1: "Rental Property Painting in Auckland",
    // STAND-IN photo — swap for a real rental turnaround shot when Shane sends one.
    image: {
      src: "/gallery/interior-5.jpg",
      alt: "Freshly repainted hallway in warm neutrals with polished timber floors",
    },
    blurb:
      "Fast between-tenancy turnarounds for landlords and property managers — tidy, priced fairly, done on time.",
    intro: [
      "Every week a rental sits empty costs you money. When a tenancy ends and the walls are tired, you need a painter who can quote fast, start on time, and hand the property back ready for viewings — not one who fits you in around bigger jobs.",
      "PaintLink works with landlords and property managers across West and Central Auckland on exactly this. Since 2018 we've built our rental work around speed, tidiness and fair fixed pricing, because we know the vacancy clock is running.",
    ],
    sections: [
      {
        heading: "Built for the tenancy cycle",
        body: ["What landlords and property managers get from us:"],
        items: [
          "Fast quotes — often from a video walkthrough or agent access, same week",
          "Between-tenancy turnarounds — interiors typically done in 2–4 days",
          "Durable, washable paint systems that survive tenants and wipe clean",
          "Neutral colour schemes that photograph well and suit every applicant",
          "Direct invoicing to the property manager or owner, with clear documentation",
        ],
      },
      {
        heading: "Protecting your asset long-term",
        body: [
          "Beyond turnaround repaints, we help owners plan exterior maintenance painting to protect weathertightness — the kind of scheduled upkeep that avoids big remediation bills and keeps insurance and Healthy Homes obligations comfortably met. For portfolios, we can inspect and prioritise across multiple properties so budget goes where it matters most.",
        ],
      },
    ],
    included: [
      "Fixed quotes with fast turnaround",
      "Scheduling that fits tenancy dates",
      "Hard-wearing washable interior systems",
      "Exterior maintenance programmes for owners",
      "Easy invoicing for PMs and portfolio owners",
    ],
    faqs: [
      {
        q: "How quickly can you repaint a rental between tenancies?",
        a: "A standard interior refresh — walls, ceilings and touch-up trim — is typically 2–4 working days. If you give us the vacate date in advance, we'll book the slot so painting starts the day after final inspection.",
      },
      {
        q: "Do you work directly with property managers?",
        a: "Yes, much of our rental work comes through property managers. We can quote from agent access, coordinate keys, invoice the agency or owner directly, and provide photos on completion.",
      },
      {
        q: "What colours should I use in a rental?",
        a: "Modern warm neutrals — they photograph well, appeal to the widest range of tenants, and make touch-ups easy. We keep records of the colours used at each property so future touch-ups match perfectly.",
      },
    ],
  },
  {
    slug: "house-washing-waterblasting",
    name: "House Washing & Waterblasting",
    shortName: "House Washing",
    metaTitle: "House Washing & Waterblasting Auckland | Soft Wash | PaintLink",
    metaDescription:
      "House washing, soft washing and waterblasting across West & Central Auckland. Cladding, roofs, driveways, decks and fences cleaned safely. Free quotes.",
    h1: "House Washing & Waterblasting in Auckland",
    // STAND-IN photo — swap for a real washing/waterblasting shot when Shane sends one.
    image: {
      src: "/gallery/exterior-1.jpg",
      alt: "Two-storey home exterior during preparation and cleaning",
    },
    blurb:
      "Soft washing for cladding, waterblasting for concrete — mould, moss and grime gone safely.",
    intro: [
      "Auckland's humidity grows mould, moss and lichen on every outdoor surface — and beyond looking tired, that growth actively breaks down paint, timber and concrete. An annual wash is the cheapest maintenance your property can get.",
      "PaintLink provides house washing, soft washing and waterblasting across West and Central Auckland — as a standalone service, or as preparation before painting. Because we're painters first, we know exactly how much pressure each surface can take, and which ones need chemistry instead of force.",
    ],
    sections: [
      {
        heading: "The right method for each surface",
        body: [
          "High pressure on the wrong surface strips paint, furs up timber and forces water into cladding. We match the method to the material:",
        ],
        items: [
          "Soft washing — low pressure with biocide treatment for painted cladding, plaster and roofs; kills the growth at the root so it stays clean longer",
          "Waterblasting — high pressure for concrete driveways, paths, patios and pavers",
          "Deck and fence washing — moderate pressure and timber-safe cleaners",
          "Gutter and exterior surface cleaning while we're there",
        ],
      },
      {
        heading: "Standalone clean or pre-paint prep",
        body: [
          "Many of our washing clients are simply keeping their property sharp between repaints — an annual soft wash keeps cladding looking fresh and doubles the life of the paintwork. If you're heading toward a repaint, a professional wash is stage one of our preparation anyway, so it's a natural first step.",
        ],
      },
    ],
    included: [
      "Soft wash treatment for painted and delicate surfaces",
      "High-pressure cleaning for concrete and hard surfaces",
      "Biocide treatments that keep growth away longer",
      "Plants and gardens protected during washing",
      "Advice on wash frequency for your property",
    ],
    faqs: [
      {
        q: "What's the difference between soft washing and waterblasting?",
        a: "Waterblasting uses high pressure to physically blast grime off hard surfaces like concrete. Soft washing uses low pressure and cleaning solutions to kill and remove growth from painted or delicate surfaces without damage. Using the wrong one is how cladding and paint get wrecked.",
      },
      {
        q: "How often should I wash my house?",
        a: "Once a year for most Auckland homes — more often on the south side or under trees where growth is faster. Annual washing is also a condition of many paint manufacturers' durability warranties.",
      },
      {
        q: "Will washing damage my paint?",
        a: "Not the way we do it. Painted surfaces get soft washed, never blasted. As painters, protecting your paintwork is second nature — that's the advantage of having your washing done by the people who understand coatings.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
