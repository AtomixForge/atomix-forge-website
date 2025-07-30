import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="absolute top-4 z-30 w-full border-b pb-4 shadow-[0_1px_0_0_--theme(--color-white/.2)] [border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.4),transparent)1] md:top-6 md:pb-6 dark:shadow-none dark:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.16),transparent)1]">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative flex h-12 items-center justify-between gap-x-2 rounded-lg bg-linear-to-b from-white/90 to-white/70 px-3 shadow-sm dark:from-gray-700/80 dark:to-gray-700/70">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 -z-10 rounded-xs bg-indigo-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[10px] before:[background-image:radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1px,transparent_1px)] before:bg-[length:10px_10px] before:[background-position:top_center,bottom_center] before:bg-no-repeat after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:[background-image:radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1px,transparent_1px)] after:bg-[length:10px_10px] after:[background-position:top_center,bottom_center] after:bg-no-repeat dark:bg-gray-800/50 dark:before:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_1px,transparent_1px)] dark:after:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_1px,transparent_1px)]"
              aria-hidden="true"
            />
            {/* Navigation links */}
            <nav className="flex w-full justify-center">
              <ul className="flex items-center text-sm font-medium sm:gap-x-3">
                <li>
                  <Link
                    className="rounded-lg px-3 py-1.5 text-gray-800 hover:bg-indigo-100 dark:text-gray-200 dark:hover:bg-gray-800/30"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-lg px-3 py-1.5 text-gray-800 transition-colors hover:bg-indigo-100 dark:text-gray-200 dark:hover:bg-gray-800/30"
                    href="/contact"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Light switch - positioned absolutely */}
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
