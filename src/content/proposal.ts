// =============================================================================
// Proposal content — copy and structure replicate gct1.vercel.app
// Pricing fields are the only divergence: per the latest spreadsheets,
// set-up fees are now framed as minimum monthly commitments for months 1–6.
// =============================================================================

export const company = {
  name: "Digital Solutions Group (Pty) Ltd",
  shortName: "DSG",
  partner: "MVNE",
  client: "GCT Group",
  proposalTitle: "GCT Group | DSG & MVNE Product Suite 2026+",
  year: "2026",
  decisionDeadline: "8 May 2026",
  contact: {
    email: "edwardw@mvne.co.za",
    phone: "+27 76 370 7340",
    site: "www.mvne.co.za",
  },
  altContact: {
    email: "hugom@mvne.co.za",
    phone: "+27 861 37 4374",
  },
};

export const navLinks = [
  { label: "Overview", href: "#top" },
  { label: "About DSG", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

export const hero = {
  eyebrow: "Confidential · For GCT Group Executive & Board Review",
  titleLine1: "GCT Group",
  titleLine2: "DSG & MVNE Product Suite",
  titleLine3: "2026+",
  subtitle:
    "A curated suite of proven digital products and transformation services to position GCT Group as Nigeria's first fully converged, cloud-enabled digital telecoms provider.",
  ctas: [
    { label: "Accept Proposals", href: "#acceptance", variant: "default" as const },
    { label: "View Products", href: "#products", variant: "secondary" as const },
  ],
};

export const overview = {
  title: "About DSG",
  eyebrow: "Digital Solutions Group",
  intro:
    "DSG is a multi-divisional digital solutions group headquartered in Johannesburg, South Africa — partnering with businesses across Africa to build the connected, digital-first enterprises of tomorrow.",
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
      "MVNE powers mobile virtual network operators across Africa, providing the full stack of platform services, ecosystem management, and value-added solutions needed to launch and run a successful MVNO.",
    features: [
      "MVNO Platform & BSS/OSS",
      "Travel eSIM & eSIM Management",
      "Loyalty & Rewards Programs",
      "Device Financing",
      "Value-Added Services (VAS)",
      "Revenue Assurance",
    ],
    site: "www.mvne.co.za",
  },
  {
    name: "CXG",
    tagline: "Customer Experience Group",
    description:
      "CXG delivers world-class omni-channel customer experience services — combining human expertise with intelligent technology to build lasting customer relationships at every touchpoint.",
    features: [
      "Omni-channel Contact Centre",
      "WhatsApp, SMS & Email Support",
      "Social Media Management",
      "CRM & Customer Data",
      "Business Intelligence & Reporting",
      "Customer Lifecycle Management",
    ],
    site: "www.dsg.co.za",
  },
  {
    name: "Digitalise",
    tagline: "Design & Development Studio",
    description:
      "Digitalise is DSG's creative and technical engine — transforming business ideas into polished digital products. From strategy through to code, Digitalise builds the platforms and experiences that power modern digital operators.",
    features: [
      "Web & App Development",
      "Progressive Web Apps (PWA)",
      "Digital Transformation Strategy",
      "UX / UI Design",
      "Social CRM Integration",
      "API & Platform Integration",
    ],
    site: "www.dsg.co.za",
  },
  {
    name: "BroadBrand",
    tagline: "AI-Driven Mobile Media Marketing",
    description:
      "BroadBrand combines AI-powered marketing automation with deep mobile expertise to help telecoms brands grow subscriber bases, reduce churn, and maximise customer lifetime value through intelligent, data-led campaigns.",
    features: [
      "Xanite CVM Platform",
      "AI Campaign Automation",
      "SEO / SEM & Paid Media",
      "Analytics & Reporting",
      "Subscriber Growth Strategy",
      "Churn Reduction Programs",
    ],
    site: "www.dsg.co.za",
  },
  {
    name: "digitalmall.com",
    tagline: "Turnkey E-Commerce Platform",
    description:
      "digitalmall.com enables telecoms operators and enterprises to launch branded online stores quickly and cost-effectively — selling devices, SIMs, bundles, and accessories without the complexity of building custom e-commerce infrastructure.",
    features: [
      "Branded Online Storefront",
      "Device & SIM Sales",
      "Bundle & Top-up Commerce",
      "Payment Gateway Integration",
      "Order Management & Fulfilment",
      "Rapid Deployment — No Dev Required",
    ],
    site: "www.digitalmall.com",
  },
  {
    name: "Digital Resilience",
    tagline: "Managed Cybersecurity Services",
    description:
      "Digital Resilience protects businesses and their customers from evolving digital threats — delivering enterprise-grade cybersecurity as a managed service, combined with consumer-facing security products for MVNOs.",
    features: [
      "Managed Security Services",
      "McAfee Consumer Security",
      "eInsurer Cyber Insurance",
      "Identity Theft Protection",
      "Security Awareness Training",
      "Incident Response",
    ],
    site: "www.dsg.co.za",
  },
];

// -----------------------------------------------------------------------------
// Products
// -----------------------------------------------------------------------------

export type ProductSection =
  | { kind: "features"; heading: string; bullets: string[] }
  | { kind: "stats"; cards: { value: string; label: string }[] }
  | {
      kind: "cardgrid";
      heading: string;
      cards: { title: string; body: string; icon?: string }[];
    }
  | {
      kind: "table";
      heading?: string;
      headers: string[];
      rows: string[][];
      footnote?: string;
    }
  | { kind: "paragraph"; heading?: string; body: string };

export type Product = {
  number: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  cardDescription: string;
  description: string;
  headlinePrice: string;
  headlinePriceNote: string;
  features: string[];
  outcomes: string[];
  pricing: { label: string; value: string; note?: string }[];
  pricingNote?: string;
  sections?: ProductSection[];
  cta?: { label: string; href: string };
};

export const products: Product[] = [
  // -------------------------------------------------------------------------
  {
    number: "01",
    slug: "dbot",
    name: "DBOT Transformation",
    shortName: "DBOT",
    tagline: "Design-Build-Operate-Transfer Partnership",
    cardDescription:
      "Design-Build-Operate-Transfer partnership to build Nigeria's first converged digital telco under GCT Group.",
    description:
      "GCT Group stands at a pivotal inflection point — transitioning from a traditional fibre ISP to Nigeria's first fully converged, cloud-enabled digital telecoms provider. DSG proposes a Design-Build-Operate-Transfer (DBOT) partnership delivering measurable outcomes across revenue, operations, and customer experience.",
    headlinePrice: "$250,000",
    headlinePriceNote: "fixed fee · 9 months",
    features: [
      "Design phase (8 weeks): Strategic Thinking Sessions, business model, GTM, target operating model",
      "Build & Operate phase (6 months): Transformation Project Office, MVP launch, integrated CX journeys",
      "Transfer phase (1 month): handover, governance, go-independent certification",
      "Asset-light expansion — no spectrum or RAN investment",
      "Fixed-mobile convergence bundling and enterprise / SME / residential cross-sell",
    ],
    outcomes: [
      "Launched MVNO MVP with active subscribers",
      "Approved 60-month business plan with ROI and break-even",
      "Integrated customer experience across web, app, USSD and contact centre",
      "Trained GCT team operating the platform independently",
    ],
    pricing: [
      { label: "Total programme fee", value: "$250,000 USD" },
      { label: "Programme duration", value: "9 months" },
      { label: "Phases", value: "Design · Build & Operate · Transfer" },
      { label: "Decision deadline", value: company.decisionDeadline },
    ],
    pricingNote:
      "Decision Required: Approval to commence the Design Phase by 8th May 2026 to keep the launch on track for 2026 GTM.",
    sections: [
      {
        kind: "stats",
        cards: [
          { value: "$ 250,000", label: "Fixed Investment" },
          { value: "9 Months", label: "Programme Duration" },
          { value: "3 Phases", label: "Design · Build · Transfer" },
          { value: "8 May 2026", label: "Decision Deadline" },
        ],
      },
      {
        kind: "cardgrid",
        heading: "What This Delivers",
        cards: [
          {
            title: "Revenue Growth",
            body: "Sustainable diversification through mobile bundling, IoT, and enterprise contracts layered onto the existing fibre base.",
          },
          {
            title: "Operational Efficiency",
            body: "Automation, digital process redesign, and a Transformation Project Office delivering discipline from day one.",
          },
          {
            title: "Customer Excellence",
            body: "Data-driven engagement and omnichannel experience building long-term customer loyalty and reduced churn.",
          },
        ],
      },
      {
        kind: "cardgrid",
        heading: "Why an MVNO Makes Strategic Sense for GCT",
        cards: [
          {
            title: "Fixed-Mobile Convergence",
            body: "Bundled Fibre + Mobile, shared data pools, unified billing, SIM-enabled backup for fibre outages — dramatically reducing churn.",
          },
          {
            title: "Enterprise & SME Upsell",
            body: "Corporate mobile fleets, IoT SIMs, M2M connectivity, LTE failover, and Closed User Groups to strengthen enterprise contracts.",
          },
          {
            title: "Residential Cross-Sell",
            body: "Family SIM packs, value-based mobile bundles, and loyalty rewards linked to fibre usage turning mobile into a retention tool.",
          },
          {
            title: "Asset-Light Expansion",
            body: "No spectrum or RAN investment. Leverage existing MNO networks (MTN, Airtel, Glo) while focusing on brand, billing, and CX.",
          },
        ],
      },
      {
        kind: "table",
        heading: "Competitive Differentiation",
        headers: ["Traditional MNO", "GCT Group MVNO Advantage"],
        rows: [
          ["Mobile-only", "Fixed + Mobile convergence"],
          ["Mass market", "Premium urban segment"],
          ["Generic bundles", "Converged smart home bundles"],
          ["Limited enterprise integration", "Full ICT + fibre + mobile integration"],
        ],
      },
      {
        kind: "table",
        heading: "DBOT Phases",
        headers: ["Phase", "Duration", "Business Value"],
        rows: [
          ["Design", "8 weeks", "Strategic clarity & commercial validation"],
          ["Build & Operate", "6 months", "Digital & operational enablement"],
          ["Transfer", "1 month", "Capability independence & scalability"],
          ["Total", "~9 months", "Future-ready, self-sufficient digital operator"],
        ],
      },
      {
        kind: "cardgrid",
        heading: "Design Phase — 8 weeks",
        cards: [
          { title: "Wk 1–2", body: "Strategic Thinking Sessions & Direction" },
          { title: "Wk 3–5", body: "Draft Plan Development" },
          { title: "Wk 5–7", body: "Implementation Roadmap" },
          { title: "Wk 8", body: "Board Pack & Final Approval" },
        ],
      },
      {
        kind: "features",
        heading: "Design Phase — Deliverables",
        bullets: [
          "MVP — Minimum Viable Proposition, packages & product relaunch",
          "GTM — Go-to-Market: brand, sales, distribution, CX lifecycle",
          "OM — Operating Model & technical architecture",
          "ICX — Integrated Customer Experience journeys",
          "BM — Granular 60-month business plan, ROI, break-even",
        ],
      },
      {
        kind: "cardgrid",
        heading: "Next Steps",
        cards: [
          {
            title: "1. Approve Engagement",
            body: "Approve and nominate Steering Committee members.",
          },
          {
            title: "2. Schedule Workshop",
            body: "Strategic Thinking Workshop within 14 days of acceptance.",
          },
          {
            title: "3. Provide Baseline Data",
            body: "Share financials, operations data, and subscriber base.",
          },
          {
            title: "4. Kick-off Session",
            body: "Align priorities and success metrics with all stakeholders.",
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    number: "02",
    slug: "mvno-pwa",
    name: "MVNO PWA Platform",
    shortName: "MVNO PWA",
    tagline: "Branded Progressive Web App for MVNO subscribers",
    cardDescription:
      "Branded self-service mobile app for subscribers — SIM management, top-ups, bundles, account, and support.",
    description:
      "A production-ready, fully branded Progressive Web App for your MVNO subscribers — proven in live deployment. Gives GCT Group subscribers a seamless self-service experience across SIM management, top-ups, bundle purchasing, account management, and support — all under the GCT brand.",
    headlinePrice: "From $6,334.50/mo",
    headlinePriceNote: "Months 1–6 · drops to $4,250/mo from Month 7",
    features: [
      "Fully branded PWA — GCT Group look, feel, and domain",
      "Self-service: SIM activation, top-ups, bundle selection",
      "Account management and real-time usage dashboard",
      "Integration to MVNO platform and billing system",
      "24×7 support for critical issues (Level 3 code-level)",
      "Monthly development hours with 3-month accumulation allowance",
    ],
    outcomes: [
      "Branded subscriber app live within the build window",
      "Predictable monthly run-rate for support & enhancements",
      "Faster cycle time on new bundles, promotions and journeys",
    ],
    pricing: [
      { label: "Minimum monthly commitment (Months 1–6)", value: "$2,084.50 USD / month", note: "Total $12,507 over 6 months — covers PWA set-up & development" },
      { label: "Tier 3 Support (40 hrs/mo)", value: "$3,250 USD / month", note: "Recurring from Month 1" },
      { label: "Development (10 hrs/mo)", value: "$1,000 USD / month", note: "Recurring from Month 1" },
      { label: "Months 1–6 total", value: "$6,334.50 USD / month" },
      { label: "Month 7 onwards", value: "$4,250 USD / month", note: "Set-up commitment ends" },
      { label: "Year 1 total", value: "$63,507 USD" },
      { label: "Years 2–5 (each)", value: "$51,000 USD" },
      { label: "5-year total", value: "$267,507 USD" },
    ],
    pricingNote:
      "Source: Client MVNO PWA Support — Pricing Model (MVNE 20260223 v2). Set-up & development is built in as a minimum monthly commitment for the first 6 months instead of a once-off fee. Invoicing monthly · payment due by the 25th of each month · development hours accumulate up to 3 months · subject to USD rate fluctuations.",
    sections: [
      {
        kind: "table",
        heading: "Support Model",
        headers: ["Level", "Description"],
        rows: [
          ["Level 1", "Monitoring of system functionality"],
          ["Level 2", "Functional issues resolved by restart or manual intervention"],
          ["Level 3 ✦", "Code-level corrections — provided by MVNE"],
        ],
        footnote:
          "Additional features and enhancements handled via the monthly development hours allocation.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    number: "03",
    slug: "travel-esim",
    name: "Travel eSIM Platform",
    shortName: "Travel eSIM",
    tagline: "Branded international Travel eSIM bundles",
    cardDescription:
      "Offer GCT subscribers branded international Travel eSIM bundles — revenue share model, zero capex required.",
    description:
      "Offer GCT Group subscribers branded international Travel eSIM bundles — powered by MVNE's proven Digital Mobile platform. A pure revenue share model with zero capex or infrastructure investment required from GCT. Full integration in approximately 2 weeks.",
    headlinePrice: "From $533.33/mo",
    headlinePriceNote: "min. 6-month commitment + 10% revenue share to GCT",
    features: [
      "Fully branded Travel eSIM product suite under GCT Group",
      "Global connectivity — international data bundles for travelling subscribers",
      "Revenue share on every bundle sold — zero capex or RAN investment",
      "Full platform integration in approximately 2 weeks from contract signature",
      "Proven MVNE eSIM infrastructure — already live at scale",
      "Minimum monthly commitment of $533.33 for the first 6 months ($3,200 total — covers project set-up & app configuration)",
    ],
    outcomes: [
      "New roaming revenue line with no roaming partner negotiation",
      "Improved CX for travelling subscribers vs. legacy IDD roaming",
      "Up to ~535K base-case activations p.a. by Year 5 against GCT's outbound travel base",
    ],
    pricing: [
      { label: "Minimum monthly commitment (Months 1–6)", value: "$533.33 USD / month", note: "Total $3,200 over 6 months — covers project set-up & app configuration" },
      { label: "Month 7 onwards", value: "Revenue share only", note: "No minimum commitment — 10% of MVNE Net" },
      { label: "5GB bundle", value: "$18.07 USD ARPU", note: "30% net margin (ex VAT)" },
      { label: "2.5GB bundle", value: "$9.035 USD ARPU", note: "30% net margin (ex VAT)" },
      { label: "Revenue share to GCT", value: "10% of MVNE Net" },
      { label: "Target market (2026 → 2030)", value: "5.5M → 6.7M outbound travellers" },
      { label: "Base-case attach rate", value: "3% Yr 1 → 8% Yr 5" },
      { label: "SIM profile creation (once-off)", value: "$0.63 / subscriber" },
      { label: "ICCID provisioning (once-off)", value: "$0.31 / ICCID" },
      { label: "Active IMSI credential (monthly)", value: "$0.31 / active IMSI" },
    ],
    pricingNote:
      "Source: Travel eSIM Pricing Model — Model Parameters (ex VAT). Worse-case attach 2%–4.5%, base 3%–8%, best 5%–12%. ICCID fees invoiced at time of provisioning. Monthly IMSI fees based on active sessions, SMS events, or location updates in that month. Integration timeline ~2 weeks. Subject to USD rate fluctuations.",
    sections: [
      {
        kind: "table",
        heading: "Implementation Scope",
        headers: ["Activity", "Responsibility"],
        rows: [
          ["Business requirements & tech specification", "Both parties sign off"],
          ["Customer journey mapping", "GCT & MVNE sign off"],
          ["Build travel eSIM services on platform", "MVNE builds"],
          ["Configure bundle services for GCT Group", "MVNE configures"],
          ["Go live & launch to market", "~2 weeks from signature"],
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    number: "04",
    slug: "cxg",
    name: "CXG",
    shortName: "CXG",
    tagline: "Customer Experience Group",
    cardDescription:
      "Omni-channel customer experience management — contact centre, social media, WhatsApp, CRM and business intelligence.",
    description:
      "World-class omni-channel customer experience management — combining human expertise with intelligent technology to build lasting customer relationships at every touchpoint across voice, digital, and social channels.",
    headlinePrice: "Custom",
    headlinePriceNote: "based on requirements",
    features: [
      "Omni-channel contact centre — voice, email, chat, social",
      "WhatsApp Business integration and automation",
      "Social media management and community engagement",
      "CRM implementation and customer data management",
      "Business intelligence, reporting and subscriber analytics",
      "Customer lifecycle management and retention programmes",
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
    pricingNote:
      "CXG pricing is tailored to the specific volume, channel mix, and service level requirements of each client. A detailed commercial proposal is prepared following an initial consultation and requirements scoping session. Pricing on request — select \"Request a Consultation\" in the acceptance form to get started.",
    sections: [
      {
        kind: "cardgrid",
        heading: "Why CXG for GCT",
        cards: [
          {
            title: "Subscriber Growth",
            body: "Dedicated acquisition and onboarding journeys turning leads into activated subscribers faster.",
          },
          {
            title: "Churn Reduction",
            body: "Proactive retention programmes identifying at-risk customers before they leave.",
          },
          {
            title: "Brand Reputation",
            body: "Consistent, premium CX across all channels reinforcing the GCT Group brand promise.",
          },
        ],
      },
    ],
    cta: { label: "Request a Consultation", href: "#contact" },
  },

  // -------------------------------------------------------------------------
  {
    number: "05",
    slug: "xanite-cvm",
    name: "Xanite CVM",
    shortName: "Xanite CVM",
    tagline: "AI-powered Customer Value Management",
    cardDescription:
      "AI-powered Customer Value Management platform — intelligent campaigns, churn reduction and subscriber revenue growth.",
    description:
      "MVNE's AI-powered Customer Value Management platform — purpose-built for mobile operators to drive subscriber revenue, reduce churn, and maximise lifetime value through intelligent, data-led campaigns.",
    headlinePrice: "Custom",
    headlinePriceNote: "platform licence",
    features: [
      "AI-driven campaign automation and segmentation",
      "Real-time subscriber behavioural analytics",
      "Churn prediction and proactive retention triggers",
      "ARPU uplift through targeted upsell and cross-sell",
      "Multi-channel campaign delivery — SMS, push, email, USSD",
      "Revenue and campaign performance dashboards",
    ],
    outcomes: [
      "Measurable ARPU uplift and churn reduction",
      "Higher offer relevance and lower fatigue",
      "Single base-management cockpit",
    ],
    pricing: [
      { label: "Licensing", value: "Platform fee" },
      { label: "Scaling", value: "Subscriber base size & active campaigns" },
    ],
    pricingNote:
      "Xanite is licenced on a platform fee basis, scaled to subscriber base size and active campaigns. A detailed commercial proposal is prepared following an initial consultation and requirements scoping session.",
    sections: [
      {
        kind: "cardgrid",
        heading: "Business Outcomes",
        cards: [
          {
            title: "ARPU Growth",
            body: "Intelligent offers served at the right moment to the right subscriber increase average revenue per user.",
          },
          {
            title: "Reduced Churn",
            body: "Predictive models identify at-risk subscribers and trigger automated retention interventions.",
          },
          {
            title: "Faster Campaigns",
            body: "Launch, optimise, and measure campaigns in hours — not weeks — with the Xanite campaign builder.",
          },
        ],
      },
    ],
    cta: { label: "Request a Consultation", href: "#contact" },
  },

  // -------------------------------------------------------------------------
  {
    number: "06",
    slug: "persaic",
    name: "PersAIc",
    shortName: "PersAIc",
    tagline: "AI-driven personalisation engine",
    cardDescription:
      "AI-driven personalisation engine — real-time customer journeys, behavioural analytics and intelligent product recommendations.",
    description:
      "MVNE's AI-driven personalisation engine that transforms how GCT Group engages with its subscribers — delivering hyper-personalised experiences, product recommendations, and communications in real time, at scale.",
    headlinePrice: "Custom",
    headlinePriceNote: "per-subscriber model",
    features: [
      "Real-time AI personalisation across all customer touchpoints",
      "Intelligent product and bundle recommendations per subscriber",
      "Behavioural analytics and subscriber journey mapping",
      "Dynamic content and offer personalisation on PWA and app",
      "Predictive lifetime value and next-best-action modelling",
      "Privacy-first design — GDPR/NDPR compliant by default",
    ],
    outcomes: [
      "Higher conversion on offers and bundles",
      "Lower opt-out and complaint rates",
      "Continuous learning loop with measurable lift",
    ],
    pricing: [
      { label: "Commercial model", value: "Per-subscriber, per month" },
      { label: "Implementation & integration", value: "Included in onboarding scope" },
    ],
    pricingNote:
      "PersAIc is priced on a per-subscriber model, scaled to active base size. Implementation and integration with the MVNO platform and PWA is included in the onboarding scope. Pricing on request — select \"Request a Consultation\" in the acceptance form to get started.",
    sections: [
      {
        kind: "cardgrid",
        heading: "Why Personalisation Matters",
        cards: [
          {
            title: "Higher Conversion",
            body: "Personalised offers convert significantly better than generic campaigns — reducing cost-per-acquisition.",
          },
          {
            title: "Stronger Loyalty",
            body: "Subscribers who feel understood stay longer — personalisation is one of the most effective retention tools available.",
          },
          {
            title: "Competitive Edge",
            body: "Hyper-personalised experiences are a clear differentiator in Nigeria's increasingly competitive mobile market.",
          },
        ],
      },
    ],
    cta: { label: "Request a Consultation", href: "#contact" },
  },

  // -------------------------------------------------------------------------
  {
    number: "07",
    slug: "bitdefender",
    name: "Bitdefender",
    shortName: "Bitdefender",
    tagline: "Subscriber cybersecurity as a Value-Added Service",
    cardDescription:
      "Consumer cybersecurity as a VAS for GCT subscribers — antivirus, VPN, identity protection and parental controls.",
    description:
      "Offer GCT Group subscribers premium Bitdefender cybersecurity protection as a Value-Added Service — powered by DSG's Digital Resilience division. Protect your subscribers' devices, identity, and data while creating a high-margin recurring revenue stream for GCT.",
    headlinePrice: "From $416.67/mo",
    headlinePriceNote: "min. 6-month commitment + per-device pricing · 60% margin",
    features: [
      "Multi-layer antivirus and malware protection",
      "VPN — secure browsing on mobile and Wi-Fi networks",
      "Identity theft monitoring and breach alerts",
      "Parental controls and safe browsing for families",
      "Multi-device coverage — smartphone, tablet, laptop",
      "24/7 threat detection and automatic updates",
      "Minimum monthly commitment of $416.67 for the first 6 months ($2,500 total — covers Dashboard activation & set-up)",
      "60% net margin to GCT on retail",
    ],
    outcomes: [
      "New digital revenue line on existing subscriber base",
      "Improved retention through stickier add-ons",
      "Differentiated security proposition in market",
    ],
    pricing: [
      { label: "Minimum monthly commitment (Months 1–6)", value: "$416.67 USD / month", note: "Total $2,500 over 6 months — covers Dashboard activation & set-up" },
      { label: "Month 7 onwards", value: "Pay-as-you-go", note: "No minimum commitment — per-device pricing only" },
      { label: "BD Security w/DIP — 1 device", value: "$1.350 USD / month", note: "ZAR 22.815 / month" },
      { label: "BD Security w/DIP — 5 devices", value: "$2.975 USD / month", note: "ZAR 50.2775 / month" },
      { label: "BD Security w/DIP — 10 devices", value: "$4.250 USD / month", note: "ZAR 71.825 / month" },
      { label: "w/DWM & VPN — 1 device", value: "$2.300 USD / month", note: "ZAR 38.870 / month" },
      { label: "w/DWM & VPN — 5 devices", value: "$3.925 USD / month", note: "ZAR 66.3325 / month" },
      { label: "w/DWM & VPN — 10 devices", value: "$6.525 USD / month", note: "ZAR 110.2725 / month" },
    ],
    pricingNote:
      "Source: Bitdefender Commercials — Standard Pricing & Margin Calculator. Pay-as-you-go subscriber pricing — no per-subscriber minimum. 60% net margin to client. ROE 16.9 ZAR/USD. International pricing identical (USD only).",
    sections: [
      {
        kind: "cardgrid",
        heading: "Why Offer Bitdefender",
        cards: [
          {
            title: "Recurring Revenue",
            body: "A high-margin monthly VAS fee billed directly to the subscriber's mobile account — zero additional infrastructure required.",
          },
          {
            title: "Subscriber Loyalty",
            body: "Subscribers with active VAS services churn at significantly lower rates than those without added-value products.",
          },
          {
            title: "Brand Trust",
            body: "Associating GCT Group with a globally trusted security brand elevates perceived value in the enterprise and residential segments.",
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    number: "08",
    slug: "mars",
    name: "MARS",
    shortName: "MARS",
    tagline: "Mediation, Assurance & Revenue Services",
    cardDescription:
      "Mediation, Assurance & Revenue Services — a strategic enabler ensuring data reliability, revenue integrity, and operational performance.",
    description:
      "MARS is more than a framework — it's a strategic enabler that ensures data reliability, protects revenue, and strengthens operational performance. Delivered by MVNE, MARS integrates mediation, assurance, and revenue integrity services into a single cohesive platform built for telecoms operators.",
    headlinePrice: "Custom",
    headlinePriceNote: "pricing on request",
    features: [
      "Raw Data ETL — EDR, GDR, CDR and unstructured file processing",
      "Audit Process — aligns multiple systems for full consistency",
      "Detects and corrects revenue leakage in real time",
      "Workflows, reporting services, controller services & ML scheduling",
      "Real-time ingestion — near real-time data flow processing",
      "Wholesale Bill Validation — SPOut processing and mediation",
    ],
    outcomes: [
      "Faster channel activation and payouts",
      "Lower fraud and reconciliation errors",
      "Single view of distribution performance",
    ],
    pricing: [
      { label: "Pricing", value: "Custom per data volume & module" },
      { label: "Modules", value: "Mediation · Assurance · Revenue · Service Enablers · Enablers" },
      { label: "Contact", value: "hugom@mvne.co.za · +27 861 37 4374" },
    ],
    pricingNote:
      "MARS is scoped and priced based on data volumes, integration complexity, and the combination of mediation, assurance, and revenue modules required. A detailed commercial proposal is prepared following an initial requirements session.",
    sections: [
      {
        kind: "cardgrid",
        heading: "Business Outcomes",
        cards: [
          {
            title: "Avoids Revenue Losses",
            body: "Real-time detection and correction of revenue leakage before it impacts the bottom line.",
            icon: "💰",
          },
          {
            title: "Improves Operational Efficiency",
            body: "Integrating mediation, assurance and revenue services eliminates manual processes and reduces operational overhead.",
            icon: "⚙️",
          },
          {
            title: "Boosts Profits",
            body: "Greater control, accuracy, and efficiency across every revenue-generating touchpoint.",
            icon: "📈",
          },
        ],
      },
      {
        kind: "cardgrid",
        heading: "Five Key Domains",
        cards: [
          {
            title: "M — Mediation",
            body: "Captures and processes raw network data into actionable insights for timely processing.",
          },
          {
            title: "A — Assurance",
            body: "Ensures system and service quality through continuous monitoring and audit processes.",
          },
          {
            title: "R — Revenue",
            body: "Detects leaks, tracks revenue flows, and ensures accurate reporting in real time.",
          },
          {
            title: "SE — Service Enablers",
            body: "Enables automation, workflows, reporting, and operational tooling across the platform.",
          },
          {
            title: "E — Enablers",
            body: "Delivers core business benefits: accuracy, efficiency, and sustained profitability.",
          },
        ],
      },
      {
        kind: "features",
        heading: "Mediation Capabilities",
        bullets: [
          "Raw Data ETL — EDR, GDR, CDR and unstructured file processing",
          "Data Enrichment — combines multiple data sources for deeper insight",
          "Integration Services — APIs, SFTP, databases, Kafka, S3 and more",
          "Real-time Ingestion — near real-time data flow processing",
          "Communication — automated email/SMS notifications to stakeholders",
        ],
      },
      {
        kind: "features",
        heading: "Assurance Capabilities",
        bullets: [
          "Audit Process — aligns multiple systems for full consistency",
          "Service Assurance — validates reliability and service functionality",
          "Monitoring — ongoing checks to detect and resolve problems early",
          "Wholesale Bill Validation — SPOut processing and mediation for accurate billing",
        ],
      },
    ],
    cta: { label: "Request a Consultation", href: "#contact" },
  },

  // -------------------------------------------------------------------------
  {
    number: "09",
    slug: "vms",
    name: "VMS — Voucher Management",
    shortName: "VMS",
    tagline: "Voucher Management Server",
    cardDescription:
      "Voucher Management Server — full lifecycle management of prepaid airtime, data, and promotional vouchers for GCT's MVNO.",
    description:
      "Full-featured Voucher Management Server providing end-to-end lifecycle management of prepaid airtime, data, and promotional vouchers for GCT Group's MVNO — from generation and distribution through to redemption, reporting, and expiry management.",
    headlinePrice: "Custom",
    headlinePriceNote: "based on requirements",
    features: [
      "Prepaid airtime and data voucher generation and management",
      "Promotional and bonus voucher campaigns with configurable rules",
      "Multi-channel distribution — retail, digital, WhatsApp, USSD",
      "Real-time redemption validation and balance crediting",
      "Voucher expiry, reactivation, and lifecycle event management",
      "Full BSS/OSS and MVNO platform integration",
    ],
    outcomes: [
      "Lower voucher fraud and leakage",
      "Faster channel reconciliation",
      "Single voucher cockpit for finance and ops",
    ],
    pricing: [
      { label: "Pricing", value: "Custom per voucher volume & integration scope" },
    ],
    pricingNote:
      "VMS is priced based on voucher volumes, distribution channel complexity, and integration scope. A detailed commercial proposal is prepared following an initial requirements scoping session.",
    sections: [
      {
        kind: "cardgrid",
        heading: "Why VMS for GCT",
        cards: [
          {
            title: "Retail Channel Enablement",
            body: "Distribute GCT prepaid vouchers through physical retail, agents, and dealer networks with full tracking and reconciliation.",
          },
          {
            title: "Promotional Flexibility",
            body: "Launch targeted top-up bonus campaigns, referral vouchers, and loyalty rewards — all managed from a single platform.",
          },
          {
            title: "Revenue Assurance",
            body: "Real-time validation and audit trails eliminate revenue leakage from fraudulent or duplicate voucher redemptions.",
          },
        ],
      },
    ],
    cta: { label: "Request a Consultation", href: "#contact" },
  },
];

// -----------------------------------------------------------------------------
// DBOT phases — surfaced separately on the home page
// -----------------------------------------------------------------------------

export const dbotPhases = [
  {
    phase: "Phase 1 — Design",
    duration: "8 weeks",
    summary:
      "Strategic Thinking Sessions, business model, GTM strategy and target operating model.",
    deliverables: [
      "MVNO strategy & business case",
      "Target operating model & org design",
      "GTM strategy and pricing architecture",
      "60-month business plan, ROI, break-even",
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
      "Handover, governance and go-independent certification to GCT teams.",
    deliverables: [
      "Operational run-books and SOPs",
      "GCT team training & sign-off",
      "Independence certification",
      "Post-launch support model",
    ],
  },
];

// -----------------------------------------------------------------------------
// Acceptance, Contact, T&C, Footer
// -----------------------------------------------------------------------------

export const termsAndConditions = [
  {
    clause: "Validity",
    detail: "All proposals valid for thirty (30) days unless otherwise stated.",
  },
  {
    clause: "Additional Agreements",
    detail: "Subject to signature of a comprehensive contract and full SOW.",
  },
  {
    clause: "Payment Terms",
    detail: "Payable within 30 days of invoice date; 2% per month late penalty.",
  },
  {
    clause: "Pricing Adjustments",
    detail:
      "Subject to USD/ZAR and USD/NGN exchange rate fluctuations; DSG/MVNE reserves right to recalibrate.",
  },
  {
    clause: "Proposal Acceptance",
    detail:
      "Both parties agree to terms set out in this proposal and the detailed SOW.",
  },
];

export const acceptance = {
  title: "Proposal Acceptance",
  intro:
    "Upon acceptance, both parties agree to the terms set out in this proposal and the detailed Scope of Work.",
  signatories: [
    {
      party: "FOR DSG / MVNE (PTY) LTD",
      role: "Authorised representative",
    },
    {
      party: "FOR GCT GROUP",
      role: "Authorised representative",
    },
  ],
};

export const contact = {
  eyebrow: "Get in Touch",
  title: "Contact Us",
  intro:
    "Have questions about the GCT Group product suite? Our team is ready to discuss requirements, pricing, and next steps.",
};

export const footer = {
  copyright:
    "© 2026 Digital Solutions Group (Pty) Ltd · MVNE (Pty) Ltd · A DSG Company · Confidential · www.mvne.co.za",
  confidentiality:
    "Confidential — for the named recipients at GCT Group only. Not for re-distribution.",
};
