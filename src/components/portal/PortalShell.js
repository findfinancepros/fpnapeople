import SignOutButton from "@/components/portal/SignOutButton";

const SERIF = { fontFamily: "Georgia, 'Times New Roman', serif" };

// Client-branded page frame: client logo and name at the top, one FPnA credit line at the bottom.
export default function PortalShell({ portal, slug, email, children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBF0E2] text-[#0C1F17]">
      <header className="border-b border-[#DDD7C9]">
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-6 px-6 py-6 md:px-10">
          <div className="flex items-center gap-5">
            <img src={portal.logo} alt={`${portal.name} logo`} className="h-16 w-auto md:h-20" />
            <div>
              <h1 className="text-2xl text-[#1C3422] md:text-3xl" style={SERIF}>{portal.name}</h1>
              <p className="text-sm text-[#465B51]">{portal.subtitle}</p>
            </div>
          </div>
          {email ? (
            <div className="flex items-center gap-4 text-sm text-[#465B51]">
              <span>{email}</span>
              <SignOutButton callbackUrl={`/clients/${slug}`} />
            </div>
          ) : null}
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="mx-auto w-full max-w-[1600px] px-6 py-6 text-center text-xs text-[#465B51] md:px-10">
        {portal.disclaimer ? <p>{portal.disclaimer}</p> : null}
        <p className="mt-1">Reporting platform prepared by FPnA People Inc.</p>
      </footer>
    </div>
  );
}

export { SERIF };
