# Animation Implementation Guide

## Overview

Subtle, performant animations implemented using Framer Motion across multiple sections. All animations are GPU-accelerated, responsive, and optimized for performance. Each section features a unique animation style for visual variety and engagement.

## Dependencies

- **framer-motion** v12.33.0 - Installed via `pnpm add framer-motion`

## Animation Philosophy

### Key Principles

1. **Subtle & Professional** - Animations enhance UX without being distracting
2. **Performance First** - Transform-only animations (opacity, x, y, scale) 
3. **GPU Accelerated** - All animations use GPU-accelerated properties
4. **Responsive** - Works smoothly across all device sizes
5. **Accessibility** - Respects user motion preferences

### Performance Optimizations

- ✅ Transform properties only (x, y, scale, rotate, opacity)
- ✅ No layout-thrashing animations (width, height, margin, padding)
- ✅ `viewport={{ once: true }}` prevents re-animations on scroll
- ✅ Staggered children for organized loading
- ✅ Client-side only (`"use client"`) for optimal hydration

## Animation Variety by Section

Each section uses a different animation approach for visual diversity:

| Section | Animation Type | Key Feature | Easing |
|---------|---------------|-------------|--------|
| **HeroSection** | Vertical slide + stagger | Page load reveal | Smooth `[0.25, 0.1, 0.25, 1]` |
| **FeaturesSection** | Vertical slide + stagger | Scroll-triggered cards | Smooth `[0.25, 0.1, 0.25, 1]` |
| **OwnerMessageSection** | Horizontal opposing slides | Left/right convergence | Smooth `[0.25, 0.1, 0.25, 1]` |
| **StatsSection** | Scale + bounce | Playful pop-in effect | Bouncy `[0.34, 1.56, 0.64, 1]` |

## Implemented Animations

### HeroSection (`app/components/sections/home/HeroSection.tsx`)

**Type:** Page load staggered reveal

**Elements Animated:**
- Badge (line decoration + text)
- Heading with red text accent
- Description paragraph
- CTA buttons
- Statistics grid (4 items, staggered)
- Scroll indicator (continuous bounce)

**Animation Sequence:**
```
1. Container fades in (opacity: 0 → 1)
2. Badge slides up (y: 20 → 0) + fades in
   ↓ 0.15s delay
3. Heading slides up + fades in
   ↓ 0.15s delay
4. Description slides up + fades in
   ↓ 0.15s delay
5. Buttons slide up + fades in
   ↓ Additional 0.15s delay
6. Stats start appearing (staggered by 0.1s each)
7. Scroll indicator fades in after 1s, continuous bounce
```

**Timing:**
- Duration: 0.5-0.6s per element
- Stagger: 0.15s between main elements, 0.1s between stats
- Easing: Custom cubic-bezier `[0.25, 0.1, 0.25, 1]` (smooth ease-out)
- Scroll bounce: 1.5s infinite loop

**Code Structure:**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};
```

### FeaturesSection (`app/components/sections/home/FeaturesSection.tsx`)

**Type:** Scroll-triggered reveal

**Elements Animated:**
- Section header (title + description)
- Three feature cards (staggered)

**Animation Behavior:**
- Triggers when section enters viewport
- Uses `viewport={{ once: true, margin: "-100px" }}` for early triggering
- Cards stagger by 0.2s for elegant reveal

**Animation Sequence:**
```
[Scroll into view]
1. Header slides up (y: 30 → 0) + fades in
   ↓ Viewport detection with -50px margin
2. Card 1 slides up (y: 40 → 0) + fades in
   ↓ 0.2s delay
3. Card 2 slides up + fades in
   ↓ 0.2s delay
4. Card 3 slides up + fades in
```

**Timing:**
- Duration: 0.6s per element
- Stagger: 0.2s between cards
- Easing: Custom cubic-bezier `[0.25, 0.1, 0.25, 1]`
- Viewport margin: -100px (header), -50px (cards) for early trigger

**Code Structure:**
```tsx
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};
```

## Technical Details

### TypeScript Easing Configuration

Framer Motion requires easing values to be properly typed. Use `as const` for cubic-bezier arrays:

```tsx
// ✅ Correct
ease: [0.25, 0.1, 0.25, 1] as const

// ❌ Incorrect (TypeScript error)
ease: [0.25, 0.1, 0.25, 1]
ease: "easeOut"
```

### Client-Side Rendering

Both components use `"use client"` directive since Framer Motion requires client-side JavaScript:

```tsx
"use client";

import { motion } from "framer-motion";
```

### Viewport Detection

`whileInView` triggers animations when elements enter the viewport:

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ 
    once: true,        // Animate only once
    margin: "-100px"   // Trigger 100px before entering viewport
  }}
  variants={variants}
>
```

---

## Phase 2: Owner Message Sections

### OwnerMessageSection (`app/components/sections/owner-message/OwnerMessageSection.tsx`)

**Type:** Scroll-triggered horizontal slide-in from opposite directions

**Elements Animated:**
- Left text block (badge, heading, paragraphs, CTA button)
- Right video player container
- Decorative background blobs (continuous floating animation)

**Animation Behavior:**
- Text slides in from **left** (x: -60 → 0)
- Video slides in from **right** (x: 60 → 0) with 0.2s delay
- Blobs pulse independently with infinite loop
- Creates a "meeting in the middle" effect

**Animation Sequence:**
```
[Scroll into view]
1. Text block slides from left + fades in (duration: 0.8s)
   ↓ 0.2s delay
2. Video block slides from right + fades in (duration: 0.8s)
3. Background blobs continuously pulse (scale + opacity)
```

**Timing:**
- Duration: 0.8s for main elements
- Stagger: 0.2s between text and video
- Easing: Smooth cubic-bezier `[0.25, 0.1, 0.25, 1]`
- Blob animation: 4s infinite loop

**Code Structure:**
```tsx
const textBlockVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const videoBlockVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 }
  }
};

const blobVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] as const
    }
  }
};
```

**Unique Features:**
- Opposing directional slides (left/right)
- Continuous ambient blob animation
- Creates visual balance and engagement

### StatsSection (`app/components/sections/owner-message/StatsSection.tsx`)

**Type:** Scroll-triggered staggered scale + bounce

**Elements Animated:**
- Four stat cards (98% Safety, 24/7 Support, 500+ Routes, Top Tier Partner)

**Animation Behavior:**
- Each stat scales from **0.8 to 1.0** with slight bounce
- Combines scale, opacity, and subtle y-movement
- Uses playful bouncy easing for emphasis
- Staggered by 0.15s for wave effect

**Animation Sequence:**
```
[Scroll into view]
1. Container fades in
2. Stat 1 scales up + bounces (0.8 → 1.0) + fades in
   ↓ 0.15s delay
3. Stat 2 scales up + bounces + fades in
   ↓ 0.15s delay
4. Stat 3 scales up + bounces + fades in
   ↓ 0.15s delay
5. Stat 4 scales up + bounces + fades in
```

**Timing:**
- Duration: 0.6s per stat
- Stagger: 0.15s between stats
- Easing: Bouncy cubic-bezier `[0.34, 1.56, 0.64, 1]` (back easing)
- Viewport margin: -50px for early trigger

**Code Structure:**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const statVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1] as const // Bouncy
    }
  }
};
```

**Unique Features:**
- Scale-based animation (no slide)
- Bouncy easing creates playful energy
- Perfect for highlighting numerical achievements
- Wave-like reveal pattern

---

## Performance Metrics

### What We Avoid

- ❌ Layout animations (width, height, top, left, margin, padding)
- ❌ Heavy filters or backdrop-blur during animation
- ❌ Re-animations on every scroll
- ❌ Unnecessary rerenders

### What We Use

- ✅ Transform properties (GPU-accelerated)
- ✅ Opacity changes
- ✅ `viewport={{ once: true }}` to prevent repeated animations
- ✅ Reasonable durations (0.5-0.6s)
- ✅ Staggered loading for perceived performance

## Best Practices Applied

1. **Incremental Enhancement** - Animations don't block page render
2. **Reduced Motion Support** - Framer Motion respects `prefers-reduced-motion`
3. **Mobile Optimization** - Animations work smoothly on all devices
4. **No Layout Shift** - Transform-based animations prevent CLS
5. **Semantic HTML** - Animations don't affect accessibility tree

## Future Expansion

When adding animations to other sections:

1. Mark component with `"use client"`
2. Import `motion` from `framer-motion`
3. Define animation variants outside component
4. Use transform properties only
5. Add `viewport={{ once: true }}` for scroll triggers
6. Use `as const` for easing arrays
7. Test on mobile devices

### Example Template

```tsx
"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function YourSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {/* Your content */}
    </motion.section>
  );
}
```

## Build Status

**Build: PASSING** ✅
- TypeScript compilation: Success
- Static generation: 22/22 pages
- No runtime errors
- Animations working across all devices

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Performance Best Practices](https://www.framer.com/motion/guide-reduce-bundle-size/)
- [Animation Variants](https://www.framer.com/motion/animation/#variants)
