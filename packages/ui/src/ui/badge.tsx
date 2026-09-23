"use client";

import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-md bg-brand/14 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
      {children}
    </span>
  );
}
