import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { artworks } from "~/data/artworks";
import type { Artwork } from "~/data/artworks";

export const Route = createFileRoute("/artwork/$id")({
  loader: ({ params }) => {
    const artwork = artworks.find((a) => a.id === params.id);
    if (!artwork) throw notFound();
    return { artwork };
  },
  notFoundComponent: () => (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-neutral-950 px-6 pt-20 text-center">
      <h1 className="font-heading text-4xl font-bold text-neutral-500">
        Artwork not found
      </h1>
      <Link
        to="/catalog"
        className="mt-4 rounded-full border border-neutral-700 px-6 py-3 font-body text-sm text-neutral-400 transition hover:border-amber-400/50 hover:text-amber-400"
      >
        Back to Catalog
      </Link>
    </div>
  ),
  component: ArtworkDetail,
});

function ArtworkDetail() {
  const { artwork } = Route.useLoaderData();

  const relatedWorks = artworks.filter(
    (a) =>
      a.id !== artwork.id &&
      a.tags.some((t) => artwork.tags.includes(t)),
  ).slice(0, 4);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-1.5 font-body text-sm text-neutral-500 transition hover:text-amber-400"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          Back to Catalog
        </Link>
      </div>

      {/* Hero Image Area */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950">
          <div className="flex aspect-[16/9] items-center justify-center lg:aspect-[21/9]">
            <div className="text-center">
              <svg
                className="mx-auto h-20 w-20 text-neutral-700"
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
              <p className="mt-4 font-body text-base text-neutral-600">
                Image coming soon — archival photograph pending
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Title & Metadata */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2">
              {artwork.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-700 bg-neutral-800/50 px-3 py-1 font-body text-xs capitalize text-neutral-400"
                >
                  {tag.replace(/-/g, " ")}
                </span>
              ))}
            </div>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl">
              {artwork.title}
            </h1>
            <p className="mt-3 font-heading text-xl font-medium text-amber-400">
              {artwork.artist.name}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
                <p className="font-body text-xs uppercase tracking-wider text-neutral-500">
                  Year
                </p>
                <p className="mt-1 font-heading text-lg font-semibold">
                  {artwork.year}
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
                <p className="font-body text-xs uppercase tracking-wider text-neutral-500">
                  Medium
                </p>
                <p className="mt-1 font-body text-sm leading-tight">
                  {artwork.medium}
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
                <p className="font-body text-xs uppercase tracking-wider text-neutral-500">
                  Dimensions
                </p>
                <p className="mt-1 font-body text-sm leading-tight">
                  {artwork.dimensions}
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
                <p className="font-body text-xs uppercase tracking-wider text-neutral-500">
                  Nationality
                </p>
                <p className="mt-1 font-body text-sm leading-tight">
                  {artwork.artist.nationality}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-semibold">
                About the Work
              </h2>
              <p className="mt-4 font-body leading-relaxed text-neutral-300">
                {artwork.description}
              </p>
            </div>

            {/* History */}
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-semibold">
                Historical Context
              </h2>
              <p className="mt-4 font-body leading-relaxed text-neutral-300">
                {artwork.history}
              </p>
            </div>

            {/* Premium Upsell */}
            <div className="mt-12 rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/5 to-transparent p-8">
              <div className="flex items-start gap-4">
                <svg
                  className="mt-1 h-6 w-6 shrink-0 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                </svg>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-amber-400">
                    Unlock the Full Experience
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-neutral-400">
                    Subscribe to access curated learning paths, an immersive
                    audio tour of this artwork, downloadable lesson plans, and
                    offline access for study and teaching.
                  </p>
                  <button
                    type="button"
                    disabled
                    className="mt-4 inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-6 py-2.5 font-body text-sm font-semibold text-amber-400/60"
                  >
                    Premium Feature — Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Artist Bio */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="font-heading text-xl font-semibold">
                About the Artist
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-neutral-300">
                {artwork.artist.bio}
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="font-body text-xs uppercase tracking-wider text-neutral-500">
                    Born
                  </span>
                  <span className="font-body text-sm">
                    {Math.abs(artwork.artist.birth)}{" "}
                    {artwork.artist.birth < 0 ? "BCE" : "CE"}
                  </span>
                </div>
                {artwork.artist.death && (
                  <div className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="font-body text-xs uppercase tracking-wider text-neutral-500">
                      Died
                    </span>
                    <span className="font-body text-sm">
                      {artwork.artist.death} CE
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="font-body text-xs uppercase tracking-wider text-neutral-500">
                    Nationality
                  </span>
                  <span className="font-body text-sm text-right">
                    {artwork.artist.nationality}
                  </span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="font-heading text-xl font-semibold">
                Location
              </h3>
              <div className="mt-4 flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <path
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                </svg>
                <div>
                  <p className="font-body text-sm font-medium">
                    {artwork.location.museum}
                  </p>
                  <p className="mt-1 font-body text-sm text-neutral-400">
                    {artwork.location.city}, {artwork.location.country}
                  </p>
                </div>
              </div>
              {/* Map placeholder */}
              <div className="mt-4 flex aspect-video items-center justify-center rounded-xl bg-neutral-800">
                <div className="text-center">
                  <svg
                    className="mx-auto h-8 w-8 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                    />
                  </svg>
                  <p className="mt-2 font-body text-xs text-neutral-600">
                    Map coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Works */}
      {relatedWorks.length > 0 && (
        <section className="border-t border-neutral-800/60 bg-neutral-900/30">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="font-heading text-3xl font-bold">Related Works</h2>
            <p className="mt-2 font-body text-neutral-400">
              Other artworks sharing themes or origins
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedWorks.map((related) => (
                <Link
                  key={related.id}
                  to="/artwork/$id"
                  params={{ id: related.id }}
                  className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 transition hover:border-amber-400/30"
                >
                  <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
                    <svg
                      className="h-10 w-10 text-neutral-700"
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
                  </div>
                  <div className="p-4">
                    <p className="font-heading text-sm font-semibold leading-tight text-white group-hover:text-amber-400 line-clamp-2">
                      {related.title}
                    </p>
                    <p className="mt-1 font-body text-xs text-neutral-400">
                      {related.artist.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}