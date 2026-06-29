import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SSE - Super Sedan Exclusive | Premium Pre-Owned Sedans",
  description:
    "Discover exclusive pre-owned luxury sedans in South India. Premium cars curated for discerning buyers, featuring concierge-level service.",
  keywords: [
    "premium cars",
    "luxury sedans",
    "pre-owned vehicles",
    "South India cars",
    "exclusive automobiles",
  ],
  authors: [{ name: "SSE - Super Sedan Exclusive" }],
  openGraph: {
    title: "SSE - Super Sedan Exclusive",
    description: "Premium pre-owned sedans for the discerning buyer",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center gap-2 touch-target">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight">
                    <span className="text-gold-500">SSE</span>
                    <span className="text-slate-300 ml-1">
                      Super Sedan Exclusive
                    </span>
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <NavLink href="/browse">Browse Sedans</NavLink>
                <NavLink href="/sell">Sell Your Car</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-3 touch-target flex items-center justify-center rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6 text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Column */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="text-lg font-bold mb-4">
                  <span className="text-gold-500">SSE</span>
                  <span className="text-slate-400 ml-1">
                    Super Sedan Exclusive
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Premium pre-owned sedans curated for the discerning South
                  Indian buyer.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <FooterLink href="/browse">Browse Inventory</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/sell">Sell Your Car</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/financing">Financing</FooterLink>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                  Support
                </h3>
                <ul className="space-y-3">
                  <li>
                    <FooterLink href="/faq">FAQ</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/contact">Contact Us</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/warranty">Warranty</FooterLink>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span>📞</span>
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✉️</span>
                    <span>concierge@sse.in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📍</span>
                    <span>Chennai, Tamil Nadu</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500">
                © 2026 SSE. Premium rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-slate-500">
                <a
                  href="/privacy"
                  className="hover:text-slate-300 transition-colors touch-target"
                >
                  Privacy
                </a>
                <a
                  href="/terms"
                  className="hover:text-slate-300 transition-colors touch-target"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm sm:text-base font-medium text-slate-300 hover:text-gold-500 transition-colors touch-target flex items-center px-2"
    >
      {children}
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-slate-400 hover:text-gold-500 transition-colors touch-target inline-flex items-center"
    >
      {children}
    </a>
  );
}
