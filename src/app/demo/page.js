import { notFound } from "next/navigation";
import { getPortal } from "@/data/portals";
import PortalPage, { portalMetadata } from "@/components/portal/PortalPage";

export const dynamic = "force-dynamic";

// FPnA People's sample reporting portal for prospects. Shared demo sign-in, FPnA branding.
const SLUG = "fpna-demo";

export function generateMetadata() {
  return portalMetadata(getPortal(SLUG));
}

export default async function DemoPage() {
  const portal = getPortal(SLUG);
  if (!portal) notFound();
  return <PortalPage slug={SLUG} portal={portal} />;
}
