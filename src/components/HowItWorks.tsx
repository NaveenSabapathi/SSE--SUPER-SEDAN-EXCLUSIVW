export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Enter Vehicle Details",
      description: "Provide basic information about your sedan including make, model, year, and current condition.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Market Value Analysis",
      description: "Our proprietary algorithm analyzes regional market data, demand trends, and comparable listings.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Receive Valuation & Expert Assistance",
      description: "Get your accurate market value instantly along with options for buying, selling, or inspection services.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-surface/30"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-textMain mb-4"
          >
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-textMuted">
            Get an accurate valuation in three simple steps.
          </p>
        </div>

        {/* Steps container */}
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-borderMuted to-transparent" />

          {/* Steps grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-surface border-2 border-borderMuted flex items-center justify-center mb-6 group-hover:border-accentBlue transition-colors duration-300">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accentGold text-background text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-semibold text-textMain mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-textMuted max-w-xs">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-32 -translate-x-1/2 w-px h-8 bg-borderMuted">
                    <svg
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-4 h-4 text-borderMuted"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 4l-8 8h16z" />
                    </svg>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <a
            href="/appraisal"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold touch-target"
          >
            Start Your Appraisal
            <svg
              className="w-5 h-5"
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
        </div>
      </div>
    </section>
  );
}
