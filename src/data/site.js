export const site = {
  name: "FPnA People Inc.",
  shortName: "FPnA People",
  url: "https://fpnapeople.io",
  email: "fahad@fpnapeople.io",
  phone: "365-228-1328",
  calendly: "https://calendly.com/fpnaaccountants/finance-strategy-intro-call",
  address: "Suite 1400, 18 King St E, Toronto, ON M5C 1C4",
  linkedin: {
    company: "https://www.linkedin.com/company/fpna-people-inc",
    fahad: "https://www.linkedin.com/in/fahdyounus/",
  },
  directory: "https://findfinancepros.com",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/powerbi", label: "Power BI Showcase" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export const services = [
  {
    slug: "strategic-finance-advisory",
    title: "Strategic Finance Advisory",
    tagline: "Board-ready strategy for PE-backed and high-growth companies.",
    description:
      "Financial strategy aligned to PE hold-period objectives, capital raising support, M&A readiness, exit preparation, and board and investor reporting frameworks — delivered alongside your internal team.",
    forWhom: [
      "PE-backed portfolio company CFOs and CEOs",
      "Founder-led businesses preparing for growth capital or exit",
      "Boards needing strategic finance partnership",
    ],
    deliverables: [
      "Financial strategy aligned to PE hold-period objectives",
      "Capital raising support ($90M+ raised to date)",
      "M&A readiness and sell-side preparation",
      "Exit preparation and value creation plans",
      "Board and investor reporting frameworks",
      "Coaching and upskilling for internal finance teams",
    ],
    industries: ["manufacturing", "saas-subscription", "real-estate", "private-equity"],
  },
  {
    slug: "fpa-performance-management",
    title: "FP&A & Performance Management",
    tagline: "Forecasts, KPIs, and profitability intelligence that drive decisions.",
    description:
      "Budgeting, forecasting, 3-statement models, KPI tracking, and profitability analysis across product, customer, and channel — built on durable frameworks that scale with you.",
    forWhom: [
      "Finance leaders building out their FP&A function",
      "Growth-stage SaaS companies tracking ARR, CAC, and LTV",
      "Multi-site operators needing granular profitability analysis",
    ],
    deliverables: [
      "Annual operating plans, rolling forecasts, and budget variance reporting",
      "Integrated 3-statement models with scenario planning",
      "KPI dashboards and management reporting packs",
      "Profitability by product, customer, channel, and location",
      "SaaS metrics: ARR, MRR, CAC, LTV, churn, net revenue retention",
      "Working capital optimization and cash forecasting",
    ],
    industries: ["saas-subscription", "ecommerce-cpg", "manufacturing", "healthcare"],
  },
  {
    slug: "power-bi-automation",
    title: "Power BI Automation & Real-Time Reporting",
    tagline: "From month-end spreadsheets to real-time, self-service dashboards.",
    description:
      "Custom Power BI dashboards for CEOs, boards, and investors — with automated ETL pipelines from your ERP, so your team spends time deciding instead of reconciling.",
    forWhom: [
      "Finance teams drowning in manual reporting",
      "Executives who need real-time operational visibility",
      "PE sponsors requiring standardized portfolio reporting",
    ],
    deliverables: [
      "Custom dashboards for CEO, board, and investor audiences",
      "Automated ETL from Dynamics BC365, NetSuite, SAP, Yardi, QBO",
      "Month-end close acceleration — multi-day to single day",
      "Covenant and lender reporting automation",
      "Training and knowledge transfer for in-house independence",
      "Dashboard governance and version control frameworks",
    ],
    industries: ["manufacturing", "real-estate", "saas-subscription", "ecommerce-cpg"],
  },
  {
    slug: "accounting-controllership",
    title: "Accounting & Controllership Support",
    tagline: "Clean books, fast closes, audit-ready results.",
    description:
      "Controllership-grade accounting support — month-end close, reconciliations, audit preparation, and GAAP alignment — so your leadership can trust the numbers.",
    forWhom: [
      "Companies between controllers or scaling their finance team",
      "Businesses preparing for audit or due diligence",
      "Multi-entity groups needing consolidation rigor",
    ],
    deliverables: [
      "Month-end close execution and oversight",
      "Balance sheet reconciliations and review",
      "Audit preparation and auditor liaison",
      "ASPE, IFRS, and US GAAP policy alignment",
      "AP and AR process optimization",
      "Payroll accounting and reconciliation",
    ],
    industries: ["manufacturing", "real-estate", "healthcare"],
  },
  {
    slug: "erp-systems-advisory",
    title: "ERP & Systems Advisory",
    tagline: "Implementations that deliver — without the 18-month detour.",
    description:
      "Vendor-agnostic ERP advisory across Dynamics BC365, Yardi, NetSuite, SAP, and QBO — plus procurement-to-pay and AP automation to make the stack actually work.",
    forWhom: [
      "Companies selecting or implementing a new ERP",
      "Post-acquisition groups consolidating onto one platform",
      "Finance teams with messy data or brittle integrations",
    ],
    deliverables: [
      "ERP selection and vendor evaluation",
      "Implementation advisory for Dynamics BC365, Yardi, NetSuite, SAP, QBO",
      "Chart of accounts design and data migration",
      "Procurement-to-pay and AP automation",
      "Integration architecture across finance and operations",
      "Post-go-live optimization and user enablement",
    ],
    industries: ["manufacturing", "real-estate", "fashion-apparel", "ecommerce-cpg"],
  },
  {
    slug: "exit-readiness",
    title: "Exit Readiness & Due Diligence",
    tagline: "Positioning portfolio companies for the best possible exit.",
    description:
      "Sell-side preparation for PE-backed companies — data room, financial model, covenant packages, and the story that strategic and financial buyers expect.",
    forWhom: [
      "PE sponsors planning an exit in the next 12–24 months",
      "Founder-led companies considering a sale",
      "Portfolio CFOs assembling the data room",
    ],
    deliverables: [
      "Sell-side data room assembly and management",
      "Quality of earnings preparation and support",
      "Financial model and projections refinement",
      "Covenant packages and lender communication",
      "Positioning narratives for strategic and financial buyers",
      "Management presentation support",
    ],
    industries: ["private-equity", "manufacturing", "saas-subscription"],
  },
  {
    slug: "acquisition-integration",
    title: "Acquisition Integration",
    tagline: "Day-one finance integration that holds up under sponsor scrutiny.",
    description:
      "Post-acquisition finance integration — systems, reporting, and operating cadence aligned to sponsor standards from day one.",
    forWhom: [
      "PE sponsors completing add-on acquisitions",
      "Acquirers integrating a target's finance function",
      "Portfolio CFOs rolling up multiple operating companies",
    ],
    deliverables: [
      "100-day integration planning for finance and reporting",
      "Systems consolidation across ERPs and reporting tools",
      "Reporting alignment to sponsor and lender standards",
      "Chart of accounts harmonization",
      "Close calendar standardization across entities",
      "KPI and management reporting package integration",
    ],
    industries: ["private-equity", "manufacturing", "real-estate"],
  },
  {
    slug: "ai-implementation",
    title: "AI for Finance & Admin",
    tagline: "Practical AI that removes repetitive finance work.",
    description:
      "AI-powered AP automation, document processing, and workflow automation built on Microsoft Power Automate and AI Builder — deployed where ROI is clear.",
    forWhom: [
      "Finance teams with high-volume AP or document work",
      "Operators who want AI embedded in existing Microsoft stack",
      "Leaders exploring AI but wary of hype",
    ],
    deliverables: [
      "AI-powered AP automation and invoice capture",
      "Document processing and data extraction workflows",
      "Power Automate + AI Builder implementations",
      "Financial process automation and exception handling",
      "AI governance and review frameworks",
      "Use case identification and ROI modeling",
    ],
    industries: ["manufacturing", "healthcare", "ecommerce-cpg"],
  },
];

export const industries = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    tagline: "Cost, covenant, and capex intelligence for multi-site manufacturers.",
    description:
      "We've supported manufacturers with 40,000+ SKUs, $500M+ loan portfolios, and $38M+ capex programs — bringing costing discipline and real-time operational visibility to PE-backed and founder-led businesses.",
    expertise: [
      "Product costing across materials, labor, and overheads",
      "Standard vs actual variance analysis at SKU level",
      "Inventory reporting and turn analytics in high-SKU environments",
      "Capex modeling for $38M+ facility expansions",
      "Covenant reporting for $500M+ loan portfolios",
      "Supply chain finance and working capital optimization",
    ],
    systems: ["Dynamics BC365", "SAP", "NetSuite", "Power BI"],
    metrics: ["Gross margin by SKU", "Overhead absorption", "Capacity utilization", "DIO, DSO, DPO"],
  },
  {
    slug: "saas-subscription",
    title: "SaaS & Subscription",
    tagline: "The finance function Series A through growth-stage investors expect.",
    description:
      "ARR, cohorts, CAC payback, and ASC 606-compliant revenue — translated into board-ready reporting and real-time operator dashboards.",
    expertise: [
      "ARR and MRR waterfalls with net revenue retention",
      "Churn, CAC payback, and LTV:CAC analytics",
      "Cohort analysis across acquisition channels",
      "ASC 606 revenue recognition",
      "Runway and burn rate dashboards",
      "Board reporting to Series A through growth-stage standards",
    ],
    systems: ["NetSuite", "QBO", "Stripe", "HubSpot", "Salesforce", "Power BI"],
    metrics: ["ARR / MRR", "NRR / GRR", "CAC payback", "LTV:CAC", "Rule of 40"],
  },
  {
    slug: "real-estate",
    title: "Real Estate & Property Management",
    tagline: "Yardi-integrated multi-entity reporting for PE-backed portfolios.",
    description:
      "Senior living, student living, and commercial portfolio finance — from Yardi integration to distribution waterfalls and investor-ready reporting.",
    expertise: [
      "Yardi integration and reporting automation",
      "Multi-entity consolidation across property portfolios",
      "Senior living and student living operational finance",
      "Development and acquisition financial modeling",
      "PE-backed real estate investor reporting",
      "Distribution waterfall modeling and IRR reporting",
    ],
    systems: ["Yardi", "Power BI", "Excel Modeling"],
    metrics: ["NOI", "Occupancy", "RevPAU", "IRR", "DSCR"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Compounding Pharmacy",
    tagline: "Operational finance for regulated, inventory-heavy healthcare businesses.",
    description:
      "Healthcare finance across compounding pharmacy, clinics, and multi-site operators — balancing regulatory compliance with margin and inventory discipline.",
    expertise: [
      "Compounding pharmacy operational finance",
      "Inventory management with expiry-date tracking",
      "Regulatory compliance reporting",
      "Multi-location performance and benchmarking",
      "Margin analytics by service and product line",
      "Revenue cycle and claims analytics",
    ],
    systems: ["Dynamics BC365", "QBO", "Power BI"],
    metrics: ["Gross margin by line", "Inventory turns", "Expiry write-offs", "Visit volume"],
  },
  {
    slug: "ecommerce-cpg",
    title: "E-commerce & CPG",
    tagline: "Channel, pricing, and contribution margin intelligence.",
    description:
      "Shopify, Amazon, and D2C operators — with channel-mix, ACOS, and pricing frameworks that tell you where the next dollar of growth actually comes from.",
    expertise: [
      "Shopify, Amazon, HubSpot, and Salesforce integration",
      "Channel-mix and contribution margin analysis",
      "Pricing strategy and elasticity analytics",
      "ACOS optimization and ad spend attribution",
      "D2C and B2B channel analytics",
      "US market launch financial support",
    ],
    systems: ["Shopify", "Amazon Seller Central", "NetSuite", "HubSpot", "Power BI"],
    metrics: ["Contribution margin", "ACOS / TACOS", "AOV", "Repeat rate", "Sell-through"],
  },
  {
    slug: "fashion-apparel",
    title: "Fashion & Apparel",
    tagline: "Global sourcing, channel complexity, and SAP — all in finance view.",
    description:
      "Fashion and apparel businesses with cross-border sourcing, multi-channel distribution, and SAP-level complexity — translated into decision-ready reporting.",
    expertise: [
      "Global supply chain finance across China and Vietnam sourcing",
      "Cross-border FX and duty management",
      "Retail, wholesale, and e-commerce channel P&L",
      "SAP implementation and optimization for fashion operators",
      "Seasonal inventory and markdown analytics",
      "Wholesale receivables and chargeback management",
    ],
    systems: ["SAP", "NetSuite", "Shopify", "Power BI"],
    metrics: ["Sell-through rate", "Full-price vs markdown %", "GMROI", "Channel contribution"],
  },
  {
    slug: "private-equity",
    title: "Private Equity Fund Operations",
    tagline: "Sponsor-level reporting and portfolio company oversight.",
    description:
      "Fund-level reporting and portfolio company oversight — value creation plan tracking, covenant monitoring, and standardized reporting across the book.",
    expertise: [
      "Sponsor-level reporting and portfolio analytics",
      "Portfolio company finance oversight and standardization",
      "Value creation plan tracking and milestone reporting",
      "Fund-level analytics and LP reporting support",
      "Covenant monitoring across the portfolio",
      "Add-on acquisition integration support",
    ],
    systems: ["Power BI", "Excel", "ERP-agnostic"],
    metrics: ["MOIC", "IRR", "Value creation KPIs", "Covenant headroom"],
  },
];

export const caseStudies = [
  {
    slug: "fleet-fuel-fintech",
    title: "Fleet Fuel Fintech — Business Model Analysis",
    summary:
      "A 5-year, three-scenario financial model and competitive analysis for a fintech startup building a fleet fuel card and AI-powered fuel management SaaS platform.",
    industry: "SaaS & Fintech",
    anonymized: false,
    hasDownload: true,
    downloadHref: "/downloads/Fleet-OS-Fintech-Model.xlsx",
    downloadLabel: "Download the Full Model (.xlsx)",
  },
  {
    slug: "northroam-rv-dashboard",
    title: "NorthRoam RV Rentals — Financial Dashboard",
    summary:
      "An interactive financial dashboard covering revenue, expenses, fleet utilization, and profitability metrics — built to give operators real-time visibility across the fleet.",
    industry: "Travel & Leisure",
    anonymized: false,
    hasEmbed: true,
    embedHref: "/dashboards/northroam_dashboard.html",
  },
  {
    slug: "manufacturing-transformation",
    title: "Multi-Site Manufacturer — Finance Transformation",
    summary:
      "A $50M+ machine parts manufacturer modernized for PE reporting — month-end close compressed from multi-day to single day, and $38M capex approved.",
    industry: "Manufacturing",
    anonymized: true,
  },
  {
    slug: "senior-living-consolidation",
    title: "PE-Backed Senior Living Portfolio — Financial Consolidation",
    summary:
      "Yardi integration, multi-entity consolidation, and investor-ready distribution waterfalls for a PE-backed senior living and real estate portfolio.",
    industry: "Real Estate",
    anonymized: true,
  },
];

export const powerBiReports = [
  {
    title: "Retail Business Dashboard",
    description:
      "A multi-location retail operator view — sales, margin, channel mix, and period-over-period comparisons in a single decision-ready pane.",
    src: "https://app.powerbi.com/view?r=eyJrIjoiZjJmYWQ0YzctNGZmNC00NGE5LTkxMGUtOGU1NzYxN2FjNGEwIiwidCI6ImI1MDJkZDY4LTkzMGQtNDE0MC05MjJlLThhMzhmZjJmZmRhNCJ9",
  },
  {
    title: "Shopify Analytics Dashboard",
    description:
      "Shopify operator dashboard covering revenue, AOV, cohort repeat behavior, and contribution margin by channel and SKU.",
    src: "https://app.powerbi.com/view?r=eyJrIjoiNDZjNWFmMzgtMmFjYy00NzQ4LTg1MWMtNGQxNTU0ODc4NDIzIiwidCI6ImI1MDJkZDY4LTkzMGQtNDE0MC05MjJlLThhMzhmZjJmZmRhNCJ9",
  },
  {
    title: "Financial Statements Dashboard",
    description:
      "Board-ready P&L, balance sheet, and cash flow with variance to budget and prior year — drill into any line down to transaction detail.",
    src: "https://app.powerbi.com/view?r=eyJrIjoiODAyZjkyZjItOWQxOS00MTBkLTkxZWEtYjhkNzNlOGVmMGYwIiwidCI6ImI1MDJkZDY4LTkzMGQtNDE0MC05MjJlLThhMzhmZjJmZmRhNCJ9",
  },
  {
    title: "Inventory Analysis Dashboard",
    description:
      "SKU-level inventory performance — turns, aging, stockouts, and obsolescence risk across locations and product families.",
    src: "https://app.powerbi.com/view?r=eyJrIjoiZGIxOThjOWYtYjk2NC00MjM5LThmYTMtZjAwNjk1MjhjZTZmIiwidCI6ImI1MDJkZDY4LTkzMGQtNDE0MC05MjJlLThhMzhmZjJmZmRhNCJ9",
  },
];

export const testimonials = [
  {
    quote:
      "Within that reporting FPnA People also created the ability to drill in and examine granular detail allowing executive management to make decisions rapidly.",
    name: "Brad Hunt",
    role: "VP, Valley Blades Limited",
    linkedin: "https://www.linkedin.com/in/brad-hunt-990b33107/",
  },
  {
    quote:
      "Ability to make quick, informed, and impactful decisions is priceless in today's dynamic environment, and FPnA People enables us to do exactly that.",
    name: "Irfan Sattar",
    role: "CEO, Greeniche Group of Companies",
    linkedin: "https://www.linkedin.com/in/irfansattar/",
  },
];

export const stats = [
  { value: "15+", label: "Years Experience", suffix: "" },
  { value: "$500M+", label: "Loan Portfolios Managed" },
  { value: "$90M+", label: "Capital Raised" },
  { value: "7+", label: "Industries Served" },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug);
}
export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug);
}
