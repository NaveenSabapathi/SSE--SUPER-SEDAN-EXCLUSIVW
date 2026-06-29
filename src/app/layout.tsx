import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";
import BottomNav from "@/components/BottomNav";
import FloatingActions from "@/components/FloatingActions";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SSE - Super Sedan Exclusive | Premium Used Sedans in South India",
  description:
    "Buy, sell, and evaluate premium pre-owned sedans. Transparent market appraisals, flood-free guarantees, and expert brokerage at ssecars.in.",
  openGraph: {
    title: "SSE - Super Sedan Exclusive",
    url: "https://ssecars.in",
    siteName: "SSE Cars",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background text-textMain antialiased">
      <body
        className={`${inter.className} ${spaceGrotesk.className} min-h-screen flex flex-col bg-background text-textMain`}
      >
        {/* Showroom Spotlight Glow */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 -z-10 pointer-events-none w-[800px] h-[500px] bg-accentBlue/10 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        {/* Simple Global Executive Header */}
        <header className="border-b border-borderMuted/50 bg-background/60 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold tracking-wider text-xl text-textMain">
                S<span className="text-accentBlue">S</span>E
              </span>
              <span className="text-[10px] bg-accentGold/10 text-accentGold border border-accentGold/20 px-2 py-0.5 rounded font-medium uppercase tracking-widest hidden sm:inline">
                Sedan Exclusive
              </span>
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-textMuted">
              <Link
                href="/inventory"
                className="hover:text-textMain transition touch-target flex items-center"
              >
                Inventory
              </Link>
              <Link
                href="/expertise"
                className="hover:text-textMain transition touch-target flex items-center"
              >
                Expertise
              </Link>
              <Link
                href="/appraisal"
                className="bg-accentBlue/20 border border-accentBlue/30 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-accentBlue/30 transition touch-target flex items-center"
              >
                Check Value
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content with bottom padding for mobile nav */}
        <main className="flex-grow pb-20 md:pb-0">{children}</main>

        {/* Mobile Bottom Navigation */}
        <BottomNav />

        {/* Floating WhatsApp Button (Mobile only) */}
        <FloatingActions />

        {/* Minimalist Footer - hidden on mobile when bottom nav is visible */}
        <footer className="border-t border-borderMuted bg-background py-6 text-center text-xs text-textMuted md:block hidden">
          <p>
            © {new Date().getFullYear()} Super Sedan Exclusive. All Rights
            Reserved. Built for South India.
          </p>
        </footer>
      </body>
    </html>
  );
}
