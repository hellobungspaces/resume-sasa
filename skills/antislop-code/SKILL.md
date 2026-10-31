---
name: antislop-code
description: Enforces lightweight, maintainable, zero-bloat code architecture.
---

# Anti-Slop Code Standards

## Principles
1. **Zero Unnecessary Dependencies**: Avoid multi-megabyte bundle dependencies for tasks that modern standard Web APIs and CSS handle natively.
2. **Modular Architecture**: Separate data/translations (`data/content.js`), UI layout (`index.html`), design tokens & styles (`css/style.css`), and lightweight reactive interactions (`js/main.js`).
3. **No Dead or Commented-Out Boilerplate**: Every line of code has a clear purpose.
4. **Instant Performance**: Zero-CLS, sub-100ms load time, 100/100 Lighthouse standard on performance, accessibility, best practices, and SEO.

