import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  Link,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Black Art Archive" },
      {
        name: "description",
        content:
          "A beautifully crafted educational archive cataloging African art and Contemporary Black art — each piece with its full history, artist background, and location.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-neutral-950 px-6 text-center">
      <h1 className="font-heading text-6xl font-bold text-amber-400">404</h1>
      <p className="font-body text-lg text-neutral-400">
        This page has not been archived yet.
      </p>
      <Link
        to="/"
        className="mt-4 rounded-full bg-amber-400 px-6 py-3 font-body text-sm font-semibold text-neutral-950 transition hover:bg-amber-300"
      >
        Return to the Archive
      </Link>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-neutral-950">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-neutral-950 font-body text-neutral-100 antialiased">
        <nav className="fixed top-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link
              to="/"
              className="font-heading text-xl font-bold tracking-wide text-amber-400 transition hover:text-amber-300"
            >
              <span className="hidden sm:inline">The Black Art Archive</span>
              <span className="sm:hidden">Archive</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                to="/catalog"
                className="font-body text-sm font-medium text-neutral-300 transition hover:text-amber-400"
                activeProps={{ className: "text-amber-400" }}
              >
                Catalog
              </Link>
              <Link
                to="/about"
                className="font-body text-sm font-medium text-neutral-300 transition hover:text-amber-400"
                activeProps={{ className: "text-amber-400" }}
              >
                About
              </Link>
              <Link
                to="/catalog"
                className="rounded-full border border-amber-400/40 px-5 py-1.5 font-body text-xs font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-neutral-950"
              >
                Explore
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-neutral-800/60 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-heading text-lg font-semibold text-amber-400">
                  The Black Art Archive
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-neutral-400">
                  A living digital archive cataloging African and Contemporary Black
                  art — preserving history, honoring artists, and educating the world.
                </p>
              </div>
              <div>
                <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Explore
                </h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <Link
                      to="/catalog"
                      className="font-body text-sm text-neutral-400 transition hover:text-amber-400"
                    >
                      Full Catalog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="font-body text-sm text-neutral-400 transition hover:text-amber-400"
                    >
                      About the Archive
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Premium
                </h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <span className="font-body text-sm text-neutral-400 transition hover:text-amber-400">
                      Curated Learning Paths
                    </span>
                  </li>
                  <li>
                    <span className="font-body text-sm text-neutral-400 transition hover:text-amber-400">
                      Audio Tours
                    </span>
                  </li>
                  <li>
                    <span className="font-body text-sm text-neutral-400 transition hover:text-amber-400">
                      Lesson Plans
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 border-t border-neutral-800/40 pt-6 text-center">
              <p className="font-body text-xs text-neutral-600">
                &copy; {new Date().getFullYear()} The Black Art Archive. A living
                archive of Black artistic heritage.
              </p>
            </div>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}