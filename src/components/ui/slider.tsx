// Slider component removed — @radix-ui/react-slider is uninstalled.
// Keeping a minimal placeholder export to avoid import-time errors in case any
// other modules still import `Slider`.

import * as React from "react";

export const Slider: React.FC<{ className?: string }> = ({ children }) => {
  return <div className="hidden" aria-hidden>{children}</div>;
};
