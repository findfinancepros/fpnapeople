import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { portals } from "@/data/portals";
import SignInButton from "@/components/portal/SignInButton";
import SignOutButton from "@/components/portal/SignOutButton";

export const metadata = {
  title: { absolute: "Client reporting portal" },
  robots: { index: false, follow: false },
};

const SERIF = { fontFamily: "Georgia, 'Times New Roman', serif" };

// Neutral entry point. Clients are normally sent straight to /clients/<slug>, which carries their branding.
export default async function ClientsPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const callbackUrl = typeof searchParams?.callbackUrl === "string" ? searchParams.callbackUrl : null;
  const error = typeof searchParams?.error === "string" ? searchParams.error : null;

  if (session) {
    const mine = Object.entries(portals).filter(([, p]) => session.user.roles?.includes(p.role));
    if (callbackUrl?.startsWith("/clients/")) redirect(callbackUrl);
    if (mine.length === 1) redirect(`/clients/${mine[0][0]}`);
    return (
      <section className="flex min-h-screen flex-col items-center justify-center bg-[#F7F4EE] px-6 text-center text-[#1F2A24]">
        <h1 className="text-3xl" style={SERIF}>Your reporting</h1>
        {mine.length === 0 ? (
          <p className="mt-6 max-w-xl text-[#4B5650]">
            You are signed in as {session.user.email}, but no reporting has been shared with this email yet.
            Please contact the person who invited you.
          </p>
        ) : (
          <ul className="mt-8 space-y-3">
            {mine.map(([slug, p]) => (
              <li key={slug}><a href={`/clients/${slug}`} className="underline">{p.name}</a></li>
            ))}
          </ul>
        )}
        <div className="mt-8"><SignOutButton /></div>
      </section>
    );
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#F7F4EE] px-6 text-center text-[#1F2A24]">
      <h1 className="text-3xl md:text-4xl" style={SERIF}>Sign in to view your reports</h1>
      {error ? (
        <p className="mt-6 max-w-xl text-[#9A3A22]">Sign-in did not complete. Please try again.</p>
      ) : null}
      <p className="mt-6 max-w-xl text-[#4B5650]">
        Sign in with the email address and password provided to you.
      </p>
      <div className="mt-10">
        <SignInButton callbackUrl={callbackUrl || "/clients"} />
      </div>
    </section>
  );
}
