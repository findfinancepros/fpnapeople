import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import { authOptions, hasRole } from "@/lib/auth";
import { getPortal } from "@/data/portals";
import ClientPortal from "@/components/portal/ClientPortal";
import SignOutButton from "@/components/portal/SignOutButton";

export const dynamic = "force-dynamic";
export const metadata = { robots: { index: false, follow: false } };

export default async function ClientPortalPage({ params }) {
  const portal = getPortal(params.client);
  if (!portal) notFound();

  const session = await getServerSession(authOptions);
  if (!session) redirect(`/clients?callbackUrl=/clients/${params.client}`);

  if (!hasRole(session, portal.role)) {
    return (
      <section className="container-x py-24">
        <h1 className="heading-serif text-3xl">No access</h1>
        <p className="mt-4 max-w-xl text-cream-200/80">
          You are signed in as {session.user.email}, but this reporting has not been shared with that email.
          Please contact the person who invited you.
        </p>
        <div className="mt-8"><SignOutButton /></div>
      </section>
    );
  }

  const reports = portal.reports
    .filter((r) => r.reportId)
    .map(({ key, title, description }) => ({ key, title, description }));

  return (
    <section className="bg-[#FBF0E2] pb-12 text-[#0C1F17]">
      <div className="container-x flex flex-wrap items-center justify-between gap-6 pt-10">
        <div className="flex items-center gap-5">
          <img src={portal.logo} alt={`${portal.name} logo`} className="h-20 w-auto" />
          <div>
            <h1 className="font-serif text-3xl text-[#1C3422]">{portal.name}</h1>
            <p className="text-sm text-[#465B51]">{portal.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-[#465B51]">
          <span>{session.user.email}</span>
          <SignOutButton light />
        </div>
      </div>
      <ClientPortal client={params.client} reports={reports} accent={portal.accent} />
      <p className="container-x mt-6 text-xs text-[#465B51]">
        {portal.disclaimer} Reporting platform prepared by FPnA People Inc.
      </p>
    </section>
  );
}
