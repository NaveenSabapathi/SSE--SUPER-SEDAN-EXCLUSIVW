export default function SpecialistMarques() {
  const brands = [
    "Honda City",
    "Hyundai Verna",
    "Volkswagen Virtus",
    "Skoda Slavia",
    "Toyota Camry",
    "Honda Civic",
    "BMW 3 Series",
    "Mercedes-Benz C-Class",
    "Audi A4",
  ];

  return (
    <section
      className="py-16 sm:py-20 bg-surface/30 border-y border-borderMuted"
      aria-labelledby="specialist-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2
            id="specialist-heading"
            className="text-sm sm:text-base font-medium uppercase tracking-widest text-textMuted mb-2"
          >
            Specialising In
          </h2>
        </div>

        {/* Brands scroll container */}
        <div className="relative">
          {/* Gradient fade edges for mobile scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface/30 to-transparent pointer-events-none z-10 lg:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface/30 to-transparent pointer-events-none z-10 lg:hidden" />

          {/* Scrollable container */}
          <div
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-4 -mx-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap sm:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            role="list"
            aria-label="Specialised sedan brands"
          >
            {brands.map((brand) => (
              <article
                key={brand}
                className="flex-shrink-0 px-6 py-3 bg-background/60 border border-borderMuted/50 rounded-lg text-sm sm:text-base font-medium text-textMuted hover:text-textMain hover:border-accentGold/30 transition-colors duration-200 whitespace-nowrap"
                role="listitem"
              >
                {brand}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
