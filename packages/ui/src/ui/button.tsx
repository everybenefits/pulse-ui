"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type ControlSize = "md" | "sm";

const buttonSize: Record<ControlSize, string> = {
  md: "h-10 rounded-xl px-4 text-sm",
  sm: "h-8 rounded-lg px-2.5 text-xs",
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost" | "danger";
    size?: ControlSize;
  }
>(function Button(
  { variant = "primary", size = "md", className = "", ...props },
  ref,
) {
  const styles = {
    primary:
      "bg-brand text-on-brand hover:brightness-110 disabled:opacity-50",
    secondary:
      "pulse-sheet text-ink hover:bg-white/[0.04] dark:hover:bg-white/[0.04] disabled:opacity-50",
    ghost: "text-ink hover:bg-white/[0.04] disabled:opacity-50",
    danger: "bg-[#B42318] text-white hover:brightness-110 disabled:opacity-50",
  }[variant];
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-1.5 font-semibold transition disabled:cursor-not-allowed",
        buttonSize[size],
        styles,
        className,
      )}
      {...props}
    />
  );
});
