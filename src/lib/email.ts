import nodemailer from "nodemailer";

export interface AppraisalEmailData {
  make: string;
  model: string;
  year: string;
  kilometers: string;
  rto: string;
  owners: string;
  phoneNumber: string;
  email: string;
  priceRange: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendAppraisalNotification(
  data: AppraisalEmailData
): Promise<boolean> {
  const emailBody = `
New Appraisal Request - SSE

Vehicle Details:
----------------
Make: ${data.make}
Model: ${data.model}
Year: ${data.year}
Kilometers: ${data.kilometers}
RTO State: ${data.rto}
Previous Owners: ${data.owners}

Customer Contact:
-----------------
Phone: ${data.phoneNumber}
Email: ${data.email}

Estimated Price Range: ${data.priceRange}

---
This email was generated automatically by SSE Appraisal System.
  `.trim();

  try {
    await transporter.sendMail({
      from: `"SSE Appraisals" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Appraisal Lead: ${data.year} ${data.make} ${data.model} - ${data.priceRange}`,
      text: emailBody,
    });
    return true;
  } catch (error) {
    console.error("Failed to send email notification:", error);
    return false;
  }
}