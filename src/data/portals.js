// Client reporting portals. Each client gets a section at /clients/<slug>.
// Access is controlled by an app role (role value below) assigned to each
// person in the FPnA Client Portal (Microsoft Entra External ID) tenant.
// Report and workspace IDs are not secrets; credentials live only in Vercel env vars.
//
// Optional fields (used by the FPnA demo portal; Bear & Bison relies on the defaults):
//   path      page address when it is not /clients/<slug>
//   provider  next-auth provider id (default "fpna-clients")
//   theme     colours for the portal frame (see DEFAULT_THEME in PortalShell)
//   wordmark  show a text wordmark instead of a logo image
//   eyebrow, pageTitle, signInText  wording on the sign-in screen and browser tab

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

  // FPnA People's own sample portal for prospects, at /demo. Separate sign-in app
  // ("FPnA Demo Portal Web") and app role, so it never touches the Bear & Bison portal.
  "fpna-demo": {
    name: "FPnA People",
    subtitle: "Sample private equity reporting portal",
    role: "client.fpna-demo",
    provider: "fpna-demo",
    path: "/demo",
    logo: "/favicon.svg",
    wordmark: true,
    eyebrow: "Sample reporting portal",
    pageTitle: "FPnA People | Sample PE Reporting",
    signInText: "Sign in with the demo email address and password shared with you.",
    accent: "#d4a853",
    disclaimer:
      "Sample prepared by FPnA People Inc. The fund, portfolio companies, people and figures are fictional.",
    theme: {
      bg: "#0a0e1a",
      frameBg: "#F4F7F9", // full screen background, matches the light report pages
      text: "#f5f1e8",
      heading: "#f5f1e8",
      muted: "#b9b2a3",
      border: "rgba(255,255,255,0.08)",
      tabBg: "#0f1422",
      tabText: "#e8e2d3",
      tabActiveBg: "#d4a853",
      tabActiveText: "#0a0e1a",
      button: "#d4a853",
      buttonText: "#0a0e1a",
      serif: "'DM Serif Display', Georgia, serif",
      sans: "'DM Sans', system-ui, sans-serif",
      credit: "Built by FPnA People Inc. on Microsoft Power BI.",
    },
    workspaceId: "c3c50457-4926-4f35-975d-bf1c6776952c",
    reports: [
      {
        key: "fund",
        title: "Fund reporting pack",
        description: "Fund performance, capital, portfolio view, KPIs, covenants and ESG.",
        reportId: "a8605302-0d62-444a-bff3-38335f1928be",
      },
      {
        key: "keystone",
        title: "Keystone Climate Services",
        description: "Monthly reporting pack for a commercial HVAC and building services company.",
        reportId: "05676c57-dd72-451b-9cc1-52d68af3f722",
      },
      {
        key: "ridgeline",
        title: "Ridgeline Precision Components",
        description: "Monthly reporting pack for a precision manufacturing company.",
        reportId: "59d8c372-98e0-4c3a-94c2-9b2d4f21cfde",
      },
      {
        key: "bayside",
        title: "Bayside Health Partners",
        description: "Monthly reporting pack for a community hospital and primary care group.",
        reportId: "072badec-e39f-464e-b730-7e500ef55981",
      },
    ],
  },
};

export function getPortal(slug) {
  return portals[slug] || null;
}

export function portalPath(slug) {
  return portals[slug]?.path || `/clients/${slug}`;
}
