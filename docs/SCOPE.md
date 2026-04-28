# Scope

## Pages included
- `/` — single-page proposal with section anchors for Overview, About DSG, Products, DBOT, Acceptance and Contact.

There are no additional routes at launch. Anchor links (`#overview`, `#products`, `#dbot`, `#acceptance`, `#contact`, plus per-product slugs like `#dbot`, `#mvno-pwa`, `#travel-esim`, etc.) drive navigation.

## Sections included
1. **Header** — sticky nav with Overview / About DSG / Products / Contact + Accept Proposals / View Products CTAs.
2. **Hero** — proposal title, subtitle, CTAs and decision-deadline strip.
3. **Overview** — three-paragraph framing of the partnership.
4. **About DSG** — six division cards (MVNE, CXG, Digitalise, BroadBrand, digitalmall.com, Digital Resilience).
5. **Products** — nine product cards, each with description, key features, commercial terms and (where relevant) Request a Consultation CTA.
6. **DBOT** — the three-phase Design / Build & Operate / Transfer programme on a dark inverted band.
7. **Acceptance** — per-product checkboxes (count of selected), dual-party signature blocks, submit button.
8. **Contact** — contact details + send-message form (no backend at launch).
9. **Footer** — copyright, confidentiality notice, contact line.

## What is excluded
- **No backend / persistence** — Acceptance and Contact forms are visual only; submissions display a confirmation in-page. A serverless route handler (`/api/accept`, `/api/contact`) is a Phase 2 task.
- **No CMS** — content lives in `src/content/proposal.ts`. Editing is via a PR.
- **No authentication or per-recipient links** — the proposal is shared by URL.
- **No analytics** beyond Vercel Analytics (see `TRACKING_PLAN.md`).
- **No internationalisation** — single English locale.
- **No PDF export** — the proposal is web-only at launch.

## Launch milestones
1. **M0 — Scaffold** *(this commit)*: Next.js 16 + Tailwind v4 + shadcn primitives, all sections present, build green.
2. **M1 — Content review**: DSG review of pricing copy, decision deadline, contact details. Issue: `content-review`.
3. **M2 — Visual polish**: brand colours, typography, division logos, product imagery in `public/images/`.
4. **M3 — Backend wiring**: route handlers for Acceptance + Contact (write to email / Slack / CRM webhook).
5. **M4 — Analytics & tracking**: GA + Vercel Analytics + form-submission events (`TRACKING_PLAN.md`).
6. **M5 — GCT review window**: site shared with GCT, decision deadline 8 May 2026.
