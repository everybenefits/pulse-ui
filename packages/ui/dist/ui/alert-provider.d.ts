import { type ReactNode } from "react";
export type AlertKind = "success" | "error" | "info" | "warning";
export type ToastInput = {
    kind?: AlertKind;
    title: string;
    description?: string;
    durationMs?: number;
};
export type ToastItem = {
    id: string;
    kind: AlertKind;
    title: string;
    description?: string;
    durationMs: number;
};
export type ConfirmInput = {
    title: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    danger?: boolean;
};
export type ConfirmState = ConfirmInput & {
    id: string;
};
type AlertsApi = {
    show: (input: ToastInput) => string;
    success: (title: string, description?: string) => string;
    error: (title: string, description?: string) => string;
    info: (title: string, description?: string) => string;
    warning: (title: string, description?: string) => string;
    dismiss: (id: string) => void;
    confirm: (input: ConfirmInput) => Promise<boolean>;
};
export type AlertProviderProps = {
    children: ReactNode;
    labels?: {
        dismiss?: string;
        cancel?: string;
        confirm?: string;
    };
};
export declare function AlertProvider({ children, labels }: AlertProviderProps): import("react").JSX.Element;
export declare function useAlerts(): AlertsApi;
export {};
//# sourceMappingURL=alert-provider.d.ts.map