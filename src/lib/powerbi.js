// Server-side only. Issues short-lived, view-only Power BI embed tokens using the
// "BB Reporting Portal" service principal in the FPnA People tenant.
import "server-only";

const PBI = "https://api.powerbi.com/v1.0/myorg";

async function aadToken() {
  const res = await fetch(
    `https://login.microsoftonline.com/${process.env.PBI_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.PBI_CLIENT_ID,
        client_secret: process.env.PBI_CLIENT_SECRET,
        scope: "https://analysis.windows.net/powerbi/api/.default",
      }),
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error(`AAD token failed: ${res.status}`);
  return (await res.json()).access_token;
}

export async function getEmbedConfig(workspaceId, reportId, viewerEmail) {
  const token = await aadToken();
  const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

  const rep = await fetch(`${PBI}/groups/${workspaceId}/reports/${reportId}`, { headers, cache: "no-store" });
  if (!rep.ok) throw new Error(`Report lookup failed: ${rep.status}`);
  const report = await rep.json();

  const gen = await fetch(`${PBI}/GenerateToken`, {
    method: "POST",
    headers,
    cache: "no-store",
    body: JSON.stringify({
      reports: [{ id: reportId, allowEdit: false }],
      datasets: [{ id: report.datasetId }],
      targetWorkspaces: [{ id: workspaceId }],
      lifetimeInMinutes: 60,
    }),
  });
  if (!gen.ok) throw new Error(`Embed token failed: ${gen.status}`);
  const t = await gen.json();

  return { reportId, embedUrl: report.embedUrl, accessToken: t.token, expiration: t.expiration, viewer: viewerEmail };
}
