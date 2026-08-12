import Image from "next/image";
import type { BeforeAfterPair } from "@/content/types";

const badgeClass =
  "absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm";

const aspectClass: Record<NonNullable<BeforeAfterPair["aspect"]>, string> = {
  "3/4": "aspect-[3/4]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

/**
 * One before/after pair shown side by side, with an arrow between the two.
 * Used on service pages and the projects page so both read the same way.
 */
export function BeforeAfterPhotos({
  pair,
  sizes = "(min-width: 1024px) 20rem, 50vw",
}: {
  pair: BeforeAfterPair;
  sizes?: string;
}) {
  const aspect = aspectClass[pair.aspect ?? "3/4"];

  return (
    <figure className="m-0">
      <div className="relative grid grid-cols-2 gap-1 overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 p-1 shadow-sm">
        <div className={`relative overflow-hidden rounded-l-xl ${aspect}`}>
          <Image
            src={pair.before.src}
            alt={pair.before.alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
          <span className={`${badgeClass} bg-navy-dark/85 text-white`}>
            {pair.labels?.before ?? "Before"}
          </span>
        </div>
        <div className={`relative overflow-hidden rounded-r-xl ${aspect}`}>
          <Image
            src={pair.after.src}
            alt={pair.after.alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
          <span className={`${badgeClass} bg-brand text-white`}>
            {pair.labels?.after ?? "After"}
          </span>
        </div>
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-lg ring-1 ring-navy/10"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
      {pair.caption && (
        <figcaption className="mt-3 text-sm text-navy-dark/60">{pair.caption}</figcaption>
      )}
    </figure>
  );
}
