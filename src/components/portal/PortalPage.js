import { getServerSession } from "next-auth";
import { authOptions, hasRole } from "@/lib/auth";
import { portalPath } from "@/data/portals";
import ClientPortal from "@/components/portal/ClientPortal";
import PortalShell, { themeOf } from "@/components/portal/PortalShell";
import SignInButton from "@/components/portal/SignInButton";
import SignOutButton from "@/components/portal/SignOutButton";

const DEFAULT_SIGN_IN_TEXT =
  "Sign in with the email address and password provided to you. If you have forgotten your password, choose “Forgot password?” on the next screen.";

export function portalMetadata(portal) {
  if (!portal) return { robots: { index: false, follow: false } };
  return {
    title: { absolute: portal.pageTitle || `${portal.name} | LP Reporting` },
    description: `${portal.name} LP reporting portal.`,
    robots: { index: false, follow: false },
    icons: { icon: portal.logo, shortcut: portal.logo, apple: portal.logo },
    openGraph: null,
    twitter: null,
  };
}

// The whole portal page: sign-in screen, access-pending screen, or the reports.
export default async function PortalPage({ slug, portal }) {
  const t = themeOf(portal);
  const path = portalPath(slug);
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <PortalShell portal={portal} signOutUrl={path}>
        <section className="mx-auto flex min-h-[55vh] max-w-2xl flex-col justify-center px-6 py-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: portal.accent }}>
            {portal.eyebrow || "LP reporting portal"}
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontFamily: t.serif, color: t.heading }}>
            Sign in to view your reports
          </h2>
          <p className="mt-6" style={{ color: t.muted }}>{portal.signInText || DEFAULT_SIGN_IN_TEXT}</p>
          <div className="mt-10">
            <SignInButton callbackUrl={path} provider={portal.provider || "fpna-clients"} color={t.button} textColor={t.buttonText} />
          </div>
          <p className="mt-10 text-xs" style={{ color: `color-mix(in srgb, ${t.muted} 80%, transparent)` }}>
            Access is by invitation only. Sign-in is handled by Microsoft Entra and reports are delivered through Microsoft Power BI.
          </p>
        </section>
      </PortalShell>
    );
  }

  if (!hasRole(session, portal.role)) {
    return (
      <PortalShell portal={portal} signOutUrl={path} email={session.user.email}>
        <section className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h2 className="text-3xl" style={{ fontFamily: t.serif, color: t.heading }}>Access pending</h2>
          <p className="mt-4" style={{ color: t.muted }}>
            You are signed in as {session.user.email}, but this reporting has not been shared with that email yet.
            Please contact the person who invited you.
          </p>
          <div className="mt-8"><SignOutButton callbackUrl={path} color={t.heading} /></div>
        </section>
      </PortalShell>
    );
  }

  const reports = portal.reports
    .filter((r) => r.reportId)
    .map(({ key, title, description }) => ({ key, title, description }));

  return (
    <PortalShell portal={portal} signOutUrl={path} email={session.user.email}>
      <ClientPortal client={slug} reports={reports} accent={portal.accent} theme={portal.theme} />
    </PortalShell>
  );
}
