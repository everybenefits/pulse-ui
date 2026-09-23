"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type ControlSize = "md" | "sm";

const searchInputSize: Record<ControlSize, string> = {
  md: "h-10 rounded-xl py-2 pr-3.5 pl-10 text-sm",
  sm: "h-8 rounded-lg py-1.5 pr-3 pl-9 text-xs",
};

export function SearchInput({
  className = "",
  size = "md",
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: ControlSize;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted",
          size === "sm" ? "left-2.5 h-3.5 w-3.5" : "left-3 h-4 w-4",
        )}
      >
        <path
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
        />
      </svg>
      <input
        type="search"
        className={cn(
          "w-full border border-glass-border bg-transparent text-ink outline-none placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/15",
          searchInputSize[size],
        )}
        {...props}
      />
    </div>
  );
}
