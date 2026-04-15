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
    anonymized: true,
    note: "NorthRoam is an anonymized name. Client details have been changed to protect confidentiality.",
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
    title: "Automotive Parts Manufacturer — Finance Transformation",
    industry: "Manufacturing",
    anonymized: true,
    challenge:
      "A $100M+ multi-site automotive parts manufacturer needed to modernize its finance function to meet PE sponsor reporting requirements. Reporting was manual and took days. The business ran 40,000+ SKUs, carried $200M+ in loan commitments with covenant requirements, and was planning a $38M capex facility expansion.",
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

  "compounding-pharmacy-automation": {
    title: "Compounding Pharmacy — Power BI Automation for Financial Reporting",
    industry: "Healthcare",
    anonymized: true,
    challenge:
      "A compounding pharmacy needed Power BI automation for monthly financials, a real budget-to-actual variance analysis framework, and polished external reports for major pharmacy chain partners to strengthen credibility. Monthly reporting was manual, there was no variance analysis framework in place, and the business needed credibility-building reports to deepen its partnerships with major pharmacy chains.",
    approach: [
      "Built Power BI dashboards automating monthly financial reporting",
      "Designed a budget vs actual variance analysis framework with drill-through to account and cost-center level",
      "Created professional, branded external reports for major pharmacy chain partners",
      "Automated the data pipeline so reporting refreshes without manual intervention",
      "Standardized KPI definitions across internal finance and external partner reporting",
    ],
    highlights: [
      "Fully automated monthly financial reporting",
      "Real-time budget-to-actual variance visibility",
      "Branded external reporting for major pharmacy chain partners",
      "Credibility-building package that supported expanded partnerships",
    ],
    outcome:
      "Monthly reporting went from manual workbook assembly to automated Power BI delivery. Leadership gained real-time variance visibility, and the external reporting package enhanced credibility with major pharmacy chains — directly supporting expanded partnership relationships.",
  },
};

export function getCaseStudyDetail(slug) {
  return caseStudyDetails[slug];
}
