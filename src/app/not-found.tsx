import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-brand">404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        That page has been painted over
      </h1>
      <p className="mt-4 text-navy-dark/70">
        The page you’re after doesn’t exist or has moved. Try one of these instead:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="rounded-lg border border-navy/20 px-6 py-3 font-bold text-navy hover:border-brand hover:text-brand"
        >
          Our Services
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-navy/20 px-6 py-3 font-bold text-navy hover:border-brand hover:text-brand"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
