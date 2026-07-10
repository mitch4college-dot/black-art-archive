import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

import { artworks } from "~/data/artworks";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = artworks.filter((a) => a.featured);
  const uniqueArtists = new Set(artworks.map((a) => a.artist.name));
  const uniqueLocations = new Set(
    artworks.map((a) => `${a.location.city}, ${a.location.country}`),
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.12)_0%,_transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(120,40,160,0.08)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-4xl">
          <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 font-body text-xs font-medium uppercase tracking-widest text-amber-400">
            A Living Digital Archive
          </span>
          <h1 className="mt-6 font-heading text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Explore the
            <span className="block text-amber-400">Black Art Archive</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-neutral-400 sm:text-xl">
            Discover centuries of African and Contemporary Black art — each piece
            comes with its full history, the artist's story, and where it lives
            today. A beautifully crafted educational archive for students,
            educators, and art lovers.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-body text-sm font-semibold text-neutral-950 transition hover:bg-amber-300"
            >
              Explore the Catalog
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
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-8 py-4 font-body text-sm font-medium text-neutral-300 transition hover:border-amber-400/50 hover:text-amber-400"
            >
              Our Mission
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <svg
            className="h-6 w-6 text-neutral-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-neutral-800/60 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-heading text-3xl font-bold text-amber-400 sm:text-4xl">
                {artworks.length}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-widest text-neutral-500">
                Artworks
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-amber-400 sm:text-4xl">
                {uniqueArtists.size}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-widest text-neutral-500">
                Artists
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-amber-400 sm:text-4xl">
                {uniqueLocations.size}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-widest text-neutral-500">
                Locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Featured Works
          </h2>
          <p className="mt-3 font-body text-neutral-400">
            Iconic pieces from the archive, spanning centuries and continents
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 6).map((artwork) => (
            <Link
              key={artwork.id}
              to="/artwork/$id"
              params={{ id: artwork.id }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 transition hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-400/5"
            >
              {/* Image */}
              {artwork.image ? (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                      />
                    </svg>
                    <p className="mt-2 text-xs text-neutral-600">Image coming soon</p>
                  </div>
                </div>
              )}
              <div className="p-5">
                <p className="font-heading text-lg font-semibold leading-tight text-white group-hover:text-amber-400">
                  {artwork.title}
                </p>
                <p className="mt-1 font-body text-sm text-neutral-400">
                  {artwork.artist.name}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 font-body text-xs text-neutral-400">
                    {artwork.year}
                  </span>
                  <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 font-body text-xs text-neutral-400">
                    {artwork.medium.split(",")[0]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-8 py-3 font-body text-sm font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-neutral-950"
          >
            View Full Catalog
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
      </section>

      {/* Premium Teaser */}
      <section className="border-t border-neutral-800/60 bg-neutral-900/30">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="inline-block rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-1.5 font-body text-xs font-medium uppercase tracking-widest text-amber-400/80">
            Premium
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold sm:text-4xl">
            Go Deeper into the Archive
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-neutral-400">
            Unlock curated learning paths, immersive audio tours, downloadable
            lesson plans, and offline access. Perfect for educators, students,
            and serious researchers.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
              <svg
                className="mx-auto h-8 w-8 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              </svg>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                Learning Paths
              </h3>
              <p className="mt-2 font-body text-sm text-neutral-400">
                Curated journeys through art movements, regions, and themes
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
              <svg
                className="mx-auto h-8 w-8 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
                <path
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              </svg>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                Audio Tours
              </h3>
              <p className="mt-2 font-body text-sm text-neutral-400">
                Narrated deep dives into each artwork's history and context
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
              <svg
                className="mx-auto h-8 w-8 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              </svg>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                Lesson Plans
              </h3>
              <p className="mt-2 font-body text-sm text-neutral-400">
                Ready-to-use educational resources for classroom and study
              </p>
            </div>
          </div>
          <button
            type="button"
            className="mt-10 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-amber-400/20 px-8 py-4 font-body text-sm font-semibold text-amber-400/60"
            disabled
            title="Coming soon"
          >
            Subscribe — Coming Soon
          </button>
        </div>
      </section>
    </div>
  );
}