# Tracking Plan

This document is the placeholder tracking plan for the proposal site. Nothing on this list is wired up at launch — each item is implementable as a follow-on task.

## Goals
1. Confirm GCT stakeholders are reading the proposal (not just landing on it).
2. Identify which products attract the most attention (per-product anchor scrolls).
3. Capture acceptance / contact submissions reliably.
4. Provide DSG / MVNE with weekly read-out for sales follow-up.

## Tools (placeholder)
- **Vercel Analytics** — free first-party page-view + Web Vitals. Toggle on in Vercel project settings; install `@vercel/analytics` and add `<Analytics />` to `app/layout.tsx`.
- **Google Analytics 4** — placeholder `NEXT_PUBLIC_GA_ID` env var. Inject via a `<Script>` tag in `layout.tsx` only when the env var is set.
- **PostHog (optional)** — for funnel + session replay if richer behavioural data is needed. Placeholder `NEXT_PUBLIC_POSTHOG_KEY`.

## Events to instrument
| Event | Where | Properties |
| --- | --- | --- |
| `page_view` | Site-wide (auto via Vercel/GA) | path, referrer |
| `section_in_view` | Hero, Overview, About, Products, DBOT, Acceptance, Contact | section_id |
| `product_in_view` | Each product card scroll into view | product_slug |
| `cta_click` | Hero & Header buttons | cta_label, target_section |
| `product_consultation_click` | Per-product "Request a Consultation" | product_slug |
| `acceptance_toggle` | Per-product checkbox | product_slug, selected (bool) |
| `acceptance_submit` | Acceptance section submit | product_slugs[], count |
| `contact_submit` | Contact form submit | email_domain (no PII) |

## Form submissions
At launch, both forms are visual only.

When backend is wired (M3 / M4 in `SCOPE.md`):
- `POST /api/accept` → email + Slack notification + write to CRM (HubSpot/Pipedrive).
- `POST /api/contact` → same destinations as `/api/accept`, with shorter routing.
- On success, fire `acceptance_submit` / `contact_submit` events.
- Server logs every submission with a redacted payload (no full message body) for audit.

## Conversion goals (placeholder)
| Goal | Definition |
| --- | --- |
| **Engaged read** | ≥ 60s session AND scrolled past Products section. |
| **Product interest** | ≥ 1 `product_in_view` for a non-DBOT product. |
| **Consultation request** | `product_consultation_click` OR `contact_submit`. |
| **Acceptance** | `acceptance_submit` with ≥ 1 product selected. |

These goals translate directly into GA4 conversions and PostHog funnels.

## Privacy
- **No PII in event properties.** Emails are reduced to domain only before being sent to analytics.
- Cookie banner is **not** required at launch (no third-party cookies enabled by default in Vercel Analytics). Add a banner if GA4 is enabled and the audience includes EU traffic.
