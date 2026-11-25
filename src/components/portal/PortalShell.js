import SignOutButton from "@/components/portal/SignOutButton";

const SERIF = { fontFamily: "Georgia, 'Times New Roman', serif" };

// Bear & Bison colours. A portal can override any of these with its own `theme`.
export const DEFAULT_THEME = {
  bg: "#FBF0E2",
  text: "#0C1F17",
  heading: "#1C3422",
  muted: "#465B51",
  border: "#DDD7C9",
  tabBg: "#FFFBF4",
  tabText: "#1C3422",
  tabActiveBg: "#1C3422",
  tabActiveText: "#FBF0E2",
  button: "#1C3422",
  buttonText: "#FBF0E2",
  serif: SERIF.fontFamily,
  sans: null,
  credit: "Reporting platform prepared by FPnA People Inc.",
};

export function themeOf(portal) {
  return { ...DEFAULT_THEME, ...(portal?.theme || {}) };
}

// Client-branded page frame: client logo and name at the top, one FPnA credit line at the bottom.
export default function PortalShell({ portal, signOutUrl, email, children }) {
  const t = themeOf(portal);
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ background: t.bg, color: t.text, ...(t.sans ? { fontFamily: t.sans } : {}) }}
    >
      <header className="border-b" style={{ borderColor: t.border }}>
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-6 px-6 py-6 md:px-10">
          <div className="flex items-center gap-5">
            {portal.wordmark ? (
              <span className="text-3xl md:text-4xl" style={{ fontFamily: t.serif, color: t.heading }}>
                FPnA <span style={{ color: portal.accent }}>People</span>
              </span>
            ) : (
              <img src={portal.logo} alt={`${portal.name} logo`} className="h-16 w-auto md:h-20" />
            )}
            <div className={portal.wordmark ? "border-l pl-5" : undefined} style={portal.wordmark ? { borderColor: t.border } : undefined}>
              {portal.wordmark ? null : (
                <h1 className="text-2xl md:text-3xl" style={{ fontFamily: t.serif, color: t.heading }}>{portal.name}</h1>
              )}
              <p className="text-sm" style={{ color: t.muted }}>{portal.subtitle}</p>
            </div>
          </div>
          {email ? (
            <div className="flex items-center gap-4 text-sm" style={{ color: t.muted }}>
              <span>{email}</span>
              <SignOutButton callbackUrl={signOutUrl} color={t.heading} />
            </div>
          ) : null}
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="mx-auto w-full max-w-[1600px] px-6 py-6 text-center text-xs md:px-10" style={{ color: t.muted }}>
        {portal.disclaimer ? <p>{portal.disclaimer}</p> : null}
        <p className="mt-1">{t.credit}</p>
      </footer>
    </div>
  );
}

export { SERIF };
