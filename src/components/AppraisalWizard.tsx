"use client";

import { useState, useEffect } from "react";

interface VehicleData {
  make: string;
  model: string;
  year: string;
  kilometers: string;
  rtoState: string;
  owners: string;
  mobile: string;
  email: string;
}

const vehicleMakes = [
  { value: "", label: "Select Make" },
  { value: "honda", label: "Honda" },
  { value: "hyundai", label: "Hyundai" },
  { value: "toyota", label: "Toyota" },
  { value: "volkswagen", label: "Volkswagen" },
  { value: "skoda", label: "Skoda" },
  { value: "bmw", label: "BMW" },
  { value: "mercedes", label: "Mercedes-Benz" },
  { value: "audi", label: "Audi" },
  { value: "mahindra", label: "Mahindra" },
  { value: "tata", label: "Tata" },
];

const vehicleModels: Record<string, { value: string; label: string }[]> = {
  honda: [
    { value: "", label: "Select Model" },
    { value: "city", label: "City" },
    { value: "civic", label: "Civic" },
    { value: "amaze", label: "Amaze" },
  ],
  hyundai: [
    { value: "", label: "Select Model" },
    { value: "verna", label: "Verna" },
    { value: "slavia", label: "Slavia" },
    { value: "creta", label: "Creta" },
  ],
  toyota: [
    { value: "", label: "Select Model" },
    { value: "camry", label: "Camry" },
    { value: "innova", label: "Innova Crysta" },
    { value: "fortuner", label: "Fortuner" },
  ],
  volkswagen: [
    { value: "", label: "Select Model" },
    { value: "virtus", label: "Virtus" },
    { value: "polo", label: "Polo" },
    { value: "vento", label: "Vento" },
  ],
  skoda: [
    { value: "", label: "Select Model" },
    { value: "slavia", label: "Slavia" },
    { value: "rapid", label: "Rapid" },
    { value: "superb", label: "Superb" },
  ],
  bmw: [
    { value: "", label: "Select Model" },
    { value: "3-series", label: "3 Series" },
    { value: "5-series", label: "5 Series" },
  ],
  mercedes: [
    { value: "", label: "Select Model" },
    { value: "c-class", label: "C-Class" },
    { value: "e-class", label: "E-Class" },
  ],
  audi: [
    { value: "", label: "Select Model" },
    { value: "a4", label: "A4" },
    { value: "a6", label: "A6" },
  ],
  mahindra: [
    { value: "", label: "Select Model" },
    { value: "xuv500", label: "XUV500" },
    { value: "scorpio", label: "Scorpio" },
  ],
  tata: [
    { value: "", label: "Select Model" },
    { value: "harrier", label: "Harrier" },
    { value: "safari", label: "Safari" },
  ],
};

const years = [
  { value: "", label: "Select Year" },
  ...Array.from({ length: 15 }, (_, i) => ({
    value: String(2025 - i),
    label: String(2025 - i),
  })),
];

const rtoStates = [
  { value: "", label: "Select RTO State" },
  { value: "TN", label: "Tamil Nadu (TN)" },
  { value: "KA", label: "Karnataka (KA)" },
  { value: "KL", label: "Kerala (KL)" },
  { value: "TS", label: "Telangana (TS)" },
  { value: "AP", label: "Andhra Pradesh (AP)" },
];

const ownerOptions = [
  { value: "", label: "Select Owners" },
  { value: "1", label: "1st Owner" },
  { value: "2", label: "2nd Owner" },
  { value: "3", label: "3rd Owner" },
];

const analysisMessages = [
  "Validating RTO Data...",
  "Analyzing South Indian Market Trends...",
  "Calculating Depreciation...",
];

export default function AppraisalWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicleData, setVehicleData] = useState<VehicleData>({
    make: "",
    model: "",
    year: "",
    kilometers: "",
    rtoState: "",
    owners: "",
    mobile: "",
    email: "",
  });
  const [analysisMessageIndex, setAnalysisMessageIndex] = useState(0);
  const [errors, setErrors] = useState<Partial<VehicleData>>({});

  const updateVehicleData = (field: keyof VehicleData, value: string) => {
    setVehicleData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<VehicleData> = {};
    if (!vehicleData.make) newErrors.make = "Please select a make";
    if (!vehicleData.model) newErrors.model = "Please select a model";
    if (!vehicleData.year) newErrors.year = "Please select the year";
    if (!vehicleData.kilometers) newErrors.kilometers = "Please enter kilometers";
    if (!vehicleData.rtoState) newErrors.rtoState = "Please select RTO state";
    if (!vehicleData.owners) newErrors.owners = "Please select number of owners";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextFromStep1 = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  useEffect(() => {
    if (currentStep === 2) {
      let messageIndex = 0;
      const interval = setInterval(() => {
        messageIndex = (messageIndex + 1) % analysisMessages.length;
        setAnalysisMessageIndex(messageIndex);
      }, 1500);

      const timeout = setTimeout(() => {
        setCurrentStep(3);
      }, 4500);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [currentStep]);

  const validateStep3 = (): boolean => {
    const newErrors: Partial<VehicleData> = {};
    if (!vehicleData.mobile) {
      newErrors.mobile = "Please enter your mobile number";
    } else if (!/^[6-9]\d{9}$/.test(vehicleData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!vehicleData.email) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vehicleData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleShowValuation = () => {
    if (validateStep3()) {
      setCurrentStep(4);
    }
  };

  const calculateValuation = (): { min: string; max: string } => {
    const basePrice = 500000;
    const yearFactor = parseInt(vehicleData.year) ? (2025 - parseInt(vehicleData.year)) * 30000 : 0;
    const kmFactor = parseInt(vehicleData.kilometers) ? Math.floor(parseInt(vehicleData.kilometers) / 10000) * 15000 : 0;
    const ownerFactor = vehicleData.owners === "1" ? 0 : vehicleData.owners === "2" ? -50000 : -100000;
    const makeFactor = ["bmw", "mercedes", "audi"].includes(vehicleData.make) ? 300000 : ["toyota", "skoda", "volkswagen"].includes(vehicleData.make) ? 100000 : 0;

    const total = basePrice + makeFactor - yearFactor - kmFactor + ownerFactor;
    const min = Math.max(total - 50000, 300000);
    const max = total + 80000;

    return {
      min: `₹${(min / 100000).toFixed(2).replace(/\B(?=(\d{2})+(?!\d))/g, ",")} Lakhs`,
      max: `₹${(max / 100000).toFixed(2).replace(/\B(?=(\d{2})+(?!\d))/g, ",")} Lakhs`,
    };
  };

  const inputClasses =
    "w-full px-4 py-4 bg-background border border-borderMuted rounded-xl text-textMain placeholder-textMuted focus:outline-none focus:border-accentBlue focus:ring-2 focus:ring-accentBlue/20 transition-all text-base touch-target";
  const labelClasses = "block text-sm font-medium text-textMuted mb-2";
  const errorClasses = "text-red-400 text-sm mt-1";
  const selectClasses = `${inputClasses} appearance-none cursor-pointer bg-no-repeat bg-[right_1rem_center]`;

  const renderStep1 = () => (
    <div className="space-y-5">
      <div>
        <label htmlFor="make" className={labelClasses}>
          Make
        </label>
        <select
          id="make"
          value={vehicleData.make}
          onChange={(e) => {
            updateVehicleData("make", e.target.value);
            updateVehicleData("model", "");
          }}
          className={selectClasses}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: "1.5rem",
          }}
        >
          {vehicleMakes.map((make) => (
            <option key={make.value} value={make.value}>
              {make.label}
            </option>
          ))}
        </select>
        {errors.make && <p className={errorClasses}>{errors.make}</p>}
      </div>

      <div>
        <label htmlFor="model" className={labelClasses}>
          Model
        </label>
        <select
          id="model"
          value={vehicleData.model}
          onChange={(e) => updateVehicleData("model", e.target.value)}
          className={selectClasses}
          disabled={!vehicleData.make}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: "1.5rem",
          }}
        >
          {vehicleData.make && vehicleModels[vehicleData.make]
            ? vehicleModels[vehicleData.make].map((model) => (
                <option key={model.value} value={model.value}>
                  {model.label}
                </option>
              ))
            : [{ value: "", label: "Select Model" }].map((model) => (
                <option key={model.value} value={model.value}>
                  {model.label}
                </option>
              ))}
        </select>
        {errors.model && <p className={errorClasses}>{errors.model}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="year" className={labelClasses}>
            Year
          </label>
          <select
            id="year"
            value={vehicleData.year}
            onChange={(e) => updateVehicleData("year", e.target.value)}
            className={selectClasses}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: "1.5rem",
            }}
          >
            {years.map((year) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
          {errors.year && <p className={errorClasses}>{errors.year}</p>}
        </div>

        <div>
          <label htmlFor="kilometers" className={labelClasses}>
            KM Driven
          </label>
          <input
            id="kilometers"
            type="number"
            placeholder="e.g. 45000"
            value={vehicleData.kilometers}
            onChange={(e) => updateVehicleData("kilometers", e.target.value)}
            className={inputClasses}
            min="0"
          />
          {errors.kilometers && (
            <p className={errorClasses}>{errors.kilometers}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="rtoState" className={labelClasses}>
            RTO State
          </label>
          <select
            id="rtoState"
            value={vehicleData.rtoState}
            onChange={(e) => updateVehicleData("rtoState", e.target.value)}
            className={selectClasses}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: "1.5rem",
            }}
          >
            {rtoStates.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          {errors.rtoState && (
            <p className={errorClasses}>{errors.rtoState}</p>
          )}
        </div>

        <div>
          <label htmlFor="owners" className={labelClasses}>
            Owners
          </label>
          <select
            id="owners"
            value={vehicleData.owners}
            onChange={(e) => updateVehicleData("owners", e.target.value)}
            className={selectClasses}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: "1.5rem",
            }}
          >
            {ownerOptions.map((owner) => (
              <option key={owner.value} value={owner.value}>
                {owner.label}
              </option>
            ))}
          </select>
          {errors.owners && <p className={errorClasses}>{errors.owners}</p>}
        </div>
      </div>

      <button
        type="button"
        onClick={handleNextFromStep1}
        className="w-full btn-primary py-4 text-base font-semibold mt-8"
      >
        Get My Valuation
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="text-center py-12">
      {/* Loading spinner */}
      <div className="relative w-24 h-24 mx-auto mb-8">
        <div className="absolute inset-0 border-4 border-borderMuted rounded-full"></div>
        <div className="absolute inset-0 border-4 border-accentBlue rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-accentBlue"
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
      </div>

      {/* Cycling message */}
      <p className="text-lg text-textMain font-medium mb-2 animate-pulse">
        {analysisMessages[analysisMessageIndex]}
      </p>
      <p className="text-sm text-textMuted">
        This will only take a moment...
      </p>
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center">
      <div className="mb-8">
        <div className="w-16 h-16 bg-accentGold/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-accentGold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-textMain mb-2">
          Your Valuation is Ready!
        </h2>
        <p className="text-textMuted">
          Enter your details to unlock your accurate market value.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="mobile" className={labelClasses}>
            Mobile Number
          </label>
          <input
            id="mobile"
            type="tel"
            placeholder="Enter 10-digit mobile number"
            value={vehicleData.mobile}
            onChange={(e) => updateVehicleData("mobile", e.target.value)}
            className={inputClasses}
            maxLength={10}
          />
          {errors.mobile && <p className={errorClasses}>{errors.mobile}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={vehicleData.email}
            onChange={(e) => updateVehicleData("email", e.target.value)}
            className={inputClasses}
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </div>

        <button
          type="button"
          onClick={handleShowValuation}
          className="w-full btn-primary py-4 text-base font-semibold mt-8"
        >
          Show My Valuation
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => {
    const valuation = calculateValuation();
    return (
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-accentBlue/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-accentBlue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-textMain mb-2">
            Your Market Value
          </h2>
          <p className="text-textMuted">
            Based on {vehicleData.rtoState} market conditions
          </p>
        </div>

        {/* Price Range */}
        <div className="bg-background rounded-2xl p-6 mb-8 border border-borderMuted">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-left">
              <p className="text-xs text-textMuted uppercase tracking-wider mb-1">
                Min Value
              </p>
              <p className="text-2xl font-bold text-accentGold">
                {valuation.min}
              </p>
            </div>
            <div className="w-px h-12 bg-borderMuted"></div>
            <div className="text-left">
              <p className="text-xs text-textMuted uppercase tracking-wider mb-1">
                Max Value
              </p>
              <p className="text-2xl font-bold text-accentGold">
                {valuation.max}
              </p>
            </div>
          </div>
          <p className="text-xs text-textMuted">
            Actual price may vary based on vehicle condition
          </p>
        </div>

        {/* Vehicle Summary */}
        <div className="bg-surface/50 rounded-xl p-4 mb-8 text-left">
          <h3 className="text-sm font-semibold text-textMain mb-3">
            Vehicle Summary
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-textMuted">Make:</span>
              <span className="text-textMain capitalize">{vehicleData.make}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">Year:</span>
              <span className="text-textMain">{vehicleData.year}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">KM:</span>
              <span className="text-textMain">{vehicleData.kilometers}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">State:</span>
              <span className="text-textMain">{vehicleData.rtoState}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="w-full btn-primary py-4 text-base font-semibold flex items-center justify-center gap-2"
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          Book Free Inspection to Lock This Price
        </button>

        <p className="text-xs text-textMuted mt-4">
          Our certified inspector will verify the vehicle condition at your doorstep
        </p>
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Progress indicator */}
      {currentStep < 4 && (
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  step <= currentStep
                    ? "bg-accentBlue text-white"
                    : "bg-surface text-textMuted border border-borderMuted"
                }`}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`w-12 sm:w-16 h-1 mx-2 rounded ${
                    step < currentStep ? "bg-accentBlue" : "bg-borderMuted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Step content card */}
      <div className="bg-surface rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10 border border-borderMuted">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
      </div>
    </div>
  );
}
