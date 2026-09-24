import type { ConfirmState, ToastItem } from "./alert-provider";
export type AlertLabels = {
    dismiss?: string;
    cancel?: string;
    confirm?: string;
};
export declare function AlertHost({ toasts, onDismiss, confirm, onConfirm, onCancel, labels, }: {
    toasts: ToastItem[];
    onDismiss: (id: string) => void;
    confirm: ConfirmState | null;
    onConfirm: () => void;
    onCancel: () => void;
    labels?: AlertLabels;
}): import("react").JSX.Element;
//# sourceMappingURL=alert-host.d.ts.map