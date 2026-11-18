import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { portals } from "@/data/portals";
import SignInButton from "@/components/portal/SignInButton";

export const metadata = {
  title: "Client Login",
  description: "Secure client reporting portal for FPnA People Inc. clients.",
  robots: { index: false, follow: false },
};

export default async function ClientsPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const callbackUrl = typeof searchParams?.callbackUrl === "string" ? searchParams.callbackUrl : null;

  if (session) {
    const mine = Object.entries(portals).filter(([, p]) => session.user.roles?.includes(p.role));
    if (callbackUrl?.startsWith("/clients/")) redirect(callbackUrl);
    if (mine.length === 1) redirect(`/clients/${mine[0][0]}`);
    return (
      <section className="container-x py-24">
        <h1 className="heading-serif text-4xl">Your reporting</h1>
        {mine.length === 0 ? (
          <p className="mt-6 max-w-xl text-cream-200/80">
            You are signed in as {session.user.email}, but no reporting has been shared with this email yet.
            Please contact the person who invited you.
          </p>
        ) : (
          <ul className="mt-8 space-y-3">
            {mine.map(([slug, p]) => (
              <li key={slug}>
                <a href={`/clients/${slug}`} className="text-gold-400 hover:text-gold-300">{p.name}</a>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }

  return (
    <section className="container-x flex min-h-[70vh] flex-col justify-center py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-gold-500">Client reporting portal</p>
      <h1 className="heading-serif mt-4 text-4xl md:text-5xl">Sign in to view your reports</h1>
      <p className="mt-6 max-w-xl text-cream-200/80">
        Enter the email address your invitation was sent to. We will email you a one-time code. No password is needed.
      </p>
      <div className="mt-10">
        <SignInButton callbackUrl={callbackUrl || "/clients"} />
      </div>
      <p className="mt-10 max-w-xl text-xs text-cream-200/50">
        Access is by invitation only. Sign-in is handled by Microsoft Entra and reports are delivered through Microsoft Power BI.
      </p>
    </section>
  );
}
