import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { artworks } from "~/data/artworks";

export const Route = createFileRoute("/catalog")({
  component: Catalog,
});

const REGIONS = [
  "West Africa",
  "Central Africa",
  "East Africa",
  "North Africa",
  "Southern Africa",
  "Diaspora",
];

const ERAS = [
  "Ancient",
  "Medieval",
  "18th Century",
  "19th Century",
  "20th Century",
  "Contemporary",
];

const MEDIA = [
  "Bronze",
  "Wood",
  "Textile",
  "Painting",
  "Photography",
  "Installation",
  "Sculpture",
  "Gold",
  "Beadwork",
  "Architecture",
];

function Catalog() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedMedium, setSelectedMedium] = useState<string | null>(null);

  const filtered = artworks.filter((artwork) => {
    if (
      search &&
      !artwork.title.toLowerCase().includes(search.toLowerCase()) &&
      !artwork.artist.name.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }
    if (selectedRegion) {
      const regionMatch = artwork.tags.some((t) =>
        t.toLowerCase().replace("-", " ").includes(selectedRegion.toLowerCase()),
      );
      if (!regionMatch) return false;
    }
    if (selectedEra) {
      const eraMatch = artwork.tags.some((t) => {
        if (selectedEra === "Ancient")
          return t.includes("ancient");
        if (selectedEra === "Medieval") return t.includes("medieval");
        if (selectedEra === "18th Century")
          return t.includes("18th-century");
        if (selectedEra === "19th Century")
          return t.includes("19th-century");
        if (selectedEra === "20th Century")
          return t.includes("20th-century");
        if (selectedEra === "Contemporary")
          return t.includes("contemporary") || t.includes("1990s") || t.includes("2000s") || t.includes("2010s") || t.includes("1980s") || t.includes("1970s") || t.includes("1960s");
        return false;
      });
      if (!eraMatch) return false;
    }
    if (selectedMedium) {
      const mediumMatch = artwork.tags.some(
        (t) => t === selectedMedium.toLowerCase(),
      );
      if (!mediumMatch) return false;
    }
    return true;
  });

  const clearFilters = () => {
    setSelectedRegion(null);
    setSelectedEra(null);
    setSelectedMedium(null);
    setSearch("");
  };

  const hasFilters = selectedRegion || selectedEra || selectedMedium || search;

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="border-b border-neutral-800/60 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">
            Full Catalog
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-neutral-400">
            Browse {artworks.length} artworks spanning centuries of African and
            Contemporary Black art
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-16 z-40 border-b border-neutral-800/40 bg-neutral-950/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <input
                type="text"
                placeholder="Search by title or artist..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-neutral-700 bg-neutral-900 py-2.5 pl-10 pr-4 font-body text-sm text-white placeholder-neutral-500 outline-none transition focus:border-amber-400/50"
              />
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {selectedRegion && (
                <button
                  type="button"
                  onClick={() => setSelectedRegion(null)}
                  className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-3 py-1 font-body text-xs text-amber-400"
                >
                  {selectedRegion}
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </button>
              )}
              {selectedEra && (
                <button
                  type="button"
                  onClick={() => setSelectedEra(null)}
                  className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-3 py-1 font-body text-xs text-amber-400"
                >
                  {selectedEra}
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </button>
              )}
              {selectedMedium && (
                <button
                  type="button"
                  onClick={() => setSelectedMedium(null)}
                  className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-3 py-1 font-body text-xs text-amber-400"
                >
                  {selectedMedium}
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </button>
              )}
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="rounded-full px-3 py-1 font-body text-xs text-neutral-500 transition hover:text-neutral-300"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          {/* Filter bars */}
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="font-body text-xs uppercase tracking-wider text-neutral-500">
                Region
              </span>
              <div className="flex flex-wrap gap-1.5">
                {REGIONS.map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() =>
                      setSelectedRegion(
                        selectedRegion === region ? null : region,
                      )
                    }
                    className={`rounded-full px-3 py-1 font-body text-xs transition ${
                      selectedRegion === region
                        ? "bg-amber-400/20 text-amber-400"
                        : "bg-neutral-800/60 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-body text-xs uppercase tracking-wider text-neutral-500">
                Era
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ERAS.map((era) => (
                  <button
                    key={era}
                    type="button"
                    onClick={() =>
                      setSelectedEra(selectedEra === era ? null : era)
                    }
                    className={`rounded-full px-3 py-1 font-body text-xs transition ${
                      selectedEra === era
                        ? "bg-amber-400/20 text-amber-400"
                        : "bg-neutral-800/60 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300"
                    }`}
                  >
                    {era}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-body text-xs uppercase tracking-wider text-neutral-500">
                Medium
              </span>
              <div className="flex flex-wrap gap-1.5">
                {MEDIA.map((medium) => (
                  <button
                    key={medium}
                    type="button"
                    onClick={() =>
                      setSelectedMedium(
                        selectedMedium === medium ? null : medium,
                      )
                    }
                    className={`rounded-full px-3 py-1 font-body text-xs transition ${
                      selectedMedium === medium
                        ? "bg-amber-400/20 text-amber-400"
                        : "bg-neutral-800/60 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300"
                    }`}
                  >
                    {medium}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-heading text-2xl text-neutral-500">
              No artworks match your filters
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 rounded-full border border-neutral-700 px-6 py-2 font-body text-sm text-neutral-400 transition hover:border-amber-400/50 hover:text-amber-400"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <p className="mb-8 font-body text-sm text-neutral-500">
              Showing {filtered.length} of {artworks.length} artworks
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((artwork) => (
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
                          className="mx-auto h-10 w-10 text-neutral-700"
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
                        <p className="mt-1 text-xs text-neutral-600">Image coming</p>
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <p className="font-heading text-base font-semibold leading-tight text-white group-hover:text-amber-400 line-clamp-2">
                      {artwork.title}
                    </p>
                    <p className="mt-1 font-body text-sm text-neutral-400 line-clamp-1">
                      {artwork.artist.name}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="rounded-full bg-neutral-800 px-2 py-0.5 font-body text-xs text-neutral-500">
                        {artwork.year}
                      </span>
                      {artwork.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-800 px-2 py-0.5 font-body text-xs text-neutral-500 capitalize"
                        >
                          {tag.replace(/-/g, " ")}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}