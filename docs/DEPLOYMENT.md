# Deployment

## Stack
- **Framework**: Next.js (App Router), TypeScript.
- **Styling**: Tailwind CSS v4 + shadcn (Nova preset, Base UI primitives).
- **Package manager**: pnpm.
- **Host**: Vercel.

## Local development
```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build (TypeScript-checked)
pnpm start        # serve the production build
pnpm lint         # eslint
```

## GitHub repo setup
1. Create a new GitHub repo (e.g. `gct2-proposal`).
2. From the project root:
   ```bash
   git remote add origin git@github.com:<org>/gct2-proposal.git
   git push -u origin main
   ```
3. Protect `main` (require PRs + 1 review + green checks).

## Vercel project setup
1. Import the GitHub repo into Vercel.
2. **Framework preset**: Next.js (auto-detected).
3. **Root directory**: project root (the directory containing `package.json`).
4. **Build command**: `pnpm build` (default).
5. **Install command**: `pnpm install` (default).
6. **Output directory**: leave blank — Vercel handles this for Next.js.
7. **Node version**: 20.x or later.

There is **no `vercel.json`** in the repo. Vercel's defaults are sufficient.

## Environment variables
At launch the site does not require any env vars. Placeholders for follow-on work (see `TRACKING_PLAN.md` and `SCOPE.md`):

| Variable | Used by | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | Layout — GA4 script | Optional; absent ⇒ no GA injection. |
| `NEXT_PUBLIC_POSTHOG_KEY` | Layout — PostHog | Optional. |
| `CONTACT_WEBHOOK_URL` | `/api/contact` (M3) | Slack / Zapier webhook. |
| `ACCEPTANCE_WEBHOOK_URL` | `/api/accept` (M3) | Slack / Zapier webhook. |
| `RESEND_API_KEY` | `/api/contact`, `/api/accept` (M3) | Or any other transactional email provider. |

Add these in Vercel → Project → Settings → Environment Variables. Use the same name in **Preview** and **Production** unless intentionally different.

## How to redeploy
- **Auto deploys**: every push to `main` triggers a Production deploy; every PR gets a Preview deploy with its own URL.
- **Manual redeploy**:
  1. Vercel dashboard → project → Deployments → pick a recent successful build → "Redeploy".
  2. Use this when re-triggering with new env vars without a code change.
- **Rollback**: Deployments → previous successful deploy → "Promote to Production".

## Custom domain (optional)
1. Vercel → Project → Settings → Domains → add `proposal.dsg.example` (or similar).
2. Update DNS as instructed (CNAME or A record).
3. Vercel auto-provisions the SSL certificate.

## Checks before sharing the URL with GCT
- [ ] `pnpm build` is green locally.
- [ ] All commercial figures in `src/content/proposal.ts` match the latest pricing spreadsheets.
- [ ] Decision deadline is current (`company.decisionDeadline`).
- [ ] Contact email and phone are current (`company.contact`).
- [ ] Vercel preview URL has been smoke-tested on desktop and mobile.
- [ ] Vercel production deploy is on the `main` branch tip.
