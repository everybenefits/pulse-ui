import { type ReactNode } from "react";
export type PhoneTab = "home" | "chats" | "academy" | "profile";
export type PhoneTabLabels = Record<PhoneTab, string>;
export type PhoneMockProps = {
    children: ReactNode;
    activeTab?: PhoneTab;
    className?: string;
    tabLabels: PhoneTabLabels;
};
export declare function PhoneMock({ children, activeTab, className, tabLabels, }: PhoneMockProps): import("react").JSX.Element;
//# sourceMappingURL=phone-mock.d.ts.map