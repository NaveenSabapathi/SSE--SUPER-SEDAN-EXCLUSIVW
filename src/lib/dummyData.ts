export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: string;
  km: number;
  fuel: "Petrol" | "Diesel";
  transmission: "Automatic" | "Manual";
  location: string;
  variant: string;
}

export const dummyCars: Car[] = [
  {
    id: "car-001",
    make: "Skoda",
    model: "Slavia",
    year: 2022,
    variant: "1.5 TSI Style",
    price: "₹15,50,000",
    km: 22000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Bangalore",
  },
  {
    id: "car-002",
    make: "Honda",
    model: "City",
    year: 2021,
    variant: "ZX CVT",
    price: "₹12,80,000",
    km: 35000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Chennai",
  },
  {
    id: "car-003",
    make: "Hyundai",
    model: "Verna",
    year: 2023,
    variant: "SX(O) Turbo",
    price: "₹16,90,000",
    km: 12000,
    fuel: "Petrol",
    transmission: "Manual",
    location: "Hyderabad",
  },
  {
    id: "car-004",
    make: "Volkswagen",
    model: "Vento",
    year: 2019,
    variant: "Highline Plus 1.5 TDI",
    price: "₹7,50,000",
    km: 65000,
    fuel: "Diesel",
    transmission: "Manual",
    location: "Kochi",
  },
];