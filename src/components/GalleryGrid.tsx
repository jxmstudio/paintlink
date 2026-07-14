import Image from "next/image";
import { beforeAfterPairs, galleryPhotos } from "@/content/gallery";

const badgeClass =
  "absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm";

export function GalleryGrid() {
  return (
    <div className="space-y-20">
      {/* Before & after transformations */}
      <section>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            The PaintLink difference
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Before &amp; after
          </h2>
          <p className="mt-3 text-navy-dark/70">
            Nothing shows what proper preparation and a quality finish do like the same spot,
            before and after.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {beforeAfterPairs.map((pair) => (
            <figure
              key={pair.after}
              className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"
            >
              <div className="relative grid grid-cols-2 gap-1 bg-navy/10 p-1">
                <div className="relative aspect-[3/4] overflow-hidden rounded-l-xl">
                  <Image
                    src={`/gallery/${pair.before}`}
                    alt={`Before — ${pair.alt}`}
                    fill
                    sizes="(min-width: 1024px) 18rem, 50vw"
                    className="object-cover"
                  />
                  <span className={`${badgeClass} bg-navy-dark/85 text-white`}>Before</span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-r-xl">
                  <Image
                    src={`/gallery/${pair.after}`}
                    alt={`After — ${pair.alt}`}
                    fill
                    sizes="(min-width: 1024px) 18rem, 50vw"
                    className="object-cover"
                  />
                  <span className={`${badgeClass} bg-brand text-white`}>After</span>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-lg ring-1 ring-navy/10"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-4">
                <span className="font-bold text-navy">{pair.label}</span>
                {pair.location && (
                  <span className="text-sm font-semibold text-navy-dark/55">
                    {pair.location}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Masonry of finished work — natural aspect ratios, no cropping */}
      <section>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            More recent work
          </h2>
          <p className="mt-3 text-navy-dark/70">
            Straight off the job — villas, roofs, cedar and interiors across Auckland.
          </p>
        </div>
        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {galleryPhotos.map((photo) => (
            <figure
              key={photo.image}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"
            >
              <div className="overflow-hidden">
                <Image
                  src={`/gallery/${photo.image}`}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-4">
                <span className="font-bold text-navy">{photo.label}</span>
                {photo.location && (
                  <span className="text-sm font-semibold text-navy-dark/55">
                    {photo.location}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
