interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageHeader({
  className,
  children,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl ${className || ""}`}>
      <div className="text-center">
        <div className="relative mb-5 flex items-center justify-center gap-4 before:h-px before:w-24 before:border-b before:shadow-xs before:shadow-white/20 before:[border-image:linear-gradient(to_left,var(--color-indigo-300),transparent)1] after:h-px after:w-24 after:border-b after:shadow-xs after:shadow-white/20 after:[border-image:linear-gradient(to_right,var(--color-indigo-300),transparent)1] dark:before:shadow-none dark:before:[border-image:linear-gradient(to_left,--theme(--color-indigo-300/.16),transparent)1] dark:after:shadow-none dark:after:[border-image:linear-gradient(to_right,--theme(--color-indigo-300/.16),transparent)1]">
          <div className="relative inline-flex rounded-lg bg-white px-3 py-[3px] text-sm font-medium tracking-normal whitespace-nowrap text-gray-700 shadow-sm before:absolute before:inset-0 before:rounded-lg before:[background-image:linear-gradient(120deg,transparent_0%,--theme(--color-indigo-400/.12)_33%,--theme(--color-pink-400/.12)_66%,--theme(--color-amber-200/.12)_100%)] dark:bg-gray-700 dark:before:[background-image:linear-gradient(120deg,--theme(--color-indigo-400/.16),--theme(--color-indigo-600/.16)_50%,transparent_100%)]">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 -z-10 rounded-xs bg-indigo-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:[background-image:radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_0.5px,transparent_0.5px)] before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] before:bg-no-repeat after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:[background-image:radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_0.5px,transparent_0.5px)] after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] after:bg-no-repeat dark:bg-gray-800/65 dark:before:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px)]"
              aria-hidden="true"
            />
            <span className="relative text-gray-800 dark:bg-linear-to-b dark:from-indigo-500 dark:to-indigo-50 dark:bg-clip-text dark:text-transparent">
              {children}
            </span>
          </div>
        </div>
        <div>
          <h1 className="font-inter-tight pb-4 text-5xl font-bold text-gray-800 md:text-6xl dark:bg-linear-to-b dark:from-indigo-200 dark:to-gray-200 dark:bg-clip-text dark:text-transparent">
            {title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
