export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accentGold/10 via-transparent to-transparent" />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accentGold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accentBlue/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-borderMuted mb-8">
            <span className="w-2 h-2 rounded-full bg-accentGold animate-pulse" />
            <span className="text-sm text-textMuted">
              Premium Pre-Owned Sedans in South India
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-textMain">Luxury Meets</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentGold/80 via-accentGold to-accentGold/80">
              Exclusivity
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-textMuted mb-10 leading-relaxed">
            Discover handpicked premium sedans curated for discerning buyers.
            Experience concierge-level service as you find your perfect vehicle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/browse"
              className="btn-primary text-base touch-target px-8"
            >
              Browse Collection
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="/sell"
              className="btn-secondary text-base touch-target px-8"
            >
              Sell Your Sedan
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <TrustBadge value="50+" label="Curated Cars" />
            <TrustBadge value="100%" label="Verified" />
            <TrustBadge value="24/7" label="Concierge" />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="features" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-textMain mb-4">
              Featured Sedans
            </h2>
            <p className="text-textMuted">
              Handpicked vehicles ready for their next chapter.
            </p>
          </div>

          {/* Placeholder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PlaceholderCard
              title="BMW 5 Series"
              year="2022"
              price="₹45 Lakhs"
            />
            <PlaceholderCard
              title="Mercedes-Benz E-Class"
              year="2023"
              price="₹52 Lakhs"
            />
            <PlaceholderCard
              title="Audi A6"
              year="2021"
              price="₹38 Lakhs"
            />
          </div>

          <div className="mt-12 text-center">
            <a
              href="/browse"
              className="text-accentGold hover:text-accentGold/80 font-medium touch-target inline-flex items-center px-4"
            >
              View All Sedans
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-textMain mb-4">
              Why Choose Sedans
            </h2>
            <p className="text-textMuted max-w-2xl mx-auto">
              Discover the perfect blend of comfort, performance, and prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="🔍"
              title="Meticulously Verified"
              description="Every sedan undergoes 200+ point inspection by certified professionals."
            />
            <FeatureCard
              icon="🚗"
              title="White Glove Delivery"
              description="We bring the car to your doorstep with full documentation support."
            />
            <FeatureCard
              icon="🛡️"
              title="Extended Warranty"
              description="Comprehensive coverage options for peace of mind."
            />
            <FeatureCard
              icon="💰"
              title="Best Price Guarantee"
              description="Market-leading prices with transparent pricing, no hidden fees."
            />
            <FeatureCard
              icon="🤝"
              title="Trade-In Support"
              description="Get the best value for your current vehicle."
            />
            <FeatureCard
              icon="📱"
              title="Digital Experience"
              description="Complete your purchase from home with our seamless digital process."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-background via-surface to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-textMain mb-4">
            Ready to Find Your Perfect Sedan?
          </h2>
          <p className="text-textMuted mb-8 max-w-2xl mx-auto">
            Our concierge team is ready to assist you. Schedule a personalized
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary text-base touch-target px-8"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+919876543210"
              className="btn-secondary text-base touch-target px-8"
            >
              📞 Call +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function TrustBadge({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-accentGold mb-1">
        {value}
      </div>
      <div className="text-sm text-textMuted">{label}</div>
    </div>
  );
}

function PlaceholderCard({
  title,
  year,
  price,
}: {
  title: string;
  year: string;
  price: string;
}) {
  return (
    <div className="card">
      {/* Image Placeholder */}
      <div className="aspect-[16/10] bg-borderMuted/50 rounded-lg mb-4 flex items-center justify-center">
        <svg
          className="w-12 h-12 text-textMuted/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-textMain">{title}</h3>
          <span className="text-sm text-textMuted">{year}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-accentGold font-bold">{price}</span>
          <button className="text-sm text-textMuted hover:text-accentGold transition-colors touch-target px-2">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card hover:scale-[1.02] transition-transform">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-textMain mb-2">{title}</h3>
      <p className="text-sm text-textMuted leading-relaxed">{description}</p>
    </div>
  );
}
