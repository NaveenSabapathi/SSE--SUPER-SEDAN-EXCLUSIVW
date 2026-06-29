import { Car } from "@/lib/dummyData";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const formatKM = (km: number): string => {
    if (km >= 1000) {
      return `${(km / 1000).toFixed(1)}K km`;
    }
    return `${km} km`;
  };

  return (
    <article className="card group overflow-hidden p-0">
      {/* Image placeholder */}
      <div className="relative h-[200px] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
        <span className="text-slate-400 text-sm font-medium tracking-wide">
          Image Coming Soon
        </span>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {car.year >= 2023 && (
            <span className="px-2 py-1 bg-accentGold/90 text-background text-xs font-semibold rounded">
              New
            </span>
          )}
          {car.km < 20000 && (
            <span className="px-2 py-1 bg-accentBlue/90 text-white text-xs font-semibold rounded">
              Low KM
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-textMain leading-tight">
            {car.year} {car.make} {car.model}
          </h3>
          <p className="text-sm text-textMuted mt-1">{car.variant}</p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-textMuted">
            <svg
              className="w-4 h-4 text-textMuted/70"
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
            {formatKM(car.km)}
          </div>
          <div className="flex items-center gap-2 text-sm text-textMuted">
            <svg
              className="w-4 h-4 text-textMuted/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            {car.fuel}
          </div>
          <div className="flex items-center gap-2 text-sm text-textMuted">
            <svg
              className="w-4 h-4 text-textMuted/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            {car.transmission}
          </div>
          <div className="flex items-center gap-2 text-sm text-textMuted">
            <svg
              className="w-4 h-4 text-textMuted/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {car.location}
          </div>
        </div>

        {/* Price */}
        <div className="border-t border-borderMuted/50 pt-4 mb-4">
          <p className="text-xl font-bold text-accentGold">{car.price}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 btn-primary py-3 text-sm font-medium"
          >
            View Details
          </button>
          <button
            type="button"
            className="flex-1 btn-secondary py-3 text-sm font-medium"
          >
            Calculate EMI
          </button>
        </div>
      </div>
    </article>
  );
}