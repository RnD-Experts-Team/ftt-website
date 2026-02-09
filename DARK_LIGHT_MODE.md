# Dark/Light Mode Implementation

## Overview

Full dark and light mode support across all section components. The mode is controlled via the `.dark` class on the `<html>` element — no UI toggle is implemented.

## How to Switch Modes

In `app/layout.tsx` (line 38), change the `className` on the `<html>` element:

```tsx
// Dark mode (current default)
<html lang="en" className="dark">

// Light mode
<html lang="en" className="">
```

## Configuration

### Tailwind v4 Class-Based Dark Mode

Added `@custom-variant` directive in `app/globals.css` to enable class-based dark mode strategy (Tailwind v4 defaults to `prefers-color-scheme` media query):

```css
@custom-variant dark (&:where(.dark, .dark *));
```

This ensures all `dark:` utility classes respond to the `.dark` class on `<html>`, not the OS preference.

### CSS Variables

Theme colors adapt automatically via CSS custom properties defined in `globals.css`:

| Variable            | Light Mode  | Dark Mode   |
| ------------------- | ----------- | ----------- |
| `--background`      | `#f8f6f6`   | `#090C0E`   |
| `--foreground`      | `#090C0E`   | `#f8f6f6`   |
| `--charcoal`        | `#1a1d20`   | `#090C0E`   |
| `--charcoal-accent` | `#2a2d30`   | `#1A1D1F`   |
| `--card-dark`       | `#ffffff`   | `#161a1d`   |
| `--card-border`     | `#e2e8f0`   | `rgba(255,255,255,0.05)` |
| `--section-alt`     | `#f1f5f9`   | `#0d1114`   |

## Changes Made

### `app/components/sections/home/HeroSection.tsx`

| Element             | Light Mode                          | Dark Mode                          |
| ------------------- | ----------------------------------- | ---------------------------------- |
| Gradient overlay    | `from-white via-white/80 to-white/50` | `from-charcoal via-charcoal/70 to-charcoal/40` |
| Heading text        | `text-slate-900`                    | `text-white` + red glow drop-shadow |
| Description         | `text-slate-600`                    | `text-slate-300`                   |
| Apply Now shadow    | Subtle `rgba(235,25,32,0.2)`       | Intense `rgba(235,25,32,0.4)`     |
| Learn More button   | `border-slate-900/20`, dark text    | `border-white/20`, white text      |
| Stats border        | `border-slate-200`                  | `border-white/10`                  |
| Stats values        | `text-slate-900`                    | `text-white`                       |
| Stats labels        | `text-slate-500`                    | `text-slate-400`                   |
| Scroll indicator    | `text-slate-400`                    | `text-white/30`                    |

### `app/components/sections/home/FeaturesSection.tsx`

Already had complete dark/light mode support — **no changes needed**:
- Section: `bg-slate-50` / `dark:bg-charcoal`
- Cards: `bg-white` / `dark:bg-white/3` with matching border variants
- Text: proper `dark:text-*` variants on all headings, descriptions, and labels

### `app/(root)/layout.tsx`

Fixed nested `<html>`/`<body>` tags — the route group layout was rendering its own `<html>` and `<body>` inside the root layout, producing invalid HTML. Changed to use a React Fragment (`<>...</>`).

### Build Fixes

Added placeholder `export default` to 6 pages with fully commented-out content (no module export caused TypeScript build failures):
- `app/benefits/page.tsx`
- `app/owner-message/page.tsx`
- `app/pay-growth/page.tsx`
- `app/sign-on-bonus/page.tsx`
- `app/testimonials/page.tsx`
- `app/why-ftt/page.tsx`

---

## Phase 2: Apply-Now, Gallery & Benefits Sections

### Apply-Now Sections

**`ApplyCTABannerSection.tsx`** — Already had full `dark:` variant coverage. No changes needed.

**`ApplyFooterSection.tsx`** — Already had full `dark:` variant coverage across all text, borders, backgrounds, and interactive states. No changes needed.

**`app/apply-now/page.tsx`** — Fixed hardcoded `bg-background-dark text-white` → `bg-background text-foreground` (uses CSS variables that auto-adapt).

**`HomeSection/apply-now/page.tsx`** — Same fix: `bg-background-dark text-white` → `bg-background text-foreground`.

### Gallery Sections

**`GalleryHeroSection.tsx`** — Already had `dark:` variants on text. No changes needed.

**`GalleryGridSection.tsx`** — Updated card `bg-white` → `bg-slate-50` in light mode for better contrast against page background.

**`GalleryActionBarSection.tsx`** — Updated:
- Icon circle backgrounds: `bg-steel-gray/10` → `bg-slate-100 dark:bg-steel-gray/10`
- Border divider: `bg-steel-gray/20` → `bg-slate-200 dark:bg-steel-gray/20`
- Section top border: added `border-slate-200 dark:` prefix

**`GalleryFooterSection.tsx`** — Updated to use theme tokens:
- Section bg: `dark:bg-slate-900` → `dark:bg-section-alt`
- Border: `dark:border-slate-800` → `dark:border-card-border`
- Social icons: `dark:bg-slate-800` → `dark:bg-card-dark`

**`app/gallery/page.tsx`** — Fixed hardcoded `bg-background-dark text-white` → `bg-background text-foreground`.

### Benefits Sections

**`BenefitsHeroSection.tsx`** — Already had full `dark:` variant coverage. No changes needed.

**`CompensationMetricsSection.tsx`** — Updated to use theme tokens:
- Section bg: `dark:bg-slate-900` → `dark:bg-section-alt`
- Cards: `dark:bg-slate-800` → `dark:bg-card-dark`, `dark:border-slate-800` → `dark:border-card-border`

**`DetailedBenefitsSection.tsx`** — Already had full `dark:` variant coverage with theme tokens. No changes needed.

**`BenefitsCTASection.tsx`** — Already had full `dark:` variant coverage. No changes needed.

**`HomeSection/benefits/page.tsx`** — Fixed hardcoded `bg-background-dark` → `bg-background-light dark:bg-background-dark`.

## Build Status

**Build: PASSING** — `pnpm build` completes with 0 errors, 22/22 static pages generated.
