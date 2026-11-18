import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions, hasRole } from "@/lib/auth";
import { getPortal } from "@/data/portals";
import { getEmbedConfig } from "@/lib/powerbi";

export const dynamic = "force-dynamic";

export async function GET(_req, { params }) {
  const session = await getServerSession(authOptions);
  const portal = getPortal(params.client);
  if (!session || !portal) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  if (!hasRole(session, portal.role)) return NextResponse.json({ error: "No access" }, { status: 403 });

  const report = portal.reports.find((r) => r.key === params.report);
  if (!report?.reportId) return NextResponse.json({ error: "Report not found" }, { status: 404 });

  try {
    const cfg = await getEmbedConfig(portal.workspaceId, report.reportId, session.user.email);
    console.log(JSON.stringify({ event: "client_portal_report_view", client: params.client, report: report.key, email: session.user.email, at: new Date().toISOString() }));
    return NextResponse.json(cfg, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Could not load the report. Please try again shortly." }, { status: 502 });
  }
}
