"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ReportEmbed = dynamic(() => import("./ReportEmbed"), { ssr: false });

// Bear & Bison colours unless the portal passes its own theme.
const DEFAULTS = {
  bg: "#FBF0E2", muted: "#465B51", border: "#DDD7C9", heading: "#1C3422",
  tabBg: "#FFFBF4", tabText: "#1C3422", tabActiveBg: "#1C3422", tabActiveText: "#FBF0E2",
};

export default function ClientPortal({ client, reports, accent, theme }) {
  const t = { ...DEFAULTS, ...(theme || {}) };
  const [active, setActive] = useState(reports[0]?.key);
  const [cfg, setCfg] = useState(null);
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);
  const reportRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    setCfg(null);
    setError(null);
    setReady(false);
    reportRef.current = null;
    fetch(`/api/clients/${client}/embed/${active}`, { cache: "no-store" })
      .then(async (r) => {
        const body = await r.json();
        if (!r.ok) throw new Error(body.error || "Could not load the report.");
        return body;
      })
      .then((b) => !cancelled && setCfg(b))
      .catch((e) => !cancelled && setError(e.message));
    return () => { cancelled = true; };
  }, [client, active]);

  // Full screen the branded frame (not the bare report) so the report sits on the
  // client's background instead of the browser's default black.
  const goFullScreen = () => {
    const el = frameRef.current;
    if (!el) return;
    const request = el.requestFullscreen || el.webkitRequestFullscreen;
    if (request) {
      Promise.resolve(request.call(el)).catch(() => reportRef.current?.fullscreen());
    } else {
      reportRef.current?.fullscreen();
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1600px] px-6 pt-8 md:px-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {reports.map((r) => (
            <button
              key={r.key}
              onClick={() => setActive(r.key)}
              className="rounded-sm border px-4 py-2 text-sm transition-colors"
              style={
                r.key === active
                  ? { background: t.tabActiveBg, color: t.tabActiveText, borderColor: t.tabActiveBg }
                  : { background: t.tabBg, color: t.tabText, borderColor: t.border }
              }
              title={r.description}
            >
              {r.title}
            </button>
          ))}
        </div>
        <button
          onClick={goFullScreen}
          disabled={!ready}
          className="portal-outline-btn inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-sm transition-colors disabled:opacity-40"
          style={{ background: t.tabBg, color: t.tabText, borderColor: `color-mix(in srgb, ${t.tabText} 30%, transparent)`, "--hover": t.tabText }}
          title="View the report full screen. Press Esc to exit."
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
          </svg>
          Full screen
        </button>
      </div>
      <div
        ref={frameRef}
        className="portal-frame mt-4 overflow-hidden rounded-md border bg-white"
        style={{ borderColor: t.border, borderTop: `3px solid ${accent}`, "--portal-bg": t.bg }}
      >
        {error ? (
          <p className="p-10 text-[#9A3A22]">{error}</p>
        ) : cfg ? (
          <ReportEmbed
            key={cfg.reportId}
            cfg={cfg}
            onReady={(report) => {
              reportRef.current = report;
              report.on("loaded", () => setReady(true));
            }}
          />
        ) : (
          <p className="p-10 text-[#465B51]">Loading report…</p>
        )}
      </div>
    </div>
  );
}
