"use client";

import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("pulse-sheet p-4", className)}>{children}</div>;
}
