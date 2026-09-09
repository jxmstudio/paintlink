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
    // Arch hallway swapped for Shane's "main photo" (client request, Sep 2026).
    image: {
      src: "/gallery/interior-main.jpg",
      alt: "Freshly painted living room with soft pink panelled ceiling, white trim and polished timber floors",
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
        // The pink-ceiling shot moved up to the page image; this slot now runs
        // the green-and-yellow interior (client request, Sep 2026).
        kind: "photo",
        src: "/gallery/interior-8.jpg",
        alt: "Bold green and yellow feature walls beside natural timber panelling",
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
    // Body comes from `blocks` below (client layout with interleaved photos).
    // `intro`/`sections` are unused for this service — edit `blocks` instead.
    intro: [],
    sections: [],
    blocks: [
      {
        kind: "text",
        body: [
          "A professionally painted exterior not only enhances the appearance of your home but also helps preserve its condition against Auckland’s demanding climate. From intense UV exposure to coastal salt air and seasonal rain, choosing the right products and preparing surfaces correctly is essential for a finish that lasts.",
          "PaintLink specialises in high-quality exterior painting for homes of every style, combining meticulous preparation, premium coatings and skilled workmanship to deliver exceptional, long-lasting results.",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/exterior-job-1.jpg",
        alt: "Contemporary home exterior freshly painted deep crimson with cream trim and timber louvre screens",
      },
      {
        kind: "text",
        heading: "Professional Surface Preparation for a Longer-Lasting Finish",
        body: [
          "The quality of an exterior paint job is determined long before the first coat is applied. Thorough preparation is what creates a smooth, durable finish and helps your paint system perform for years to come. We don’t just paint your home—we prepare every surface properly before any premium coatings are applied.",
        ],
        items: [
          "Complete exterior house washing to remove dirt, mould, mildew, spider webs and other surface contaminants",
          "Removal of loose and failing paint using scraping, sanding and stripping techniques where required to create a sound surface for repainting",
          "Timber repairs and restoration, including replacing damaged sections, re-puttying timber windows and repairing weathered joinery where required",
          "Surface repairs including filling cracks, dents, imperfections and minor defects to create a smooth, even finish",
          "Spot priming and full priming of bare timber, repairs and exposed surfaces using the correct primer for the substrate",
          "Rust treatment and corrosion protection for metal surfaces, nails and exposed fixings before painting",
          "Stain blocking to prevent water stains, tannin bleed and other marks from showing through the new paint system",
          "Protection of windows, roofing, landscaping, decks, paths and surrounding areas throughout the painting process",
          "Application of a premium exterior paint system, using manufacturer-recommended primers and two full finishing coats for maximum durability and appearance",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/exterior-job-3.jpg",
        alt: "Character villa on scaffolding during exterior preparation, primed white and ready for painting",
      },
      {
        kind: "text",
        heading: "Need a Professional Painting Company?",
        body: [
          "We proudly work with homeowners, businesses and industry professionals throughout Auckland — from a single home to multiple investment properties or a large commercial project, delivering the same high standard of workmanship, communication and reliability from start to finish. This includes:",
        ],
        items: [
          "Homeowners",
          "Builders",
          "Architects & Designers",
          "Property Developers",
          "Property Managers",
          "Real Estate Agents",
          "Commercial Property Owners",
          "Body Corporates",
          "Schools & Educational Facilities",
          "Shop & Office Owners",
          "Hospitality Businesses",
          "Retirement Villages",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/exterior-job-2.jpg",
        alt: "Two-storey board-and-batten home repainted in grey with red window trims and garage door",
      },
    ],
    // "What's included" box removed at client's request (Aug 2026).
    included: [],
    faqs: [
      {
        q: "Can you paint over old paint?",
        a: "Only if the existing paint is sound. Loose, peeling or failing paint must be removed, damaged areas repaired and bare surfaces correctly primed before repainting. Proper preparation is essential for a finish that lasts.",
      },
      {
        q: "How much does it cost to paint the exterior of a house?",
        a: "The cost depends on the size of your home, the type of cladding, ease of access, the condition of the existing paintwork and the amount of preparation required. After inspecting your property, we’ll provide a detailed fixed quotation outlining exactly what’s included, so there are no surprises.",
      },
      {
        q: "Can you paint my home during winter?",
        a: "Yes. Exterior painting can be completed throughout much of the year, provided weather conditions are suitable. We carefully monitor temperature, humidity and rain forecasts and only apply paint when conditions meet the manufacturer’s recommendations, ensuring a high-quality, long-lasting finish.",
      },
      {
        q: "What type of exterior paint do you use?",
        a: "We use premium exterior paint systems from trusted manufacturers such as Dulux, Resene and Wattyl. The products we recommend depend on your home’s cladding, condition and environment, ensuring the best balance of appearance, durability and long-term performance.",
      },
      {
        q: "Do you repair damaged weatherboards and timber before painting?",
        a: "Yes. We carry out minor timber repairs, replace damaged sections where required, repair window putty, fill surface defects and prepare all areas before painting. If more extensive building work is required, we’ll discuss this with you before work begins.",
      },
      {
        q: "Do I need to wash my house before it’s painted?",
        a: "Yes. Every exterior repaint should begin with a thorough house wash to remove dirt, mould, mildew, cobwebs and other contaminants. Painting over a dirty surface can affect adhesion and reduce the lifespan of the paint system.",
      },
      {
        q: "How often should I repaint the exterior of my house?",
        a: "The lifespan of an exterior paint system depends on your home’s location, the surface being painted and the quality of the previous preparation. Homes exposed to strong sun, coastal salt air or harsh weather generally require repainting sooner than sheltered properties. If you notice fading, peeling, cracking or exposed timber, it’s usually time for an inspection.",
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
    // Body comes from `blocks` below (client layout with interleaved photos).
    // `intro`/`sections` are unused for this service — edit `blocks` instead.
    intro: [],
    sections: [],
    blocks: [
      {
        kind: "text",
        body: [
          "A faded, weathered roof can make your entire home look older than it is. More importantly, once the original protective coating begins to break down, your roof becomes more vulnerable to corrosion and premature wear.",
          "Our professional roof painting service restores your roof’s appearance while applying a durable protective coating designed to withstand New Zealand’s conditions. It’s a smart investment that can extend the life of your roof for many years—at a fraction of the cost of replacing it.",
        ],
      },
      {
        // Photos only — client asked for no heading or captions here (Aug 2026).
        kind: "beforeAfter",
        pairs: [
          {
            before: {
              src: "/gallery/roof-before-moss.jpg",
              alt: "Faded red iron roof covered in moss and lichen before restoration",
            },
            after: {
              src: "/gallery/roof-d-after.jpg",
              alt: "The same iron roof after treatment, cleaning and recoating in charcoal grey",
            },
          },
          {
            before: {
              src: "/gallery/roof-tile-before.jpg",
              alt: "Weathered concrete tile roof, faded and patchy with moss along the ridge, before restoration",
            },
            after: {
              src: "/gallery/roof-tile-after.jpg",
              alt: "The same concrete tile roof after cleaning and recoating in charcoal grey",
            },
          },
          {
            labels: { before: "Primed", after: "Finished" },
            before: {
              src: "/gallery/roof-primed.jpg",
              alt: "Long-run roof on a cedar-clad home cleaned, sealed and primed part-way through the job",
            },
            after: {
              src: "/gallery/roof-c-after.jpg",
              alt: "The same long-run roof finished in grey, with new spouting",
            },
          },
        ],
      },
      {
        kind: "text",
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
        kind: "text",
        heading: "Safety and access",
        body: [
          "Roof work is done with proper edge protection or harness systems as the job requires — compliant with WorkSafe requirements, with no shortcuts. We arrange all access equipment as part of the quote, so the price you see covers the whole job.",
        ],
      },
    ],
    // "What's included" box removed at client's request (Aug 2026).
    included: [],
    faqs: [
      {
        q: "Is roof painting worth it, or should I just re-roof?",
        a: "In many cases, yes. If your roof is still structurally sound, professional roof painting can restore its appearance, protect it from further weathering, and extend its lifespan for many years—all at a fraction of the cost of a full roof replacement. However, if your roof has extensive structural damage or has reached the end of its service life, re-roofing may be the better long-term option. We’ll inspect your roof and give you honest advice on the most cost-effective solution.",
      },
      {
        q: "How long does a painted roof last?",
        a: "The lifespan of a painted roof depends on factors such as the roof material, its condition before painting, the quality of the preparation, and the coating system used. A professionally prepared and painted roof can provide many years of protection and significantly extend the life of your existing roof. Regular maintenance and keeping the roof clean will also help maximise its lifespan.",
      },
      {
        q: "How much does roof painting cost?",
        a: "Every roof is different, so pricing depends on factors such as the roof size, material, pitch, accessibility, condition, and the amount of preparation or repairs required. After inspecting your roof, we’ll provide a detailed, fixed quote with no hidden costs, so you know exactly what’s included before any work begins.",
      },
      {
        q: "How do I know if my roof needs painting or replacing?",
        a: "The best way to know is with a professional inspection. If your roof is faded, chalky, has minor surface rust, or the coating is breaking down but the roofing material is still structurally sound, painting is often the most cost-effective solution. If there is widespread corrosion, significant structural damage, or severe deterioration, replacement may be necessary. We’ll explain exactly what we find and recommend the option that offers the best long-term value for your home.",
      },
      {
        q: "My roof is leaking and in poor condition. Can it still be painted?",
        a: "Possibly. A leaking roof doesn’t always mean it needs replacing. During our inspection, we’ll assess the condition of your roof and determine whether it can be repaired and restored. In many cases, we can replace or patch damaged iron, treat rust, seal problem areas, and carry out the necessary preparation before applying a protective roof coating. While some roofs are simply beyond repair, many can be restored and continue performing well for several more years, helping you delay the cost of a full re-roof. If replacement is the better option, we’ll tell you honestly.",
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
    image: {
      src: "/gallery/commercial-1.jpg",
      alt: "PaintLink painter on an elevated work platform repainting a two-storey commercial building exterior in Auckland",
    },
    blurb:
      "Offices, retail, warehouses and body corporate work — on programme, on budget, minimal disruption.",
    intro: [
      "Commercial painting is about delivering professional results while keeping your project on schedule. From offices and warehouses to retail spaces, schools, and apartment complexes, we understand the importance of planning, health and safety compliance, and efficient project management.",
      "Our experienced team works around your business where possible, providing durable, high-quality finishes with minimal disruption, clear communication, and reliable workmanship from start to finish.",
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
        q: "Can you complete painting work without disrupting our business?",
        a: "Yes. We understand that downtime costs money. Where possible, we can schedule work outside normal business hours, work in stages, or isolate areas to minimise disruption. Every project is planned to keep your business operating safely while maintaining a high standard of workmanship.",
      },
      {
        q: "Do you work with builders, property managers and body corporates?",
        a: "Absolutely. We regularly work with builders, commercial property owners, property managers, body corporates, schools, offices, retail stores, warehouses, and industrial facilities. We’re experienced in working alongside other trades and delivering projects on time and to specification.",
      },
      {
        q: "Are you insured and health & safety compliant?",
        a: "Yes. Health and safety is a priority on every commercial project. We follow site-specific safety requirements, use appropriate access equipment, and maintain safe work practices throughout the job. We also carry comprehensive public liability insurance for your peace of mind.",
      },
      {
        q: "Can you provide a quote for large commercial projects?",
        a: "Yes. Whether it’s a single office, retail shop, warehouse, apartment complex, or a large-scale commercial development, we’re happy to inspect the site and provide a detailed, transparent quotation. We’ll discuss the scope of work, recommend the most suitable coating system, and provide a realistic project timeline before work begins.",
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
    // Body comes from `blocks` below (client layout with interleaved photos).
    // `intro`/`sections` are unused for this service — edit `blocks` instead.
    intro: [],
    sections: [],
    blocks: [
      {
        kind: "text",
        body: [
          "Not every surface can simply be painted over. When existing paint is heavily flaking, peeling, poorly bonded, or has decades of built-up coatings, applying new paint without removing the old layers often leads to premature failure.",
          "Our paint stripping and removal service provides a clean, stable surface ready for proper preparation and repainting. Whether using mechanical sanding, chemical stripping, or other suitable methods, we’ll recommend the safest and most effective solution to achieve a long-lasting finish.",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/paint-stripping-job-1.jpg",
        alt: "Villa bay window stripped back to bare timber on scaffolding, with masking film on the glass and the harbour beyond",
      },
      {
        kind: "text",
        heading: "How We Strip Paint",
        body: [
          "Every surface is different, so we choose the most suitable paint removal method based on the type of substrate, the condition of the existing coatings, and the desired finish.",
          "Our paint stripping process may include:",
        ],
        items: [
          "Specialised paint removal grinders fitted with timber-safe stripping discs and integrated dust extraction for fast, efficient removal of failing coatings",
          "Chemical paint stripping for intricate areas, decorative mouldings, and surfaces where mechanical removal isn’t suitable",
          "Careful hand scraping and detailed preparation to remove remaining loose paint and achieve a clean, stable surface",
          "Thorough sanding, repairs, and surface preparation to ensure the new paint system bonds correctly and delivers a long-lasting finish",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/paint-stripping-job-2.jpg",
        alt: "Timber weatherboard cladding stripped back to bare timber on scaffolding, ready for priming",
      },
      {
        kind: "text",
        heading: "Lead Paint – Handled Safely",
        body: [
          "Many homes built before the 1980s may contain lead-based paint. If disturbed incorrectly, lead paint can pose health risks to your family, neighbours, and the surrounding environment.",
          "Our team follows recognised New Zealand lead-safe work practices, including careful site containment, dust control, protective coverings, and responsible collection and disposal of paint waste. Every project is completed with safety as the priority.",
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
        q: "How do I know if my paint needs to be stripped instead of repainted?",
        a: "If the existing paint is peeling, flaking, bubbling, or has multiple failing layers, simply painting over it usually won’t provide a long-lasting result. We’ll inspect the surface and recommend whether paint stripping or standard preparation is the best option.",
      },
      {
        q: "Why is paint stripping more expensive than standard preparation?",
        a: "Paint stripping is a more labour-intensive process that involves removing old coatings before any repairs, preparation, or painting can begin. While it requires more time and care, it often provides the best long-term result by creating a clean, stable surface that allows new paint to bond properly and last much longer.",
      },
      {
        q: "Will stripping the paint damage the surface underneath?",
        a: "When carried out correctly, paint stripping is designed to preserve the underlying surface. We use the most suitable stripping method for each project to minimise damage while removing failing coatings, leaving the surface ready for repairs, preparation, and repainting.",
      },
      {
        q: "Can all types of paint be stripped?",
        a: "In most cases, yes. We can remove paint from a wide range of surfaces, including timber, weatherboards, doors, windows, metal, and other exterior and interior surfaces. The stripping method we use depends on the type of coating and the condition of the surface.",
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
    image: {
      src: "/gallery/deck-fence-1.jpg",
      alt: "Timber boundary fence and retaining walls stained a rich dark brown, with a freshly built deck alongside",
    },
    blurb:
      "Outdoor timber washed, prepped and protected — stains and paints that stand up to sun and rain.",
    // Body comes from `blocks` below (converted so the red fence photo could be
    // added mid-page — client request, Sep 2026). Edit `blocks`, not intro/sections.
    intro: [],
    sections: [],
    blocks: [
      {
        kind: "text",
        body: [
          "Your deck and fence are exposed to New Zealand’s harsh weather every day. Constant sun, rain, moisture, and foot traffic gradually break down timber, causing it to fade, crack, split, and weather over time.",
          "Whether you’re looking to restore natural timber with a stain or completely transform it with paint, proper preparation and the right coating system are essential. Our professional restoration process protects your timber, enhances its appearance, and helps extend its lifespan for years to come.",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/deck-fence-1.jpg",
        alt: "Timber boundary fence and retaining walls stained a rich dark brown, with a freshly built deck alongside",
      },
      {
        kind: "text",
        heading: "Professional Deck & Fence Restoration",
        body: [
          "A long-lasting finish starts with proper preparation. Our process includes:",
        ],
        items: [
          "Cleaning & preparation — removing dirt, mould, weathered timber, and failing coatings",
          "Sanding & repairs — smoothing timber, securing loose boards, and carrying out minor repairs where needed",
          "The right coating — selecting the best stain, oil, or paint to suit your timber and desired finish",
          "Professional application — applying premium products correctly for long-lasting protection and a high-quality finish",
        ],
      },
      {
        // The red fence shot from Shane's Dropbox (Sep 2026).
        kind: "photo",
        src: "/gallery/deck-red-fence.jpg",
        alt: "Modern horizontal-slat timber fence freshly painted deep red, with palms behind",
      },
      {
        kind: "text",
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
    // Body comes from `blocks` below so the before/after sits mid-page.
    // `intro`/`sections` are unused for this service — edit `blocks` instead.
    intro: [],
    sections: [],
    blocks: [
      {
        kind: "text",
        body: [
          "Cedar is a premium natural timber that adds warmth, character, and value to any home. To keep it looking its best, it requires specialist preparation and the correct coating system.",
          "Whether your cedar has faded, weathered, or simply needs refreshing, we restore and protect it using proven restoration techniques and high-quality stains that enhance its natural grain while providing long-lasting protection against the elements.",
          "PaintLink specialises in restoring and staining cedar cladding, screening, soffits, and architectural features throughout Auckland. From classic cedar homes to modern architectural builds, we restore weathered timber and protect it with premium stain systems designed for New Zealand’s conditions.",
        ],
      },
      {
        kind: "beforeAfter",
        heading: "Before and after",
        pairs: [
          {
            // Before photo swapped for the Dropbox one that matches the
            // after shot's angle (client request, Aug 2026).
            before: {
              src: "/gallery/cedar-before-matched.jpg",
              alt: "Weathered, faded cedar cladding and gable seen along the wall before restoration",
            },
            after: {
              src: "/gallery/cedar-restoration-after.jpg",
              alt: "The same cedar gable restored and re-stained to a rich, even tone, with the soffit repainted",
            },
            caption:
              "The same gable end — weathered, oxidised cedar cleaned back, brightened and finished with a penetrating stain.",
          },
          {
            before: {
              src: "/gallery/cedar-dissent-before.jpg",
              alt: "Vertical cedar gable with faded, patchy boards around full-height windows before re-staining",
            },
            after: {
              src: "/gallery/cedar-dissent-after.jpg",
              alt: "The same vertical cedar gable finished in a deep, even dark stain",
            },
          },
        ],
      },
      {
        kind: "text",
        heading: "Restoring Weathered Cedar",
        body: [
          "Weathered cedar doesn’t always need replacing. With the right preparation and restoration process, faded, grey timber can often be brought back to life.",
          "Our restoration process includes:",
        ],
        items: [
          "Gentle cleaning — low-pressure washing and specialised cleaners remove dirt, mould, mildew, and surface contaminants without damaging the timber",
          "Surface restoration — removing weathered fibres, oxidised timber, and failed coatings to create a clean, even surface",
          "Timber brightening — restoring the cedar’s natural warmth and colour before staining",
          "Premium cedar stains — applying high-quality penetrating stains that nourish the timber, enhance its natural grain, and provide long-lasting protection against New Zealand’s harsh climate",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/cedar-staining-1.jpg",
        alt: "Cedar cladding part-way through staining, raw boards alongside freshly stained ones",
      },
      {
        kind: "text",
        heading: "Protecting Cedar the Right Way",
        body: [
          "Cedar is a premium natural timber that deserves the right treatment. Unlike conventional paints and coatings, premium penetrating stains absorb into the timber, allowing it to breathe and move naturally while protecting it from the elements.",
          "By using the correct products and application methods, we enhance the cedar’s natural grain, reduce the risk of peeling and flaking, and make ongoing maintenance easier and more cost-effective—keeping your cedar looking its best for years to come.",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/cedar-staining-2.jpg",
        alt: "Freshly stained cedar boards with a deep, even finish",
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
      src: "/gallery/school-1.jpg",
      alt: "Freshly repainted school classroom block with crisp white joinery and blue trim along a covered walkway",
    },
    blurb:
      "Classrooms, halls and exteriors — painted safely, on schedule, around the school calendar.",
    // Body comes from `blocks` below (client layout with interleaved photos).
    // `intro`/`sections` are unused for this service — edit `blocks` instead.
    intro: [],
    sections: [],
    blocks: [
      {
        kind: "text",
        body: [
          "Painting schools is about more than applying paint. It requires detailed planning, clear communication, and a strong commitment to health and safety.",
          "From classrooms and administration buildings to halls, libraries, and exterior blocks, we deliver durable, high-quality finishes using low-odour products wherever appropriate. We work efficiently around school schedules, helping ensure projects are completed safely, on time, and with minimal disruption to staff and students.",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/school-1.jpg",
        alt: "Freshly repainted school classroom block with crisp white joinery and blue trim along a covered walkway",
      },
      {
        kind: "text",
        body: [
          "PaintLink specialises in painting schools and educational facilities across Auckland. We work on classrooms, halls, administration buildings, gymnasiums, exterior buildings, fences, and playground structures, delivering durable finishes designed for high-traffic environments.",
          "Our projects are carefully scheduled around school holidays and term breaks, allowing us to complete the work safely, on time, and with minimal disruption to your school community.",
        ],
      },
      {
        kind: "text",
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
        kind: "photo",
        src: "/gallery/school-2.jpg",
        alt: "Bright school library breakout space with freshly painted orange and green feature walls and tiered seating",
      },
      {
        kind: "text",
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
    image: {
      src: "/gallery/rental-turnaround-after.jpg",
      alt: "Rental property exterior after a full repaint by PaintLink, in grey weatherboard with white trim",
    },
    blurb:
      "Fast between-tenancy turnarounds for landlords and property managers — tidy, priced fairly, done on time.",
    // Body comes from `blocks` below (client-supplied copy, August 2026).
    // `intro`/`sections` are unused for this service — edit `blocks` instead.
    intro: [],
    sections: [],
    blocks: [
      {
        kind: "text",
        body: [
          "Vacant rental properties cost money every day they’re sitting empty. Whether you’re a landlord or property manager, you need painters who respond quickly, provide accurate quotes, and complete the job on schedule.",
          "Paint Link specialises in rental property painting in Auckland, delivering fast turnarounds without compromising on quality. From full repaints to touch-ups between tenancies, we’ll have your property looking fresh, clean, and ready for new tenants as quickly as possible.",
        ],
      },
      {
        kind: "beforeAfter",
        heading: "Before and after",
        pairs: [
          {
            before: {
              src: "/gallery/rental-turnaround-before.jpg",
              alt: "Tired rental property before painting, with flaking white weatherboards and weathered joinery",
            },
            after: {
              src: "/gallery/rental-turnaround-after.jpg",
              alt: "The same rental property after repainting, in grey weatherboard with white trim and charcoal steps",
            },
            caption:
              "The same property, turned around between tenancies — weatherboards, joinery, block base and steps.",
          },
        ],
      },
      {
        kind: "text",
        body: [
          "Paint Link works with landlords, property managers, and investors across West and Central Auckland to keep rental properties looking their best. Since 2018, we’ve built our reputation on fast communication, reliable scheduling, quality workmanship, and fair pricing—helping minimise vacancy periods and get properties ready for new tenants sooner.",
        ],
      },
      {
        kind: "text",
        heading: "Built for Rental Property Turnarounds",
        body: ["Here’s what landlords and property managers can expect from Paint Link:"],
        checkItems: [
          {
            title: "Fast, no-obligation quotes",
            text: "Often completed from a video walkthrough or agent access.",
          },
          {
            title: "Reliable turnaround times",
            text: "Most standard interior rental repaints are completed within one week, helping reduce vacancy.",
          },
          {
            title: "Durable, washable paint systems",
            text: "Designed to withstand everyday wear and make ongoing maintenance easier.",
          },
          {
            title: "Modern, neutral colour schemes",
            text: "Colours that appeal to a wide range of tenants and present well in online listings.",
          },
          {
            title: "Clear communication and straightforward invoicing",
            text: "With detailed documentation for owners and property managers.",
          },
        ],
      },
      {
        kind: "photo",
        src: "/gallery/rental-weatherboard-before.jpg",
        alt: "Long weatherboard rental elevation with tired, chalky paint, photographed before repainting",
      },
      {
        kind: "text",
        heading: "Protecting your asset long-term",
        body: [
          "Beyond turnaround repaints, we help owners plan exterior maintenance painting to protect weathertightness — the kind of scheduled upkeep that avoids big remediation bills and keeps insurance and Healthy Homes obligations comfortably met. For portfolios, we can inspect and prioritise across multiple properties so budget goes where it matters most.",
        ],
      },
      {
        kind: "photo",
        src: "/gallery/rental-exterior-after.jpg",
        alt: "Rental property repainted in grey weatherboard with a fresh white painted block base",
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
