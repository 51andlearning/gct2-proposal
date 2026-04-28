# Structure

## Folder layout

```
gct2-proposal/
├── docs/                       Project documentation (this folder)
├── public/
│   └── images/                 Brand & product imagery (added in M2)
├── src/
│   ├── app/
│   │   ├── layout.tsx          Root layout — html/body, fonts, metadata
│   │   ├── page.tsx            Home — composes section components
│   │   ├── globals.css         Tailwind v4 + shadcn theme tokens
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/                 shadcn primitives (button, card, badge, ...)
│   │   └── sections/           One file per page section
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── Overview.tsx
│   │       ├── AboutDSG.tsx
│   │       ├── Products.tsx
│   │       ├── DBOT.tsx
│   │       ├── Acceptance.tsx  (client component — local state)
│   │       ├── Contact.tsx     (client component — local state)
│   │       └── Footer.tsx
│   ├── content/
│   │   └── proposal.ts         Single source of truth for all proposal copy & pricing
│   └── lib/
│       └── utils.ts            shadcn cn() helper
├── components.json             shadcn config
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Section composition rules
1. **One file per section** under `src/components/sections/`. The home page (`src/app/page.tsx`) imports and composes them in order — that file is the visual table of contents for the whole site.
2. **Server components by default**. Only `Acceptance.tsx` and `Contact.tsx` are `"use client"` because they hold form state.
3. **Anchors are stable**. Every section has an `id` (`#overview`, `#products`, `#dbot`, `#acceptance`, `#contact`) and every product card has `id={p.slug}`. These are referenced from `navLinks` and from the per-product CTAs in the data file — never hard-coded in components.
4. **Visual hierarchy** uses Tailwind v4 tokens (`bg-background`, `text-muted-foreground`, `border-border`) plus `font-heading` from the shadcn theme. Don't add bespoke colours — extend the theme in `globals.css` instead.
5. **shadcn primitives only** for interactive elements (Button, Card, Badge, Separator, etc.). Don't reach for raw `<button>` / `<div>` styled blocks for repeating UI.

## Content management approach
- **All copy and pricing lives in `src/content/proposal.ts`** — a single TypeScript module exporting strongly-typed constants (`hero`, `overview`, `divisions`, `products`, `dbotPhases`, `acceptance`, `contact`, `footer`).
- Section components are presentational — they read from the data module and do not embed strings.
- To change copy or pricing: edit `src/content/proposal.ts` and open a PR. No CMS or backend round-trip needed at launch.
- Pricing changes must be cross-checked against the source pricing spreadsheets:
  - `Bitdefender Commercials.xlsx`
  - `Travel eSIM Pricing Model.xlsx`
  - `Client MVNO PWA Support - Pricing Model V4.xlsx`
- The `Product` type in `proposal.ts` enforces the structure of every product card. Add a new product by appending to the `products` array — the Products and Acceptance sections will pick it up automatically.

## Why this structure
- **Single source of truth** for content avoids drift between the home page, the acceptance checklist, and any future marketing surfaces.
- **Section-per-file** lets non-engineers find and edit a section without scanning the whole page.
- **Server-first, client-only-where-needed** keeps the bundle small and the page fast on first paint.
