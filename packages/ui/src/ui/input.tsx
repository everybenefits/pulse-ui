"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type ControlSize = "md" | "sm";

const inputSize: Record<ControlSize, string> = {
  md: "h-10 rounded-xl px-3.5 text-sm",
  sm: "h-8 rounded-lg px-2.5 text-xs",
};

export const Input = forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & { size?: ControlSize }
>(function Input({ className = "", size = "md", ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full border border-glass-border bg-sheet text-ink outline-none placeholder:text-muted focus:border-brand",
        inputSize[size],
        className,
      )}
      {...props}
    />
  );
});
