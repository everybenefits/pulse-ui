import { type UsState } from "../data/us-states";
type Props = {
    /** Defaults to the built-in US states list when omitted. */
    states?: readonly UsState[];
    value: string;
    onChange: (code: string) => void;
    placeholder?: string;
    disabled?: boolean;
    emptyLabel?: string;
};
export declare function StateSearchSelect({ states, value, onChange, placeholder, disabled, emptyLabel, }: Props): import("react").JSX.Element;
export {};
//# sourceMappingURL=state-search-select.d.ts.map