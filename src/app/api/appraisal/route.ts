import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";
import { sendAppraisalNotification } from "@/lib/email";

// Initialize SQLite adapter with database path
const dbPath = path.join(process.cwd(), "prisma", "dev.db");
const adapter = new PrismaBetterSqlite3({ url: dbPath });
const prisma = new PrismaClient({ adapter });

interface AppraisalRequestBody {
  make: string;
  model: string;
  year: string;
  kilometers: string;
  rto: string;
  owners: string;
  phoneNumber: string;
  email: string;
}

function generatePriceRange(year: string): string {
  const yearNum = parseInt(year, 10);
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearNum;

  // Base prices and depreciation calculation
  const basePrices: Record<string, { min: number; max: number }> = {
    premium: { min: 1200000, max: 1450000 }, // BMW, Mercedes, Audi
    executive: { min: 800000, max: 1000000 }, // Skoda, VW, Toyota
    standard: { min: 650000, max: 800000 }, // Honda, Hyundai, others
  };

  // Determine base price category based on age
  let basePrice = basePrices.standard;
  if (age <= 3) {
    basePrice = basePrices.executive;
  }
  if (age <= 2) {
    basePrice = basePrices.premium;
  }

  // Apply depreciation: ~10% per year
  const depreciation = Math.min(age * 0.1, 0.5);
  const minPrice = Math.round(basePrice.min * (1 - depreciation) / 1000) * 1000;
  const maxPrice = Math.round(basePrice.max * (1 - depreciation) / 1000) * 1000;

  const formatINR = (num: number): string => {
    const lakhs = num / 100000;
    return `₹${lakhs.toFixed(2).replace(/\B(?=(\d{2})+(?!\d))/g, ",")} Lakhs`;
  };

  return `${formatINR(minPrice)} - ${formatINR(maxPrice)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body: AppraisalRequestBody = await request.json();

    // Validate required fields
    const requiredFields: (keyof AppraisalRequestBody)[] = [
      "make",
      "model",
      "year",
      "kilometers",
      "rto",
      "owners",
      "phoneNumber",
      "email",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Generate price range
    const priceRange = generatePriceRange(body.year);

    // Create lead in database
    const lead = await prisma.appraisalLead.create({
      data: {
        make: body.make,
        model: body.model,
        year: body.year,
        kilometers: body.kilometers,
        rto: body.rto,
        owners: body.owners,
        phoneNumber: body.phoneNumber,
        email: body.email,
        priceRange: priceRange,
      },
    });

    // Send email notification (non-blocking)
    sendAppraisalNotification({
      make: body.make,
      model: body.model,
      year: body.year,
      kilometers: body.kilometers,
      rto: body.rto,
      owners: body.owners,
      phoneNumber: body.phoneNumber,
      email: body.email,
      priceRange: priceRange,
    }).catch((error) => {
      console.error("Email notification failed:", error);
    });

    return NextResponse.json(
      {
        success: true,
        priceRange: priceRange,
        leadId: lead.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appraisal API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}