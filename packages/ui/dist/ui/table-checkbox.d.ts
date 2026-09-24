import { type InputHTMLAttributes } from "react";
type TableCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className"> & {
    indeterminate?: boolean;
};
/** Custom selection checkbox for DataTable bulk select. */
export declare function TableCheckbox({ indeterminate, checked, disabled, ...props }: TableCheckboxProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=table-checkbox.d.ts.map