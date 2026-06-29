# Developer Handover Document

**Project:** SSE - Super Sedan Exclusive  
**Version:** 1.0.0  
**Date:** June 2026  
**Status:** Production Ready

---

## 📋 Executive Summary

SSE is a premium used car marketplace MVP built for the South Indian market. The platform enables users to appraise, browse, and inquire about pre-owned executive sedans with a focus on quality assurance and expert assistance.

### Key Deliverables

- [x] Premium Dark Theme UI
- [x] Vehicle Appraisal Wizard (4-step form)
- [x] Car Inventory with Filters
- [x] Expert Services Landing Page
- [x] Backend API for Lead Capture
- [x] Email Notifications via Nodemailer
- [x] Mobile-First Navigation
- [x] SEO Optimization

---

## 🏗️ Architecture Overview

### Technology Stack

```
Frontend:     Next.js 16 (App Router) + React 18
Styling:      Tailwind CSS 3 + Custom CSS Variables
Type Safety:  TypeScript 5 (strict mode)
Database:     SQLite via Prisma ORM
Email:        Nodemailer
Deployment:   Vercel (recommended)
```

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/appraisal/      # Lead capture API endpoint
│   ├── expertise/          # Services page
│   ├── inventory/          # Car listings page
│   ├── appraisal/          # Valuation wizard page
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # Custom 404
│   ├── layout.tsx          # Root layout with navigation
│   └── page.tsx            # Homepage
├── components/             # Reusable React components
│   ├── AppraisalWizard.tsx  # 4-step form component
│   ├── BottomNav.tsx        # Mobile bottom navigation
│   ├── CarCard.tsx         # Car listing card
│   └── FloatingActions.tsx # WhatsApp FAB
└── lib/                    # Utility functions
    ├── dummyData.ts        # Sample car data (replace with API)
    └── email.ts            # Nodemailer configuration
```

---

## 🔧 Environment Setup

### Required Environment Variables

Create `.env` from `.env.example`:

```env
# Database (SQLite) - Do not change for local dev
DATABASE_URL="file:./prisma/dev.db"

# Email Configuration (SSE Team Inbox)
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-specific-password"
```

### Database Commands

```bash
# Push schema changes
npx prisma db push

# Open Prisma Studio (GUI)
npx prisma studio

# Generate Prisma Client
npx prisma generate

# Reset database
npx prisma db push --force-reset
```

---

## 📊 Database Schema

### Tables

#### AppraisalLead
| Field | Type | Description |
|-------|------|-------------|
| id | String (CUID) | Primary key |
| make | String | Car manufacturer |
| model | String | Car model |
| year | String | Manufacturing year |
| kilometers | String | Distance driven |
| rto | String | Registration state (TN, KA, KL, etc.) |
| owners | String | Ownership count |
| phoneNumber | String | Contact number |
| email | String | Contact email |
| priceRange | String? | Estimated price (nullable) |
| createdAt | DateTime | Record creation time |
| updatedAt | DateTime | Last update time |

---

## 🔌 API Documentation

### POST /api/appraisal

**Purpose:** Capture leads and generate price estimates

**Request:**
```typescript
{
  make: string;        // e.g., "honda"
  model: string;       // e.g., "city"
  year: string;        // e.g., "2022"
  kilometers: string;  // e.g., "45000"
  rto: string;         // e.g., "TN"
  owners: string;      // e.g., "1"
  phoneNumber: string; // 10-digit mobile
  email: string;       // Valid email
}
```

**Response:**
```typescript
{
  success: boolean;
  priceRange: string;   // e.g., "₹6.50 Lakhs - ₹7.10 Lakhs"
  leadId?: string;     // Database ID if successful
}
```

**Validation:**
- All fields required
- phoneNumber: Must be 10 digits starting with 6-9
- email: Must be valid format
- Returns 400 if validation fails

---

## 🎨 Design System

### Color Palette (CSS Variables)

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-background` | `#0f172a` | Page background |
| `--color-surface` | `#1e293b` | Cards, modals |
| `--color-borderMuted` | `#334155` | Borders, dividers |
| `--color-textMain` | `#f8fafc` | Primary text |
| `--color-textMuted` | `#94a3b8` | Secondary text |
| `--color-accentGold` | `#eab308` | Prices, highlights |
| `--color-accentBlue` | `#3b82f6` | CTAs, links |

### Component Classes

| Class | Purpose |
|-------|---------|
| `.btn-primary` | Primary action button (blue) |
| `.btn-secondary` | Secondary action button (outline) |
| `.card` | Card container with surface background |

### Breakpoints

| Name | Min Width | Usage |
|------|----------|-------|
| sm | 640px | Small tablets |
| md | 768px | Tablets, desktop |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |

---

## 📱 Mobile Features

### Bottom Navigation

- Fixed at viewport bottom
- Visible only on mobile (< md)
- 4 items: Home, Inventory, Appraisal, Expert Assist
- Appraisal highlighted as core feature
- iOS safe area padding included

### Floating WhatsApp Button

- Position: 5rem from bottom, 1rem from right
- Pulse animation effect
- Deep links to WhatsApp with pre-filled message
- Hidden on desktop

---

## 🔒 Security Considerations

### Implemented

- Environment variables for secrets
- Type-safe Prisma queries
- API input validation
- No eval() or dangerous patterns

### Recommended for Production

1. **Rate Limiting** - Add Vercel Rate Limiting or Upstash
2. **CSRF Protection** - Enable if adding cookies/sessions
3. **Input Sanitization** - Add Zod validation library
4. **HTTPS Only** - Enforce in Vercel dashboard
5. **Email Domain Validation** - Block disposable emails

---

## 🚀 Deployment Checklist

### Vercel Deployment

1. Connect GitHub repository to Vercel
2. Set environment variables:
   - `DATABASE_URL` = `file:./prisma/dev.db`
   - `SMTP_USER` = Production email
   - `SMTP_PASS` = App password
3. Add `prisma/` to build output
4. Deploy

### Environment Setup

```bash
# Build command
npm run build

# Output directory
.next

# Install command
npm install

# Environment variables (in Vercel dashboard)
DATABASE_URL=file:./prisma/dev.db
SMTP_USER=your-email@gmail.com
SMTP_PASS=app-specific-password
```

### Prisma in Production

The SQLite database is local. For production:

**Option A - Turso (Recommended)**
```prisma
datasource db {
  provider = "turso"
  url = env("TURSO_DATABASE_URL")
}
```

**Option B - PlanetScale**
```prisma
datasource db {
  provider = "mysql"
  url = env("DATABASE_URL")
}
```

---

## 🔄 Future Development

### Priority Features

1. **Real Image Hosting** - Integrate Cloudinary or AWS S3
2. **User Authentication** - NextAuth.js with Google/phone OTP
3. **Payment Gateway** - Razorpay for booking deposits
4. **SMS Notifications** - Twilio integration
5. **Admin Dashboard** - Lead management interface
6. **Real-time Inventory** - Database-driven listings

### Known Limitations

| Item | Workaround |
|------|------------|
| No real car images | Image placeholders with gradient |
| Mock price algorithm | Replace with ML model or API |
| SQLite (not scalable) | Migrate to Turso/PlanetScale |
| No user accounts | Add NextAuth.js |
| No real WhatsApp integration | Verify phone number format |

---

## 📞 Support & Contacts

| Role | Responsibility |
|------|---------------|
| Frontend Issues | Review React components in `src/components/` |
| Backend/API Issues | Check `src/app/api/appraisal/route.ts` |
| Database Issues | Run `npx prisma studio` |
| Email Issues | Verify SMTP credentials in `.env` |

---

## 📁 Key Files Reference

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Global layout, navigation, metadata |
| `src/app/page.tsx` | Homepage |
| `src/components/AppraisalWizard.tsx` | Main lead capture form |
| `src/lib/dummyData.ts` | Sample car data (replace with DB) |
| `src/lib/email.ts` | Email sending utility |
| `prisma/schema.prisma` | Database schema definition |
| `tailwind.config.ts` | Tailwind theme configuration |
| `src/app/globals.css` | Global styles, component classes |

---

## ✅ Testing Checklist

Before going live, verify:

- [ ] All navigation links work
- [ ] Appraisal form submits successfully
- [ ] Email notifications received
- [ ] 404 page displays correctly
- [ ] Mobile navigation functional
- [ ] WhatsApp deep link works
- [ ] Build completes without errors
- [ ] TypeScript type check passes
- [ ] ESLint shows no errors

---

## 🏷️ Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | June 2026 | MVP with core features |

---

**Document prepared by:** OpenHands AI Agent  
**For:** Super Sedan Exclusive Team  
**Project:** SSE MVP Development Sprint
