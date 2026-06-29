export const metadata = {
  title: "Expertise | SSE - Professional Car Buying Assistance",
  description:
    "Expert third-party car inspection, negotiation, and RTO assistance in South India. Skip the stress and let our professionals handle it.",
};

const services = [
  {
    id: "inspection",
    title: "Pre-Purchase Inspection",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    description:
      "We verify everything so you can buy with confidence. Our comprehensive 150-point inspection covers:",
    features: [
      "Engine & transmission health",
      "Suspension & braking systems",
      "Electrical systems & diagnostics",
      "Flood damage verification",
      "Paint thickness & accident history",
      "Interior & exterior condition",
      "Documentation verification",
    ],
  },
  {
    id: "negotiation",
    title: "Negotiation & Brokerage",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    description:
      "We handle the negotiations so you don't have to. Our experts ensure you get the best deal:",
    features: [
      "Market value analysis",
      "Professional price negotiation",
      "Seller communication management",
      "Best price guarantee",
      "Transparent dealing",
      "No hidden charges",
    ],
  },
  {
    id: "rto",
    title: "RTO & Paperwork",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    description:
      "Seamless ownership transfer across South Indian states. We handle all documentation:",
    features: [
      "RC transfer & name change",
      "Interstate RTO transfers",
      "NOC procurement",
      "Insurance transfer",
      "Tax clearance",
      "Number plate management",
    ],
  },
];

export default function ExpertisePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-surface/50 to-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textMain mb-6">
            Expert Third-Party Assistance
          </h1>
          <p className="text-lg sm:text-xl text-textMuted max-w-2xl mx-auto mb-8">
            Skip the stress of buying a used car. Our professionals handle
            everything from inspection to paperwork, so you can drive away
            with confidence.
          </p>
          <a
            href="mailto:experts@supersedanexclusive.com?subject=Expert Assistance Request&body=Hi, I need help with:"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Our Experts
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                className="card p-6 lg:p-8 flex flex-col"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accentBlue/10 flex items-center justify-center mb-6 text-accentBlue">
                  {service.icon}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-textMain mb-3">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-textMuted mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 flex-grow">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-textMuted"
                    >
                      <svg
                        className="w-5 h-5 text-accentGold flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-textMain mb-4">
              Why Choose Our Expertise?
            </h2>
            <p className="text-textMuted max-w-2xl mx-auto">
              We bring years of experience and deep market knowledge to every transaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accentGold mb-2">
                500+
              </div>
              <p className="text-sm text-textMuted">
                Vehicles Inspected
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accentGold mb-2">
                98%
              </div>
              <p className="text-sm text-textMuted">
                Customer Satisfaction
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accentGold mb-2">
                10+
              </div>
              <p className="text-sm text-textMuted">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accentGold mb-2">
                100%
              </div>
              <p className="text-sm text-textMuted">
                Transparent Process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-textMain mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-textMuted mb-8 max-w-xl mx-auto">
            Whether you&apos;re buying your first premium sedan or adding to your
            collection, our experts are here to help every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:experts@supersedanexclusive.com?subject=Expert Assistance Request&body=Hi, I need help with:"
              className="btn-primary px-8 py-4 text-base font-semibold"
            >
              Contact Our Experts
            </a>
            <a
              href="/inventory"
              className="btn-secondary px-8 py-4 text-base font-medium"
            >
              Browse Inventory
            </a>
          </div>
        </div>
      </section>
    </>
  );
}