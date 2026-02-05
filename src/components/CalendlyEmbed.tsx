import { useEffect } from "react";
import { SITE } from "@/config/site";

declare global {
  interface Window {
    Calendly?: {
      init?: (...args: unknown[]) => void;
    } | undefined;
  }
}

export default function CalendlyEmbed() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!SITE.calendlyUrl) return null;

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card">
      <div
        className="calendly-inline-widget"
        data-url={SITE.calendlyUrl}
        style={{ minWidth: "320px", height: "780px" }}
      />
    </div>
  );
}
