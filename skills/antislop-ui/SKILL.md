---
name: antislop-ui
description: UI craft standards based on daisyUI and shadcn/ui principles to create bespoke, human, elegant web interfaces without AI aesthetic clichés.
---

# Anti-Slop UI Craft Standard

## 1. Design Direction: Modern Editorial & Tactile Clean
Instead of default template aesthetic, use an intentional archetype:
- **Palette**: Warm Stone / Cream (`#FDFBF7`, `#F5F2EB`), Deep Slate/Charcoal text (`#1C1917`, `#292524`), Warm Ochre/Terracotta accents (`#C2410C`, `#B45309`, `#0D9488` for community impact).
- **Dark Mode**: Rich Espresso/Onyx (`#121110`, `#1C1917`) with crisp muted border tokens (`#2E2A27`), high-contrast body text (`#E7E5E4`).
- **Borders & Radii**: Shadcn-style refined subtle borders (`1px solid var(--border)`), elegant radius scale (`sm: 6px`, `md: 10px`, `lg: 14px`). Avoid oversized rounded-3xl pills for regular rectangular content cards.
- **Elevation**: Rely on clean structural borders and subtle ambient micro-shadows (`box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)`), never muddy multi-layered glowing drop-shadows.

## 2. Component System (DaisyUI + Shadcn Synergy)
- **DaisyUI Semantic Themes**: Support light, dark, and warm sepia themes with semantic tokens (`--b1`, `--b2`, `--p`, `--bc`).
- **Shadcn Structural Anatomy**: Clear separation between `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.
- **Badge Chips**: Compact, purposeful pill tags with distinct semantic categories (e.g., E-Commerce, Government/Public Sector, Hospitality, Hard Skills, Soft Skills).
- **Interactive Details**: Clean tabs for switching views (Overview / Timeline / Case Studies / Interactive Storybook preview / Printable CV).

