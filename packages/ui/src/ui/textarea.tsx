"use client";

import type { TextareaHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export function TextArea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-24 w-full rounded-xl border border-glass-border bg-sheet px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-brand",
        className,
      )}
      {...props}
    />
  );
}
