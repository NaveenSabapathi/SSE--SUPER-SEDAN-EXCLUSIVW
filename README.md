# SSE - Super Sedan Exclusive

> South India's premier online platform for buying, selling, and evaluating premium pre-owned executive sedans.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38b2ac)
![Prisma](https://img.shields.io/badge/Prisma-7-2d3748)

## 🚗 Overview

SSE is a premium used car marketplace tailored for the South Indian market, focusing exclusively on executive sedans. The platform provides:

- **Instant Vehicle Appraisal** - Get accurate market valuations in seconds
- **Curated Inventory** - Handpicked premium sedans with verified history
- **Expert Assistance** - Professional inspection, negotiation, and RTO services
- **Flood-Free Guarantee** - All vehicles verified for flood damage

## ✨ Features

### Core Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section with value proposition |
| Appraisal | `/appraisal` | 4-step vehicle valuation wizard |
| Inventory | `/inventory` | Filterable car listings grid |
| Expertise | `/expertise` | Professional services showcase |

### Technical Features

- **Premium Dark Theme** - Slate-900 backgrounds with gold/blue accents
- **Mobile-First Design** - Native-app feel with bottom navigation
- **Real-time API** - Lead capture with email notifications
- **SEO Optimized** - OpenGraph, robots.txt, semantic markup
- **Type Safety** - Full TypeScript with strict mode
- **Error Handling** - Custom 404 and error boundaries

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 (App Router) | React framework with Server Components |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Prisma | Type-safe database ORM |
| SQLite | Local development database |
| Nodemailer | Email notifications |

## 📁 Project Structure

```
sse-project/
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── dev.db              # SQLite database
├── public/
│   └── robots.txt          # SEO crawling rules
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── appraisal/
│   │   │       └── route.ts    # POST /api/appraisal
│   │   ├── expertise/
│   │   │   └── page.tsx        # Services page
│   │   ├── inventory/
│   │   │   └── page.tsx        # Car listings
│   │   ├── appraisal/
│   │   │   └── page.tsx        # Valuation wizard
│   │   ├── error.tsx           # Error boundary
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── not-found.tsx       # 404 page
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── AppraisalWizard.tsx # 4-step form
│   │   ├── BottomNav.tsx        # Mobile nav
│   │   ├── CarCard.tsx         # Car listing card
│   │   └── FloatingActions.tsx  # WhatsApp FAB
│   └── lib/
│       ├── dummyData.ts        # Sample car data
│       └── email.ts            # Nodemailer config
├── .env.example               # Environment template
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/NaveenSabapathi/SSE--SUPER-SEDAN-EXCLUSIVW.git
cd SSE--SUPER-SEDAN-EXCLUSIVW

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Initialize database
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Database (SQLite)
DATABASE_URL="file:./prisma/dev.db"

# SMTP Configuration (for email notifications)
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

## 📝 API Reference

### POST /api/appraisal

Submit vehicle details for valuation and lead capture.

**Request Body:**
```json
{
  "make": "honda",
  "model": "city",
  "year": "2022",
  "kilometers": "45000",
  "rto": "TN",
  "owners": "1",
  "phoneNumber": "9876543210",
  "email": "user@example.com"
}
```

**Response (200):**
```json
{
  "success": true,
  "priceRange": "₹6.50 Lakhs - ₹7.10 Lakhs",
  "leadId": "clx..."
}
```

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Background | `#0f172a` | Page background |
| Surface | `#1e293b` | Cards, elevated elements |
| Border Muted | `#334155` | Subtle borders |
| Text Main | `#f8fafc` | Primary text |
| Text Muted | `#94a3b8` | Secondary text |
| Accent Gold | `#eab308` | Prices, highlights |
| Accent Blue | `#3b82f6` | CTAs, links |

### Typography

- **Font Family:** Inter (Google Fonts)
- **Weights:** 400, 500, 600, 700

### Components

```css
.btn-primary  /* Blue gradient button with hover/active states */
.btn-secondary /* Outline button for secondary actions */
.card          /* Surface card with border */
```

## 📱 Mobile Experience

- **Bottom Navigation** - Fixed nav bar with Home, Inventory, Appraisal, Expert Assist
- **WhatsApp FAB** - Floating action button for quick contact
- **Safe Areas** - iOS notch/home indicator padding
- **Touch Targets** - Minimum 44px tap targets

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
npm run typecheck # TypeScript check
```

## 📄 Pages

### Homepage (`/`)
- Hero section with tagline
- Feature highlights
- CTA buttons

### Appraisal (`/appraisal`)
- 4-step valuation wizard
- Vehicle details form
- Price range calculation
- Lead capture with email

### Inventory (`/inventory`)
- Responsive car grid (1-3 columns)
- Sidebar filters (Budget, Make, Fuel, Transmission)
- CarCard with image placeholder

### Expertise (`/expertise`)
- Pre-Purchase Inspection service
- Negotiation & Brokerage
- RTO & Paperwork assistance
- Stats section
- Contact CTA

## 🔒 Security

- Environment variables for secrets
- Type-safe database queries via Prisma
- Input validation on API endpoints
- No external image dependencies

## 📈 SEO

- Semantic HTML structure
- OpenGraph meta tags
- robots.txt configuration
- Custom 404 page
- Descriptive page titles

## 📄 License

Private - All Rights Reserved

---

Built with ❤️ for South India's premium sedan enthusiasts
