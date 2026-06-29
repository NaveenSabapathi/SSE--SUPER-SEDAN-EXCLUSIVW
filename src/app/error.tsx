"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Decorative icon */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-surface border border-borderMuted flex items-center justify-center">
          <svg
            className="w-12 h-12 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold text-textMain mb-4">
          Engine Fault.
        </h1>

        {/* Subtext */}
        <p className="text-textMuted mb-2">
          Something went wrong on our end.
        </p>
        <p className="text-sm text-textMuted/60 mb-8">
          Our team has been notified. Please try again in a moment.
        </p>

        {/* Try Again Button */}
        <button
          onClick={reset}
          className="btn-primary px-8 py-3"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}