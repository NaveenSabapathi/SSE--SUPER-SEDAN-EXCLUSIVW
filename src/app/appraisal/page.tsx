import Link from "next/link";
import AppraisalWizard from "@/components/AppraisalWizard";

export const metadata = {
  title: "Appraisal | SSE - Get Your Sedan's Market Value",
  description:
    "Get an accurate market valuation for your pre-owned sedan in under 60 seconds. Our proprietary algorithm analyzes South Indian market trends to provide fair prices.",
};

export default function AppraisalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header for this page */}
      <header className="border-b border-borderMuted bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold tracking-wider text-xl text-textMain">
              S<span className="text-accentBlue">S</span>E
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-textMuted hover:text-textMain transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page headline */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-textMain mb-4">
              Get Your Sedan&apos;s Market Value
            </h1>
            <p className="text-textMuted max-w-xl mx-auto">
              Receive an accurate valuation based on South Indian market data in
              under 60 seconds.
            </p>
          </div>

          {/* Wizard component */}
          <AppraisalWizard />
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-borderMuted bg-background py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-textMuted">
            © {new Date().getFullYear()} Super Sedan Exclusive. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
