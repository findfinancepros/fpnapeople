import { notFound } from "next/navigation";
import { getPortal } from "@/data/portals";
import PortalPage, { portalMetadata } from "@/components/portal/PortalPage";

export const dynamic = "force-dynamic";

// Portals with their own address (such as the /demo sample) are not served under /clients.
function clientPortal(slug) {
  const portal = getPortal(slug);
  return portal && !portal.path ? portal : null;
}

export function generateMetadata({ params }) {
  return portalMetadata(clientPortal(params.client));
}

export default async function ClientPortalPage({ params }) {
  const portal = clientPortal(params.client);
  if (!portal) notFound();
  return <PortalPage slug={params.client} portal={portal} />;
}
