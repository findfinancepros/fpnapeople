// Client reporting portals. Each client gets a section at /clients/<slug>.
// Access is controlled by an app role (role value below) assigned to each
// person in the FPnA Client Portal (Microsoft Entra External ID) tenant.
// Report and workspace IDs are not secrets; credentials live only in Vercel env vars.

export const portals = {
  "bear-and-bison": {
    name: "Bear & Bison",
    subtitle: "Indigenous ETA Fund · Illustrative LP reporting sample",
    role: "client.bear-and-bison",
    logo: "/clients/bear-and-bison/logo.png",
    accent: "#B34400",
    disclaimer:
      "Illustrative sample. Not actual or projected fund performance. Portfolio companies, people and figures are fictional.",
    workspaceId: "3f25a326-f134-4ff7-a5d3-78d3a8b10940",
    reports: [
      {
        key: "fund",
        title: "Fund reporting pack",
        description: "Fund performance, capital, portfolio view, KPIs, covenants and impact.",
        reportId: "90fe5df0-adf7-4b97-b10c-b29a67a9c9e2",
      },
      {
        key: "aspen-ridge",
        title: "Company pack: Aspen Ridge Mechanical",
        description: "Monthly reporting pack for a field services portfolio company.",
        reportId: "20e623c4-d993-4ee8-884f-478cdd7da724",
      },
      {
        key: "northfork",
        title: "Company pack: Northfork Precision Fabrication",
        description: "Monthly reporting pack for a manufacturing portfolio company.",
        reportId: "308fcc06-b750-403b-b990-7fbb9cbcf79a",
      },
    ],
  },
};

export function getPortal(slug) {
  return portals[slug] || null;
}
