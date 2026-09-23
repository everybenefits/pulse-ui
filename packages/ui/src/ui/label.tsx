"use client";

import type { ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
  return (
    <label className="mb-1 block text-xs font-medium tracking-wide text-muted">
      {children}
    </label>
  );
}
