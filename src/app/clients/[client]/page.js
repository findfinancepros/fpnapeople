import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions, hasRole } from "@/lib/auth";
import { getPortal } from "@/data/portals";
import ClientPortal from "@/components/portal/ClientPortal";
import PortalShell, { SERIF } from "@/components/portal/PortalShell";
import SignInButton from "@/components/portal/SignInButton";
import SignOutButton from "@/components/portal/SignOutButton";

export const dynamic = "force-dynamic";

export function generateMetadata({ params }) {
  const portal = getPortal(params.client);
  if (!portal) return { robots: { index: false, follow: false } };
  return {
    title: { absolute: `${portal.name} | LP Reporting` },
    description: `${portal.name} LP reporting portal.`,
    robots: { index: false, follow: false },
    icons: { icon: portal.logo, shortcut: portal.logo, apple: portal.logo },
    openGraph: null,
    twitter: null,
  };
}

export default async function ClientPortalPage({ params }) {
  const slug = params.client;
  const portal = getPortal(slug);
  if (!portal) notFound();

  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <PortalShell portal={portal} slug={slug}>
        <section className="mx-auto flex min-h-[55vh] max-w-2xl flex-col justify-center px-6 py-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: portal.accent }}>
            LP reporting portal
          </p>
          <h2 className="mt-4 text-3xl text-[#1C3422] md:text-4xl" style={SERIF}>Sign in to view your reports</h2>
          <p className="mt-6 text-[#465B51]">
            Enter the email address your invitation was sent to. We will email you a one-time code. No password is needed.
          </p>
          <div className="mt-10">
            <SignInButton callbackUrl={`/clients/${slug}`} />
          </div>
          <p className="mt-10 text-xs text-[#465B51]/80">
            Access is by invitation only. Sign-in is handled by Microsoft Entra and reports are delivered through Microsoft Power BI.
          </p>
        </section>
      </PortalShell>
    );
  }

  if (!hasRole(session, portal.role)) {
    return (
      <PortalShell portal={portal} slug={slug} email={session.user.email}>
        <section className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h2 className="text-3xl text-[#1C3422]" style={SERIF}>Access pending</h2>
          <p className="mt-4 text-[#465B51]">
            You are signed in as {session.user.email}, but this reporting has not been shared with that email yet.
            Please contact the person who invited you.
          </p>
          <div className="mt-8"><SignOutButton callbackUrl={`/clients/${slug}`} /></div>
        </section>
      </PortalShell>
    );
  }

  const reports = portal.reports
    .filter((r) => r.reportId)
    .map(({ key, title, description }) => ({ key, title, description }));

  return (
    <PortalShell portal={portal} slug={slug} email={session.user.email}>
      <ClientPortal client={slug} reports={reports} accent={portal.accent} />
    </PortalShell>
  );
}
