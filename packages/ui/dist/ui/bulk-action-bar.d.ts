import { type ButtonHTMLAttributes, type ReactNode, type SelectHTMLAttributes } from "react";
export declare function BulkBarShell({ selectedCount, selectedLabel, maxHint, busy, busyLabel, clearLabel, onClear, children, }: {
    selectedCount: number;
    selectedLabel: string;
    maxHint?: string | null;
    busy?: boolean;
    busyLabel?: string;
    clearLabel: string;
    onClear: () => void;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function BulkField({ label, children, }: {
    label: string;
    children: ReactNode;
}): import("react").JSX.Element;
export declare const BulkSelect: import("react").ForwardRefExoticComponent<SelectHTMLAttributes<HTMLSelectElement> & import("react").RefAttributes<HTMLSelectElement>>;
export declare const BulkActionButton: import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger";
} & import("react").RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=bulk-action-bar.d.ts.map