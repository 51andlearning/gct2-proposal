export const company = {
  name: "Digital Solutions Group (Pty) Ltd",
  shortName: "DSG",
  partner: "MVNE",
  client: "GCT Group",
  proposalTitle: "GCT Group DSG & MVNE Product Suite 2026+",
  year: "2026",
  decisionDeadline: "8 May 2026",
  contact: {
    email: "edwardw@mvne.co.za",
    phone: "+27 76 370 7340",
    site: "www.mvne.co.za",
  },
};

export const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "About DSG", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

export const hero = {
  eyebrow: "Confidential · For GCT Group Executive & Board Review",
  titleLine1: "GCT Group",
  titleLine2: "DSG & MVNE Product Suite 2026+",
  subtitle:
    "A curated suite of proven digital products and transformation services to position GCT Group as Nigeria's first fully converged, cloud-enabled digital telecoms provider.",
  ctas: [
    { label: "Accept Proposals", href: "#acceptance", variant: "default" as const },
    { label: "View Products", href: "#products", variant: "secondary" as const },
  ],
};

export const overview = {
  title: "Overview",
  paragraphs: [
    "DSG and MVNE are pleased to present a comprehensive partnership proposal to GCT Group, designed to unlock fixed-mobile convergence, accelerate digital transformation and create new revenue streams across enterprise, SME and residential segments.",
    "This proposal outlines a curated suite of nine proven products and services — from a full Design-Build-Operate-Transfer (DBOT) MVNO transformation, to ready-to-launch digital products such as Travel eSIM, MVNO PWA, CXG, Xanite CVM, PersAIc, Bitdefender, MARS and VMS.",
    "Each product is offered on commercial terms aligned to GCT's launch profile, with revenue-share or low-CAPEX structures wherever possible to keep risk asymmetric in GCT's favour.",
  ],
};

export const divisions = [
  {
    name: "MVNE",
    tagline: "Mobile Virtual Network Enabler",
    description:
      "Carrier-grade BSS/OSS, billing, provisioning and orchestration platform powering MVNOs across Africa.",
    site: "mvne.co.za",
  },
  {
    name: "CXG",
    tagline: "Customer Experience Group",
    description:
      "Omni-channel customer support, contact centre, AI agents and self-service for telco and digital businesses.",
    site: "cxg.co.za",
  },
  {
    name: "Digitalise",
    tagline: "Design & Development Studio",
    description:
      "Product design, web, mobile and PWA build studio specialising in digital telco and customer-facing apps.",
    site: "digitalise.co.za",
  },
  {
    name: "BroadBrand",
    tagline: "AI-Driven Mobile Media Marketing",
    description:
      "AI-powered mobile media, advertising and marketing automation that turns subscribers into measurable revenue.",
    site: "broadbrand.co.za",
  },
  {
    name: "digitalmall.com",
    tagline: "E-Commerce Platform",
    description:
      "Plug-and-play marketplace and digital storefront platform for telco bundles, devices and digital goods.",
    site: "digitalmall.com",
  },
  {
    name: "Digital Resilience",
    tagline: "Cybersecurity Services",
    description:
      "Managed security, threat detection and resilience services for telecom operators and enterprise clients.",
    site: "digitalresilience.co.za",
  },
];

export type Product = {
  number: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  headlinePrice: string;
  headlinePriceNote: string;
  features: string[];
  outcomes: string[];
  pricing: { label: string; value: string; note?: string }[];
  pricingNote?: string;
  cta?: { label: string; href: string };
};

export const products: Product[] = [
  {
    number: "01",
    slug: "dbot",
    name: "DBOT Transformation",
    shortName: "DBOT",
    tagline: "Design — Build & Operate — Transfer",
    description:
      "A nine-month, end-to-end MVNO transformation programme that delivers a launched, operating MVNO and transfers it back to GCT with a 60-month business plan and full operating model.",
    headlinePrice: "$250,000",
    headlinePriceNote: "fixed fee · 9 months",
    features: [
      "Design phase (8 weeks): strategy, business model, GTM, target operating model",
      "Build & Operate phase (6 months): Transformation Project Office, MVP launch, integrated CX journeys",
      "Transfer phase (1 month): knowledge handoff, run-book, independence certification",
      "Asset-light expansion — no spectrum CAPEX required",
      "Fixed-mobile convergence bundling and enterprise / SME / residential cross-sell",
    ],
    outcomes: [
      "Launched MVNO MVP with active subscribers",
      "Approved 60-month business plan",
      "Integrated customer experience across web, app, USSD and contact centre",
      "Trained GCT team operating the platform independently",
    ],
    pricing: [
      { label: "Total programme fee", value: "$250,000 USD" },
      { label: "Duration", value: "9 months" },
      { label: "Payment", value: "Milestone-based across the three phases" },
    ],
    pricingNote:
      "Decision deadline: 8 May 2026 to keep the launch on track for 2026 GTM.",
    cta: { label: "Request a Consultation", href: "#contact" },
  },
  {
    number: "02",
    slug: "mvno-pwa",
    name: "MVNO PWA Platform",
    shortName: "MVNO PWA",
    tagline: "Self-service PWA + ongoing Tier 3 support & development",
    description:
      "A branded Progressive Web App for GCT subscribers — self-service, top-ups, bundles, KYC, account management — built on the MVNE platform with on-going Tier 3 support and a guaranteed development backlog.",
    headlinePrice: "$12,507",
    headlinePriceNote: "setup over 6 months + $4,250/month",
    features: [
      "Branded PWA with self-service, top-up, bundle and KYC flows",
      "Tier 3 support — 40 hours per month included",
      "Product development — 10 hours per month included",
      "Continuous deployment, observability and SLA reporting",
      "Setup fee billed monthly across the first 6 months (no longer once-off)",
    ],
    outcomes: [
      "Branded subscriber app live within the build window",
      "Predictable monthly run-rate for support & enhancements",
      "Faster cycle time on new bundles, promotions and journeys",
    ],
    pricing: [
      { label: "Setup & development", value: "$12,507 USD", note: "Billed as 6 × $2,084.50/month" },
      { label: "Tier 3 Support (40 hrs/mo)", value: "$3,250 USD / month" },
      { label: "Development (10 hrs/mo)", value: "$1,000 USD / month" },
      { label: "Months 1–6 total", value: "$6,334.50 USD / month" },
      { label: "Month 7 onwards", value: "$4,250 USD / month" },
      { label: "Year 1 total", value: "$63,507 USD" },
      { label: "Years 2–5 (each)", value: "$51,000 USD" },
      { label: "5-year total", value: "$267,507 USD" },
    ],
    pricingNote:
      "Source: Client MVNO PWA Support — Pricing Model (MVNE 20260223 v2). Setup spread across 6 monthly payments instead of once-off.",
  },
  {
    number: "03",
    slug: "travel-esim",
    name: "Travel eSIM Platform",
    shortName: "Travel eSIM",
    tagline: "Outbound roaming eSIM, branded for GCT",
    description:
      "A turnkey, app-driven Travel eSIM proposition for GCT's outbound travellers — instant activation, transparent bundles and a recurring revenue share back to GCT.",
    headlinePrice: "$3,200",
    headlinePriceNote: "setup + 10% revenue share to GCT",
    features: [
      "Branded eSIM purchase and activation inside the GCT app or PWA",
      "5GB and 2.5GB bundles at $18.07 and $9.035 ARPU respectively (30% margin)",
      "Coverage across the top 20 outbound destinations (rates ex VAT)",
      "Once-off setup billed monthly across 6 months (no longer once-off)",
      "10% of MVNE Net to GCT on every activation",
    ],
    outcomes: [
      "New roaming revenue line with no roaming partner negotiation",
      "Improved CX for travelling subscribers vs. legacy IDD roaming",
      "Up to ~535K base-case activations p.a. by Year 5 against GCT's outbound travel base",
    ],
    pricing: [
      { label: "Once-off setup", value: "$3,200 USD", note: "Billed as 6 × $533.33/month" },
      { label: "5GB bundle", value: "$18.07 USD ARPU", note: "30% net margin (ex VAT)" },
      { label: "2.5GB bundle", value: "$9.035 USD ARPU", note: "30% net margin (ex VAT)" },
      { label: "Revenue share to GCT", value: "10% of MVNE Net" },
      { label: "Target market (2026 → 2030)", value: "5.5M → 6.7M outbound travellers" },
      { label: "Base-case attach rate", value: "3% Yr 1 → 8% Yr 5" },
    ],
    pricingNote:
      "Source: Travel eSIM Pricing Model — Model Parameters (ex VAT). Worse-case attach 2%–4.5%, base 3%–8%, best 5%–12%.",
  },
  {
    number: "04",
    slug: "cxg",
    name: "CXG",
    shortName: "CXG",
    tagline: "Omni-channel customer experience",
    description:
      "Outsourced or co-managed customer experience operation — voice, chat, social, AI agents, ticketing and quality — built specifically for telco and digital subscribers.",
    headlinePrice: "Custom",
    headlinePriceNote: "based on requirements",
    features: [
      "Omni-channel: voice, WhatsApp, web chat, email, social",
      "AI agents and assisted-agent workflows",
      "Quality, WFM, knowledge management and analytics",
      "Custom SLA tiers per channel and segment",
    ],
    outcomes: [
      "Lower cost-to-serve per subscriber",
      "Higher CSAT/NPS and first-contact resolution",
      "Faster scale-up at GTM",
    ],
    pricing: [
      { label: "Pricing", value: "Custom per channel & SLA" },
      { label: "Engagement", value: "Monthly retainer + per-interaction fees" },
    ],
    cta: { label: "Request a Consultation", href: "#contact" },
  },
  {
    number: "05",
    slug: "xanite-cvm",
    name: "Xanite CVM",
    shortName: "Xanite CVM",
    tagline: "Customer Value Management",
    description:
      "Real-time CVM platform for personalised offers, churn prediction and base-management campaigns across the subscriber lifecycle.",
    headlinePrice: "Custom",
    headlinePriceNote: "platform licence",
    features: [
      "Real-time event-driven campaign engine",
      "Churn, upsell and next-best-offer ML models",
      "A/B testing, control groups and uplift measurement",
      "Out-of-the-box telco use-case library",
    ],
    outcomes: [
      "Measurable ARPU uplift and churn reduction",
      "Higher offer relevance and lower fatigue",
      "Single base-management cockpit",
    ],
    pricing: [
      { label: "Licensing", value: "Custom per subscriber base" },
      { label: "Implementation", value: "Quoted on requirements" },
    ],
    cta: { label: "Request a Consultation", href: "#contact" },
  },
  {
    number: "06",
    slug: "persaic",
    name: "PersAIc",
    shortName: "PersAIc",
    tagline: "AI personalisation, per subscriber",
    description:
      "Subscriber-level AI personalisation layer — content, offers, and journeys tailored to each customer in real time.",
    headlinePrice: "Custom",
    headlinePriceNote: "per-subscriber model",
    features: [
      "Per-subscriber model serving and feature store",
      "Real-time personalisation across app, PWA, USSD and CRM",
      "Privacy-aware, on-platform inference",
      "Integrated with Xanite CVM and CXG",
    ],
    outcomes: [
      "Higher conversion on offers and bundles",
      "Lower opt-out and complaint rates",
      "Continuous learning loop with measurable lift",
    ],
    pricing: [
      { label: "Commercial model", value: "Per-subscriber, per month" },
      { label: "Minimum term", value: "12 months" },
    ],
    cta: { label: "Request a Consultation", href: "#contact" },
  },
  {
    number: "07",
    slug: "bitdefender",
    name: "Bitdefender Cyber-Protection",
    shortName: "Bitdefender",
    tagline: "Subscriber cyber-protection bundles",
    description:
      "White-label Bitdefender security products — for 1, 5 or 10 devices — that GCT can sell to subscribers as a digital add-on, with optional Digital Identity Protection (DIP), Dark-Web Monitoring (DWM) and VPN.",
    headlinePrice: "$2,500 setup",
    headlinePriceNote: "+ per-device monthly · 60% margin",
    features: [
      "BD Security w/DIP — 1, 5 or 10 device tiers",
      "BD Security w/DWM & VPN — 1, 5 or 10 device tiers",
      "Pay-as-you-go pricing — no minimum commitments",
      "Dashboard activation & set-up billed monthly across the first 6 months",
      "60% net margin to GCT on retail",
    ],
    outcomes: [
      "New digital revenue line on existing subscriber base",
      "Improved retention through stickier add-ons",
      "Differentiated security proposition in market",
    ],
    pricing: [
      { label: "Setup (Dashboard activation)", value: "$2,500 USD", note: "Billed as 6 × $416.67/month" },
      { label: "BD Security w/DIP — 1 device", value: "$1.350 USD / month", note: "ZAR 22.815 / month" },
      { label: "BD Security w/DIP — 5 devices", value: "$2.975 USD / month", note: "ZAR 50.2775 / month" },
      { label: "BD Security w/DIP — 10 devices", value: "$4.250 USD / month", note: "ZAR 71.825 / month" },
      { label: "w/DWM & VPN — 1 device", value: "$2.300 USD / month", note: "ZAR 38.870 / month" },
      { label: "w/DWM & VPN — 5 devices", value: "$3.925 USD / month", note: "ZAR 66.3325 / month" },
      { label: "w/DWM & VPN — 10 devices", value: "$6.525 USD / month", note: "ZAR 110.2725 / month" },
    ],
    pricingNote:
      "Source: Bitdefender Commercials — Standard Pricing & Margin Calculator. Pay-as-you-go, no minimum commitments. 60% net margin to client. ROE 16.9 ZAR/USD. International pricing identical (USD only).",
  },
  {
    number: "08",
    slug: "mars",
    name: "MARS",
    shortName: "MARS",
    tagline: "Multi-channel Agent & Reseller System",
    description:
      "Agent, reseller and dealer management system — onboarding, provisioning, commissions and field force tooling for GCT's distribution.",
    headlinePrice: "Custom",
    headlinePriceNote: "pricing on request",
    features: [
      "Agent & reseller onboarding with KYC",
      "Real-time commissions and reconciliation",
      "Mobile field-force app and territory management",
      "Stock, voucher and SIM lifecycle management",
    ],
    outcomes: [
      "Faster channel activation and payouts",
      "Lower fraud and reconciliation errors",
      "Single view of distribution performance",
    ],
    pricing: [
      { label: "Pricing", value: "Custom per channel scale" },
      { label: "Implementation", value: "Quoted on requirements" },
    ],
    cta: { label: "Request a Consultation", href: "#contact" },
  },
  {
    number: "09",
    slug: "vms",
    name: "VMS",
    shortName: "VMS",
    tagline: "Voucher Management System",
    description:
      "End-to-end voucher and recharge management — secure generation, distribution, redemption and reporting across GCT's channels.",
    headlinePrice: "Custom",
    headlinePriceNote: "based on voucher volume",
    features: [
      "Secure voucher generation and lifecycle management",
      "Multi-channel distribution (USSD, PWA, retail)",
      "Real-time redemption and reconciliation",
      "Fraud detection and audit trails",
    ],
    outcomes: [
      "Lower voucher fraud and leakage",
      "Faster channel reconciliation",
      "Single voucher cockpit for finance and ops",
    ],
    pricing: [
      { label: "Pricing", value: "Custom per voucher volume" },
      { label: "Implementation", value: "Quoted on requirements" },
    ],
    cta: { label: "Request a Consultation", href: "#contact" },
  },
];

export const dbotPhases = [
  {
    phase: "Phase 1 — Design",
    duration: "8 weeks",
    summary:
      "Strategic planning, business model, GTM strategy and target operating model.",
    deliverables: [
      "MVNO strategy & business case",
      "Target operating model & org design",
      "GTM strategy and pricing architecture",
      "60-month business plan",
    ],
  },
  {
    phase: "Phase 2 — Build & Operate",
    duration: "6 months",
    summary:
      "Implementation through the joint Transformation Project Office — MVP build, launch and steady-state operation.",
    deliverables: [
      "Configured MVNE platform & integrations",
      "Branded subscriber PWA and channels",
      "Integrated customer experience journeys",
      "MVP go-live and active subscribers",
    ],
  },
  {
    phase: "Phase 3 — Transfer",
    duration: "1 month",
    summary:
      "Knowledge handoff, run-book documentation and independence certification to GCT teams.",
    deliverables: [
      "Operational run-books and SOPs",
      "GCT team training & sign-off",
      "Independence certification",
      "Post-launch support model",
    ],
  },
];

export const acceptance = {
  title: "Accept Proposals",
  intro:
    "Select the products GCT wishes to take forward. The acceptance below covers commercial intent — full SoW(s) will be issued for each accepted product.",
  signatories: [
    {
      party: "DSG & MVNE",
      role: "Authorised representative",
    },
    {
      party: "GCT Group",
      role: "Authorised representative",
    },
  ],
};

export const contact = {
  title: "Contact Us",
  intro:
    "Send us a message and the DSG / MVNE team will respond within one business day.",
};

export const footer = {
  copyright: `© ${company.year} ${company.name}`,
  confidentiality:
    "Confidential — for the named recipients at GCT Group only. Not for re-distribution.",
};
