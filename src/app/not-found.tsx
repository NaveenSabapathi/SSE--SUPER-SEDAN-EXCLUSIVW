import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Decorative icon */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-surface border border-borderMuted flex items-center justify-center">
          <svg
            className="w-12 h-12 text-textMuted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold text-textMain mb-4">
          404 - Destination Not Found.
        </h1>

        {/* Subtext */}
        <p className="text-textMuted mb-8">
          The vehicle or page you are looking for has moved.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary px-8 py-3"
          >
            Return Home
          </Link>
          <Link
            href="/appraisal"
            className="btn-secondary px-8 py-3"
          >
            Value Your Sedan
          </Link>
        </div>
      </div>
    </div>
  );
}