"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReportEmbed = dynamic(() => import("./ReportEmbed"), { ssr: false });

export default function ClientPortal({ client, reports, accent }) {
  const [active, setActive] = useState(reports[0]?.key);
  const [cfg, setCfg] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    setCfg(null);
    setError(null);
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

  return (
    <div className="container-x mt-8">
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
      <div className="mt-4 overflow-hidden rounded-md border border-[#DDD7C9] bg-white" style={{ borderTop: `3px solid ${accent}` }}>
        {error ? (
          <p className="p-10 text-[#9A3A22]">{error}</p>
        ) : cfg ? (
          <ReportEmbed key={cfg.reportId} cfg={cfg} />
        ) : (
          <p className="p-10 text-[#465B51]">Loading report…</p>
        )}
      </div>
    </div>
  );
}
