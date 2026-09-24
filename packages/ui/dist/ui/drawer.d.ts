import type { ReactNode } from "react";
export declare function Drawer({ open, title, subtitle, onClose, children, footer, closeLabel, }: {
    open: boolean;
    title: string;
    subtitle?: string;
    onClose: () => void;
    children: ReactNode;
    footer?: ReactNode;
    closeLabel?: string;
}): import("react").JSX.Element | null;
//# sourceMappingURL=drawer.d.ts.map