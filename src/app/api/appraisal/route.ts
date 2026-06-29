import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend for email
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email notification via Resend (non-blocking)
    try {
      await resend.emails.send({
        from: "SSE Appraisals <onboarding@resend.dev>",
        to: process.env.RECEIVER_EMAIL || body.email,
        subject: `New Lead: ${body.year} ${body.make} ${body.model}`,
        html: `
          <h2>New Appraisal Lead Captured</h2>
          <p><strong>Vehicle:</strong> ${body.year} ${body.make} ${body.model}</p>
          <p><strong>Kilometers:</strong> ${body.kilometers} km</p>
          <p><strong>RTO:</strong> ${body.rto}</p>
          <p><strong>Owners:</strong> ${body.owners}</p>
          <hr />
          <h3>Contact Info</h3>
          <p><strong>Phone:</strong> ${body.phoneNumber}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Quoted Price Range:</strong> ${priceRange}</p>
        `,
      });
      console.log("Resend email dispatched successfully.");
    } catch (emailError) {
      console.error("Resend API failed:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        priceRange: priceRange,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appraisal API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}