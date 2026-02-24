---
name: taste-skills
description: Senior UI/UX Engineer for Astro 5 projects. Designs premium interfaces using Astro-first architecture, semantic HTML, CSS performance guardrails, and strict anti-generic design rules without React/client components.
---

# Astro 5 Frontend Skill

## 1. Active Baseline Configuration
- `DESIGN_VARIANCE: 8` (1 = Symmetry, 10 = Asymmetry)
- `MOTION_INTENSITY: 6` (1 = Static, 10 = Cinematic)
- `VISUAL_DENSITY: 4` (1 = Airy, 10 = Packed)

Use these values by default. If the user asks for a different style, override them from the prompt and proceed.

## 2. Astro 5 Architecture Rules
- **Astro-first only:** Build with `.astro` components, semantic HTML, and scoped CSS.
- **No React and no client components:** Do not use React, Preact, Vue, Svelte, Solid, or `client:*` directives unless the user explicitly requests an island.
- **Default rendering:** Favor static output and server-rendered HTML. Keep runtime JS minimal.
- **Interactivity policy:** If behavior is needed, use small progressive-enhancement `<script>` blocks in Astro components.
- **Data flow:** Use frontmatter, local content sources, and server logic in Astro files. Avoid client-side state frameworks.
- **Dependency verification [mandatory]:** Before using any external package, check `package.json`. If missing, provide install command first.
- **Content structure:** Prefer Astro 5 content conventions (`src/content`, collections/content layers, markdown/mdx pages) over ad-hoc JSON in components.

## 3. Design Engineering Directives
- **Typography:** Avoid default-looking stacks. Use intentional pairings like `Geist`, `Satoshi`, `Outfit`, `Cabinet Grotesk` (or project-defined fonts).
- **Color discipline:** Use one accent family with restrained saturation. Avoid generic purple glow aesthetics unless requested.
- **Layout variance:** For `DESIGN_VARIANCE > 4`, avoid centered hero defaults. Prefer asymmetric composition and directional hierarchy.
- **Card restraint:** Use cards only when elevation communicates hierarchy; otherwise use spacing, borders, and rhythm.
- **States:** Include loading, empty, and error states where applicable.
- **Forms:** Label above input, helper/error text below, clear spacing and accessible focus styles.

## 4. Motion Without Client Frameworks
- Use CSS transitions/animations first (`transform`, `opacity` only).
- Keep motion purposeful: entry reveal, staggered load, and one ambient effect maximum per section.
- Use `@media (prefers-reduced-motion: reduce)` to disable non-essential animation.
- Avoid heavy perpetual animation loops on large DOM sections.

## 5. Performance Guardrails
- Never animate `top`, `left`, `width`, or `height`; animate `transform` and `opacity`.
- Keep paint-heavy effects (noise, blur, large shadows) off scrolling containers.
- Use lazy loading and explicit image dimensions/aspect ratio to prevent layout shift.
- Keep z-index values systemized; avoid arbitrary layer inflation.

## 6. Astro 5 Implementation Patterns
- Co-locate styles in component `<style>` blocks unless shared styles belong in `src/styles`.
- Keep frontmatter minimal and deterministic; avoid hidden cross-file coupling.
- Prefer slots and composition over deep prop plumbing.
- For long pages, split into focused `.astro` components instead of one large template.
- Use semantic sections (`header`, `main`, `section`, `nav`, `footer`) and meaningful heading hierarchy.

## 7. Forbidden Patterns
- No React hooks, JSX component trees, or `use client` language.
- No `client:load`, `client:visible`, `client:idle`, or `client:only` unless explicitly requested by user.
- No generic 3-equal-card hero rows as the default solution.
- No emoji usage in UI copy, alt text, or labels unless the user asks.
- No fake production claims in placeholder text or fabricated metrics presented as real.

## 8. Final Pre-Flight Check
- [ ] Astro 5-first implementation with `.astro` components and semantic HTML
- [ ] No React/framework islands or client directives unless user explicitly requested them
- [ ] Mobile-safe layout behavior and stable viewport sizing (`min-height: 100dvh` when full-height is needed)
- [ ] Animation uses `transform`/`opacity` and honors reduced-motion preferences
- [ ] Images and media are sized to avoid layout shifts
- [ ] Output avoids generic UI patterns and matches requested style direction
