"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface" />

      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accentGold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accentBlue/5 rounded-full blur-[100px]" />
      </div>

      {/* Content - Massive vertical padding for breathing room */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/60 border border-borderMuted mb-12 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentGold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accentGold"></span>
          </span>
          <span className="text-sm text-textMuted font-medium uppercase tracking-widest">
            South India&apos;s Premium Sedan Marketplace
          </span>
        </div>

        {/* Headline - Massive metallic gradient */}
        <h1
          id="hero-heading"
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-10 leading-[1.05]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-500">
            The Premier Destination for
          </span>
          <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-500">
            Pre-Owned Executive Sedans
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-500">
            .
          </span>
        </h1>

        {/* Subheadline - Wide letter spacing */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-textMuted mb-14 leading-relaxed tracking-wide">
          South India&apos;s exclusive marketplace and valuation platform for premium
          used sedans. Skip unreliable classifieds and receive an accurate market
          appraisal in under 60 seconds.
        </p>

        {/* CTA Buttons - Glass pill for primary */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="/appraisal"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-medium tracking-wide bg-accentBlue/10 border border-accentBlue/30 backdrop-blur-md text-white hover:bg-accentBlue/20 transition-all duration-300 rounded-full touch-target group"
          >
            Value Your Sedan
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="/inventory"
            className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium touch-target"
          >
            Explore Inventory
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 pt-12 border-t border-borderMuted/30">
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-accentGold">
                50+
              </p>
              <p className="text-xs sm:text-sm text-textMuted mt-2 uppercase tracking-wider">
                Verified Sedans
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-accentGold">
                200+
              </p>
              <p className="text-xs sm:text-sm text-textMuted mt-2 uppercase tracking-wider">
                Appraisals Done
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-accentGold">
                100%
              </p>
              <p className="text-xs sm:text-sm text-textMuted mt-2 uppercase tracking-wider">
                Transparent Pricing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
