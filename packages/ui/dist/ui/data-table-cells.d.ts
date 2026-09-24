import type { ReactNode } from "react";
import { Button } from "./button";
export declare function UserCell({ name, email, photoUrl, }: {
    name: string;
    email?: string | null;
    photoUrl?: string | null;
}): import("react").JSX.Element;
export declare function RoleBadge({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function StatusBadge({ tone, children, }: {
    tone?: "neutral" | "success" | "warning" | "danger";
    children: ReactNode;
}): import("react").JSX.Element;
export declare function RowActions({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function RowActionButton({ variant, size, className, ...props }: React.ComponentProps<typeof Button> & {
    variant?: "primary" | "secondary" | "ghost" | "danger";
}): import("react").JSX.Element;
//# sourceMappingURL=data-table-cells.d.ts.map