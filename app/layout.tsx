import "./css/style.css";

import { Inter, Inter_Tight } from "next/font/google";
import type { Metadata } from "next";
import Theme from "./theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inter_tight = Inter_Tight({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atomix Forge - Custom Applications Built Right",
  description:
    "Los Angeles-founded, globally remote software development company specializing in custom web applications built with the right technology stack for your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter bg-indigo-100 tracking-tight text-gray-800 antialiased dark:bg-gray-900 dark:text-gray-200`}
      >
        <Theme>
          <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
