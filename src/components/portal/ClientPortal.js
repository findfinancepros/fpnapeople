"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ReportEmbed = dynamic(() => import("./ReportEmbed"), { ssr: false });

export default function ClientPortal({ client, reports, accent }) {
  const [active, setActive] = useState(reports[0]?.key);
  const [cfg, setCfg] = useState(null);
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);
  const reportRef = useRef(null);

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

  const goFullScreen = () => {
    try {
      reportRef.current?.fullscreen();
    } catch {
      /* the browser blocked full screen; nothing else to do */
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
                  ? { background: "#1C3422", color: "#FBF0E2", borderColor: "#1C3422" }
                  : { background: "#FFFBF4", color: "#1C3422", borderColor: "#DDD7C9" }
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
          className="inline-flex items-center gap-2 rounded-sm border border-[#1C3422]/30 bg-[#FFFBF4] px-4 py-2 text-sm text-[#1C3422] transition-colors hover:bg-[#1C3422]/5 disabled:opacity-40"
          title="View the report full screen. Press Esc to exit."
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
          </svg>
          Full screen
        </button>
      </div>
      <div className="mt-4 overflow-hidden rounded-md border border-[#DDD7C9] bg-white" style={{ borderTop: `3px solid ${accent}` }}>
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
