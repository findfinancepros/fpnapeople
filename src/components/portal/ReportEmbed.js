"use client";

import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

export default function ReportEmbed({ cfg, onReady }) {
  return (
    <div className="portal-report aspect-[1280/760] w-full">
      <PowerBIEmbed
        embedConfig={{
          type: "report",
          id: cfg.reportId,
          embedUrl: cfg.embedUrl,
          accessToken: cfg.accessToken,
          tokenType: models.TokenType.Embed,
          permissions: models.Permissions.Read,
          settings: {
            panes: { filters: { visible: false }, pageNavigation: { visible: true, position: models.PageNavigationPosition.Left } },
            bars: { actionBar: { visible: false } },
            background: models.BackgroundType.Transparent,
          },
        }}
        getEmbeddedComponent={(report) => {
          onReady?.(report);
        }}
        cssClassName="h-full w-full"
      />
    </div>
  );
}
