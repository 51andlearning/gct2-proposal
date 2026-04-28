# Project Overview

## What this site is
This is the proposal site for the **DSG & MVNE Product Suite 2026+**, presented to **GCT Group** (Nigeria). It is a single-page, scroll-based proposal with deep sections covering:

- A nine-product catalogue (DBOT, MVNO PWA, Travel eSIM, CXG, Xanite CVM, PersAIc, Bitdefender, MARS, VMS).
- The DBOT (Design — Build & Operate — Transfer) transformation programme.
- Acceptance / sign-off flow (per-product checkboxes + dual-party signature blocks).
- Contact form to reach the DSG / MVNE team.

It replaces the v1 proposal at https://gct1.vercel.app/ with updated commercial terms aligned to:

- `Bitdefender Commercials.xlsx` — Bitdefender Standard Pricing & Margin Calculator.
- `Travel eSIM Pricing Model.xlsx` — eSIM ARPU, attach-rate scenarios and **10% revenue share to GCT** (changed from 50/50 in v1).
- `Client MVNO PWA Support - Pricing Model V4.xlsx` — PWA setup spread over 6 months + monthly support / dev retainers.

## Target audience
- **Primary**: GCT Group executive sponsors and decision-makers reviewing the 2026 product suite.
- **Secondary**: GCT product / commercial / legal teams scoring individual products and preparing the SoW(s).

The site is intentionally read-then-act: every section is informational up until the Acceptance section, which captures intent.

## Deployment environment
- **Framework**: Next.js (App Router) on Vercel.
- **Runtime**: Vercel Edge / Node serverless — no custom infra.
- **Domain**: Vercel project URL initially (`gct2-proposal.vercel.app`); custom domain optional.
- **Build**: `pnpm build`, output handled by Vercel.

## Owner
- **Commercial owner**: DSG / MVNE — Edward W. (`edwardw@mvne.co.za`, `+27 76 370 7340`).
- **Site owner**: DSG digital team. Source of truth for content is `src/content/proposal.ts`.

## Decision deadline
**8 May 2026** — to keep the DBOT programme on track for 2026 GTM.
