"use client";

import { cn } from "../lib/utils";

export function Avatar({
  name,
  photoUrl,
  size = 36,
  className = "",
}: {
  name: string;
  photoUrl?: string | null;
  size?: number;
  className?: string;
}) {
  const initial = (name.trim() || "U").charAt(0).toUpperCase();
  // Native <img>: Storage emulator URLs use LAN IPs that next/image rejects
  // unless every host is listed in next.config.
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-brand/14 text-brand",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {photoUrl ? (
        <img
          src={photoUrl}
          alt=""
          width={size}
          height={size}
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          className="flex h-full w-full items-center justify-center font-display font-semibold"
          style={{ fontSize: size * 0.36 }}
        >
          {initial}
        </span>
      )}
    </div>
  );
}
