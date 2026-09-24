import { type ReactNode, type RefObject } from "react";
type Props = {
    open: boolean;
    onClose: () => void;
    anchorRef: RefObject<HTMLElement | null>;
    children: ReactNode;
    id?: string;
    role?: string;
    /** Minimum panel width; grows to match the trigger when the trigger is wider. */
    minWidth?: number;
    className?: string;
    "aria-label"?: string;
};
/**
 * Fixed-position popover on document.body so overflow-hidden ancestors
 * cannot clip search lists (country codes, agencies, address suggestions).
 */
export declare function AnchoredPopover({ open, onClose, anchorRef, children, id, role, minWidth, className, "aria-label": ariaLabel, }: Props): import("react").ReactPortal | null;
export {};
//# sourceMappingURL=anchored-popover.d.ts.map