import CarCard from "@/components/CarCard";
import { dummyCars } from "@/lib/dummyData";

export const metadata = {
  title: "Inventory | SSE - Curated Executive Sedans",
  description:
    "Browse our handpicked collection of premium pre-owned executive sedans in South India. Each vehicle verified for quality and authenticity.",
};

const filters = {
  budget: ["Under ₹10L", "₹10L - ₹15L", "₹15L - ₹20L", "Above ₹20L"],
  make: ["Honda", "Hyundai", "Skoda", "Volkswagen", "Toyota", "BMW", "Mercedes", "Audi"],
  fuel: ["Petrol", "Diesel"],
  transmission: ["Automatic", "Manual"],
};

export default function InventoryPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-textMain mb-3">
            Curated Executive Inventory
          </h1>
          <p className="text-textMuted max-w-2xl">
            Handpicked premium sedans, each verified for quality, authenticity,
            and transparent pricing.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-surface rounded-xl p-5 border border-borderMuted sticky top-24">
              <h2 className="text-lg font-semibold text-textMain mb-5">
                Filters
              </h2>

              {/* Budget Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-textMuted mb-3">
                  Budget
                </h3>
                <div className="space-y-2">
                  {filters.budget.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-borderMuted bg-background text-accentBlue focus:ring-accentBlue/20"
                      />
                      <span className="text-sm text-textMuted group-hover:text-textMain transition">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Make Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-textMuted mb-3">
                  Make
                </h3>
                <div className="space-y-2">
                  {filters.make.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-borderMuted bg-background text-accentBlue focus:ring-accentBlue/20"
                      />
                      <span className="text-sm text-textMuted group-hover:text-textMain transition">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fuel Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-textMuted mb-3">
                  Fuel Type
                </h3>
                <div className="space-y-2">
                  {filters.fuel.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-borderMuted bg-background text-accentBlue focus:ring-accentBlue/20"
                      />
                      <span className="text-sm text-textMuted group-hover:text-textMain transition">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Transmission Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-textMuted mb-3">
                  Transmission
                </h3>
                <div className="space-y-2">
                  {filters.transmission.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-borderMuted bg-background text-accentBlue focus:ring-accentBlue/20"
                      />
                      <span className="text-sm text-textMuted group-hover:text-textMain transition">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                type="button"
                className="w-full py-2 text-sm text-accentBlue hover:text-accentGold transition"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Car Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-textMuted">
                Showing <span className="text-textMain font-medium">{dummyCars.length}</span> vehicles
              </p>
              <select className="bg-surface border border-borderMuted rounded-lg px-3 py-2 text-sm text-textMain focus:outline-none focus:border-accentBlue">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>KM: Low to High</option>
              </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {dummyCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {/* Empty State (hidden when cars exist) */}
            {dummyCars.length === 0 && (
              <div className="text-center py-16">
                <svg
                  className="w-16 h-16 mx-auto text-textMuted/30 mb-4"
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
                <h3 className="text-lg font-semibold text-textMain mb-2">
                  No vehicles found
                </h3>
                <p className="text-textMuted">
                  Try adjusting your filters to see more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}