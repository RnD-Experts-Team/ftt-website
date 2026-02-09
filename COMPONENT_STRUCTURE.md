# FTT Website - Component Structure

## Folder Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Global navigation bar (sticky)
│   │   └── Footer.tsx          # Global footer
│   └── sections/
│       ├── home/
│       │   ├── HeroSection.tsx         # Hero section with background image
│       │   └── FeaturesSection.tsx     # Features/benefits grid
│       ├── owner-message/
│       │   ├── OwnerMessageSection.tsx # Owner message with video
│       │   └── StatsSection.tsx        # Company stats counter
│       ├── testimonials/
│       │   ├── TestimonialsCarouselSection.tsx # Video testimonial cards
│       │   ├── FeaturedVideoSection.tsx        # Featured video highlight
│       │   └── TestimonialsCTASection.tsx      # CTA section
│       ├── why-ftt/
│       │   ├── WhyFTTHeroSection.tsx    # Hero title section
│       │   ├── FeaturesGridSection.tsx  # 6 feature cards grid
│       │   └── WhyFTTCTASection.tsx     # Bottom CTA
│       ├── sign-on-bonus/
│       │   ├── BonusHeroSection.tsx     # Hero with split layout
│       │   ├── DetailsCardsSection.tsx  # Coaching & bonus cards
│       │   ├── PerformanceCriteriaSection.tsx # 4 criteria grid
│       │   └── BonusCTASection.tsx      # Final CTA
│       ├── pay-growth/
│       │   ├── PayGrowthHeroSection.tsx       # Hero with image glow
│       │   ├── PerformancePathSection.tsx     # 3-step path
│       │   ├── TieredComparisonSection.tsx    # 3 tier cards
│       │   └── PayGrowthCTASection.tsx        # Bottom CTA
│       └── benefits/
│           ├── BenefitsHeroSection.tsx        # Hero with badge
│           ├── CompensationMetricsSection.tsx # 3 metric cards
│           ├── DetailedBenefitsSection.tsx    # Two-column benefits
│           └── BenefitsCTASection.tsx         # Final CTA with badges
│       └── requirements/
│           ├── RequirementsHeroSection.tsx    # Header and intro
│           ├── RequirementsGridSection.tsx    # Requirements grid
│           ├── RequirementsCTASection.tsx     # CTA with badges
│           └── RequirementsImageSection.tsx   # Image showcase
│       └── apply-now/
│           ├── ApplyCTABannerSection.tsx       # CTA banner
│           └── ApplyFooterSection.tsx          # Custom footer
│       └── gallery/
│           ├── GalleryHeroSection.tsx          # Gallery intro
│           ├── GalleryGridSection.tsx          # Masonry grid
│           ├── GalleryActionBarSection.tsx     # Action bar
│           └── GalleryFooterSection.tsx        # Gallery footer
├── owner-message/
│   └── page.tsx                # Owner message page
├── testimonials/
│   └── page.tsx                # Testimonials page
├── why-ftt/
│   └── page.tsx                # Why FTT page
├── sign-on-bonus/
│   └── page.tsx                # Sign-on bonus page
├── pay-growth/
│   └── page.tsx                # Pay & growth page
├── benefits/
│   └── page.tsx                # Benefits page
├── requirements/
│   └── page.tsx                # Requirements page
├── apply-now/
│   └── page.tsx                # Apply now page
├── gallery/
│   └── page.tsx                # Gallery page
├── globals.css                 # Tailwind 4 theme configuration
├── layout.tsx                  # Root layout with fonts
└── page.tsx                    # Home page composition
```

## Components

### Layout Components (`components/layout/`)
Reusable across all pages:
- **Navbar.tsx**: Fixed navigation with mobile menu, logo, and CTA button
- **Footer.tsx**: Site-wide footer with links and copyright

### Section Components (`components/sections/`)
Page-specific sections organized by page:
- **home/HeroSection.tsx**: Hero with background image, headline, stats
- **home/FeaturesSection.tsx**: Three-column feature cards
- **owner-message/OwnerMessageSection.tsx**: Owner message with video player
- **owner-message/StatsSection.tsx**: Four-column stats display
- **testimonials/TestimonialsCarouselSection.tsx**: Scrollable video testimonial cards
- **testimonials/FeaturedVideoSection.tsx**: Large featured video with description
- **testimonials/TestimonialsCTASection.tsx**: Call-to-action section
- **why-ftt/WhyFTTHeroSection.tsx**: Hero title with description
- **why-ftt/FeaturesGridSection.tsx**: Six feature cards in responsive grid
- **why-ftt/WhyFTTCTASection.tsx**: Bottom call-to-action with gradient
- **sign-on-bonus/BonusHeroSection.tsx**: Split hero with image grid
- **sign-on-bonus/DetailsCardsSection.tsx**: Two detail cards (coaching & bonus)
- **sign-on-bonus/PerformanceCriteriaSection.tsx**: Four performance criteria
- **sign-on-bonus/BonusCTASection.tsx**: Final call-to-action
- **pay-growth/PayGrowthHeroSection.tsx**: Hero with truck image and glow effect
- **pay-growth/PerformancePathSection.tsx**: Three-step progression path
- **pay-growth/TieredComparisonSection.tsx**: Three-tier comparison cards
- **pay-growth/PayGrowthCTASection.tsx**: Bottom call-to-action
- **benefits/BenefitsHeroSection.tsx**: Hero section with Amazon Freight Partner badge
- **benefits/CompensationMetricsSection.tsx**: Three metric cards (Weekly Pay, Performance Bonus, PTO)
- **benefits/DetailedBenefitsSection.tsx**: Two-column layout with benefits and highlights
- **benefits/BenefitsCTASection.tsx**: Final CTA with trust badges
- **requirements/RequirementsHeroSection.tsx**: Header intro section
- **requirements/RequirementsGridSection.tsx**: Requirements grid cards
- **requirements/RequirementsCTASection.tsx**: CTA with trust badges
- **requirements/RequirementsImageSection.tsx**: Bottom image showcase
- **apply-now/ApplyCTABannerSection.tsx**: CTA banner section
- **apply-now/ApplyFooterSection.tsx**: Custom footer layout
- **gallery/GalleryHeroSection.tsx**: Gallery intro section
- **gallery/GalleryGridSection.tsx**: Masonry gallery grid
- **gallery/GalleryActionBarSection.tsx**: Gallery action bar
- **gallery/GalleryFooterSection.tsx**: Gallery footer

## Pages

- **/** - Home page with hero and features
- **/owner-message** - Owner message with video and stats
- **/testimonials** - Driver testimonials with carousel and featured video
- **/why-ftt** - Why First Team Trucking features and benefits
- **/sign-on-bonus** - Sign-on bonus details and coaching program
- **/pay-growth** - Pay & growth performance model with tiers
- **/benefits** - Driver benefits and compensation package
- **/requirements** - Application requirements checklist
- **/apply-now** - Apply now CTA and recruitment footer
- **/gallery** - Life at FTT gallery

## Usage Pattern

```tsx
// app/page.tsx
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/home/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* Add more sections */}
      <Footer />
    </div>
  );
}
```

## Adding New Pages

1. Create section components: `app/components/sections/{page-name}/`
2. Import and compose in page: `app/{page-name}/page.tsx`
3. Reuse Navbar and Footer from `components/layout/`

## Theme Configuration

All colors, fonts, and styles are defined in `app/globals.css` using Tailwind 4's `@theme` directive:
- Colors: `primary`, `charcoal`, `steel-gray`, etc.
- Fonts: `font-display` (Inter), `font-brand` (Barlow Condensed)
- Material Symbols icons loaded locally

## Development

```bash
pnpm dev    # Start dev server
pnpm build  # Build for production
```
