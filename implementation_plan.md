# Implementation Plan: Sabiha Aamir Portfolio Integration

This document outlines the step-by-step plan for integrating the "Sabiha Aamir — Services Refinement" design into the existing Next.js codebase.

## 1. Project Overview
- **Design Style:** AI Maximalist / Brutalist
- **Core Stack:** Next.js (App Router), TypeScript, Tailwind CSS
- **Key Features:** 3D CSS animations, neon color palette, noise overlay, asymmetric layouts.

## 2. Component Breakdown

### Layout Components
- **`NoiseOverlay`**: A fixed, full-screen background component providing the grain texture.
- **`Navbar`**: Fixed navigation with `mix-blend-exclusion` and active status indicator.
- **`Footer`**: Simple, high-contrast footer with social links.

### Section Components
- **`Hero`**: Contains the 3D rotating cube and maximalist headline.
- **`About`**: Grid layout featuring statistics and brutalist text blocks.
- **`Work`**: Filterable portfolio grid with featured project highlight.
- **`Experience`**: High-contrast timeline showing professional history.
- **`Skills`**: Interactive skill badges with CSS transforms.
- **`Services`**: A three-card layout with a focal "Full Service" middle card.
- **`Education`**: Simple two-column layout for academic background.
- **`Contact`**: Final CTA section with outline text effects.

### UI Components
- **`Cube`**: Pure CSS 3D rotating cube.
- **`ServiceCard`**: Reusable card component for the services section.
- **`WorkItem`**: Component for portfolio entries with hover effects.

## 3. Tech Stack & Dependencies
- **Next.js 15+** (Existing)
- **Tailwind CSS** (Existing)
- **Iconify (`@iconify/react`)**: For consistent iconography as used in the design.
- **Framer Motion**: To enhance the CSS animations with smoother transitions.
- **Google Fonts**: Inter (300, 500, 700, 900).

## 4. Configuration Updates

### `tailwind.config.ts`
Add the following custom tokens:
- **Colors**: `base (#050505)`, `neonPink (#FF1493)`, `neonBlue (#0080FF)`, `neonGreen (#00FF00)`, `neonGold (#FFD700)`, `surface (#111111)`.
- **Animations**: `pulse-slow`, `float`, `rotate-cube`.
- **Keyframes**: Custom definitions for 3D rotation and floating effects.

### `app/globals.css`
- Implement the Noise SVG filter.
- Define global typography styles using `Aspekta`/`Inter`.
- Add utility classes for `clash-gradient`, `neon-glow`, and `outline-text`.

## 5. File Structure and Naming
```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Work.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   ├── ui/
│   │   ├── NoiseOverlay.tsx
│   │   └── Cube.tsx
│   └── icons/ (Optional: Iconify wrapper)
└── lib/
    └── utils.ts
```

## 6. Implementation Steps

1. **Setup Theme**: Update `tailwind.config.ts` and `globals.css` with the design system tokens.
2. **Global Layout**: Implement `NoiseOverlay` and update `RootLayout` to include it.
3. **Navigation**: Create the `Navbar` component with `mix-blend-exclusion`.
4. **Hero Section**: Build the `Cube` component and the main hero typography.
5. **Content Sections**: Incrementally build `About`, `Work`, `Services`, etc.
6. **Interactivity**: Add smooth scrolling, hover transforms, and scroll-triggered animations.
7. **Responsive Audit**: Ensure `vw`-based typography and grid layouts scale correctly on mobile.

## 7. Responsive Behavior
- **Typography**: Uses `vw` units for headlines to maintain visual impact across screen sizes.
- **Grids**: Transitions from 12-column desktop layouts to single-column mobile stacks.
- **Animations**: 3D Cube scales down to 75% on mobile to fit viewport.

## 8. Animations and Interactions
- **3D Cube**: Infinite linear rotation using `transform-style: preserve-3d`.
- **Floating Elements**: Gentle vertical translation for secondary hero elements.
- **Hover States**: Drastic color shifts and shadow removals for buttons/cards.
- **Mix-Blend-Mode**: `exclusion` used on Navbar for dynamic visibility against dark/light backgrounds.
