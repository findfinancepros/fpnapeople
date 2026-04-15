export const caseStudyDetails = {
  "fleet-fuel-fintech": {
    title: "Fleet Fuel Fintech — Business Model Analysis",
    industry: "SaaS & Fintech",
    challenge:
      "A fintech startup building a fleet fuel card and AI-powered fuel management SaaS platform needed a defensible, investor-ready business model — not a back-of-napkin pitch — to test scenarios, stress-test assumptions, and anchor fundraising conversations.",
    approach: [
      "Built a comprehensive 5-year financial model with three scenarios: Conservative, Base Case, and Blitz Scale",
      "Ran a competitive landscape analysis across 10+ players in the fleet fuel card and fleet management SaaS space",
      "Modeled the revenue engine — interchange, SaaS, and premium service tiers — with sensitivity ranking on key assumptions",
      "Built a detailed OpEx schedule by category including engineering, GTM, customer success, and G&A",
      "Mapped the finance stack — accounting, billing, reconciliation, and reporting — recommended for each stage of growth",
    ],
    highlights: [
      "5-year integrated financial model across three scenarios",
      "Sensitivity-ranked assumption framework",
      "Competitive analysis of 10+ market players",
      "Detailed OpEx build by functional category",
      "Finance stack and reporting architecture recommendations",
    ],
    outcome:
      "The client walked into investor conversations with a model that held up to scrutiny — defendable assumptions, clear unit economics, and a narrative that tied business model to capital need.",
    download: {
      href: "/downloads/Fleet-OS-Fintech-Model.xlsx",
      label: "Download the Full Model (.xlsx)",
      note: "The Excel model used in this engagement — take it for a spin.",
    },
  },

  "northroam-rv-dashboard": {
    title: "NorthRoam RV Rentals — Financial Dashboard",
    industry: "Travel & Leisure",
    challenge:
      "An RV rental operator was flying blind between month-ends — revenue, fleet utilization, and expense performance all lived in disconnected spreadsheets that didn't refresh until the accountant got around to it.",
    approach: [
      "Built an interactive financial dashboard covering revenue, expenses, fleet utilization, and profitability",
      "Automated the data pipeline so the dashboard refreshes without manual intervention",
      "Designed views for year-over-year comparison and fleet-level performance",
      "Added expense breakdowns that flag drift against budget",
    ],
    highlights: [
      "Interactive revenue, expense, and profitability charts",
      "Year-over-year comparison views",
      "Fleet performance metrics",
      "Expense breakdown and drift analytics",
    ],
    outcome:
      "Operational decisions — pricing, fleet additions, expense control — moved from quarterly retrospectives to weekly, data-backed conversations.",
    embed: {
      href: "/dashboards/northroam_dashboard.html",
    },
  },

  "manufacturing-transformation": {
    title: "Multi-Site Manufacturer — Finance Transformation",
    industry: "Manufacturing",
    anonymized: true,
    challenge:
      "A $50M+ multi-site machine parts manufacturer needed to modernize its finance function to meet PE sponsor reporting requirements. Reporting was manual and took days. The business ran 40,000+ SKUs, carried $200M+ in loan commitments with covenant requirements, and was planning a $38M capex facility expansion.",
    approach: [
      "Implemented Power BI dashboards connected directly to Dynamics BC365",
      "Compressed the month-end close from multi-day to single-day",
      "Built a capex expansion financial model to anchor the $38M facility investment",
      "Established a covenant reporting framework aligned to lender requirements",
      "Standardized product costing and variance reporting across sites",
    ],
    highlights: [
      "80% reduction in monthly reporting time",
      "Real-time visibility for PE sponsors and lenders",
      "Covenant reporting framework across $200M+ loan portfolio",
      "Capex approval secured for $38M facility expansion",
      "Product costing discipline across 40,000+ SKUs",
    ],
    outcome:
      "The finance function moved from a back-office reconciliation shop to a forward-looking partner for the PE sponsor. Covenant reporting became routine, capex decisions were data-backed, and the close cycle stopped being the bottleneck on business decisions.",
  },

  "senior-living-consolidation": {
    title: "PE-Backed Senior Living Portfolio — Financial Consolidation",
    industry: "Real Estate",
    anonymized: true,
    challenge:
      "A PE-backed senior living and real estate portfolio needed consolidated financial reporting across multiple operating entities — with investor-ready distribution waterfalls and real-time portfolio visibility the sponsor could rely on.",
    approach: [
      "Integrated Yardi across the portfolio for consistent data capture",
      "Built multi-entity Power BI consolidations with drill-through to property level",
      "Designed investor reporting packages aligned to sponsor standards",
      "Modeled distribution waterfalls with preferred return, catch-up, and promote tiers",
    ],
    highlights: [
      "Automated multi-entity consolidation",
      "Real-time portfolio visibility for the PE sponsor",
      "Investor-ready distribution waterfalls",
      "Yardi integration across the portfolio",
    ],
    outcome:
      "Portfolio reporting stopped being a month-end sprint. The sponsor moved from retrospective investor communications to proactive, real-time portfolio management.",
  },
};

export function getCaseStudyDetail(slug) {
  return caseStudyDetails[slug];
}
