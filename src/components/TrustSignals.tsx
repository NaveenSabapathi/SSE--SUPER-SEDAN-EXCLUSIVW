export default function TrustSignals() {
  const cards = [
    {
      title: "Precision Appraisals",
      description:
        "Receive fair market valuations based on regional demand, ownership history, mileage and current resale trends.",
      icon: (
        <svg
          className="w-8 h-8 text-accentBlue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Verified Inspection Assistance",
      description:
        "Professional third-party inspection support before purchasing any used sedan.",
      icon: (
        <svg
          className="w-8 h-8 text-accentBlue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Premium Brokerage",
      description:
        "End-to-end assistance for negotiation, documentation and ownership transfer.",
      icon: (
        <svg
          className="w-8 h-8 text-accentBlue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="trust-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-textMain mb-4"
          >
            Why Choose SSE
          </h2>
          <p className="max-w-2xl mx-auto text-textMuted">
            Premium services designed for discerning sedan buyers and sellers.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="card group flex flex-col h-full"
            >
              {/* Icon */}
              <div className="mb-6">{card.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-textMain mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-textMuted leading-relaxed flex-grow">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
