type ControlSize = "md" | "sm";
export declare function CountryCodeSelect({ value, iso2, onChange, disabled, size, locale, labels, }: {
    value: string;
    iso2?: string | null;
    onChange: (dialCode: string, nextIso2: string) => void;
    disabled?: boolean;
    size?: ControlSize;
    locale?: string;
    labels?: {
        title?: string;
        search?: string;
        empty?: string;
    };
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=country-code-select.d.ts.map