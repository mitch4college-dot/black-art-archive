import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

import { artworks } from "~/data/artworks";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const uniqueArtists = new Set(artworks.map((a) => a.artist.name));
  const regions = new Set(
    artworks.flatMap((a) =>
      a.tags
        .filter((t) => t.includes("africa") || t === "diaspora")
        .map((t) =>
          t
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()),
        ),
    ),
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 font-body text-xs font-medium uppercase tracking-widest text-amber-400">
          Our Mission
        </span>
        <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Preserving the Legacy of
          <span className="block text-amber-400">Black Artistic Heritage</span>
        </h1>
      </section>

      {/* Mission Statement */}
      <section className="border-y border-neutral-800/60 bg-neutral-900/30">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="space-y-6 font-body text-lg leading-relaxed text-neutral-300">
            <p>
              <strong className="text-white">The Black Art Archive</strong> is a
              living digital archive and educational tool designed to catalog
              the vast and diverse contributions of African and Black artists
              throughout history.
            </p>
            <p>
              From the ancient pyramids of Meroë in Sudan and the bronze
              sculptures of the Benin Kingdom, to the contemporary paintings and
              installations of today's leading Black artists — we believe
              every work carries a story worth preserving.
            </p>
            <p>
              Our mission is threefold: to <strong className="text-white">
                document
              </strong>{" "}
              the breadth of Black artistic achievement across time and
              geography, to <strong className="text-white">educate</strong> a
              new generation of students and art lovers with accurate,
              thoughtfully curated context, and to{" "}
              <strong className="text-white">connect</strong> people with the
              artworks and the institutions where they live.
            </p>
            <p>
              We are building a platform for everyone — from a student
              encountering Ndebele mural art for the first time, to a
              researcher tracing the influence of Kongo cosmology in
              contemporary sculpture.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center font-heading text-3xl font-bold">
          The Archive by the Numbers
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 text-center">
            <p className="font-heading text-4xl font-bold text-amber-400">
              {artworks.length}
            </p>
            <p className="mt-2 font-body text-sm text-neutral-400">
              Artworks Catalogued
            </p>
            <p className="mt-1 font-body text-xs text-neutral-600">
              Spanning ancient to contemporary
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 text-center">
            <p className="font-heading text-4xl font-bold text-amber-400">
              {uniqueArtists.size}
            </p>
            <p className="mt-2 font-body text-sm text-neutral-400">
              Artists Represented
            </p>
            <p className="mt-1 font-body text-xs text-neutral-600">
              Known and unknown masters
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 text-center">
            <p className="font-heading text-4xl font-bold text-amber-400">
              {regions.size}
            </p>
            <p className="mt-2 font-body text-sm text-neutral-400">
              Regions & Communities
            </p>
            <p className="mt-1 font-body text-xs text-neutral-600">
              From West Africa to the diaspora
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 text-center">
            <p className="font-heading text-4xl font-bold text-amber-400">
              &#8734;
            </p>
            <p className="mt-2 font-body text-sm text-neutral-400">
              Still Growing
            </p>
            <p className="mt-1 font-body text-xs text-neutral-600">
              New works added regularly
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-neutral-800/60 bg-neutral-900/30">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-center font-heading text-3xl font-bold">
            A Living Archive for Future Generations
          </h2>
          <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-neutral-300">
            <p>
              The Black Art Archive is designed to grow. Every artwork entry
              includes not just where the work lives today, but its full
              provenance — the journey it has taken through history, the hands
              it passed through, the meanings it has carried.
            </p>
            <p>
              We are committed to accuracy, respect for originating cultures,
              and centering the voices and perspectives of Black scholars,
              curators, and artists themselves. This archive is built with, not
              about, the communities whose heritage it represents.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-body text-sm font-semibold text-neutral-950 transition hover:bg-amber-300"
            >
              Explore the Archive
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}