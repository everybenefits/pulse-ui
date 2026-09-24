import { type ReactNode } from "react";
import { type ColumnDef, type OnChangeFn, type RowSelectionState } from "@tanstack/react-table";
export type DataTableProps<T> = {
    columns: ColumnDef<T, unknown>[];
    data: T[];
    loading?: boolean;
    /** Keep previous rows visible while refetching (stale-while-revalidate). */
    isFetching?: boolean;
    emptyTitle?: string;
    emptyHint?: string;
    emptyMessage?: string;
    toolbar?: ReactNode;
    /** Rendered above the table when at least one row is selected. */
    bulkBar?: ReactNode;
    pageSize?: number;
    canPreviousPage?: boolean;
    canNextPage?: boolean;
    onPreviousPage?: () => void;
    onNextPage?: () => void;
    onPageSizeChange?: (size: number) => void;
    pageSizeOptions?: number[];
    getRowId?: (row: T) => string;
    skeletonRows?: number;
    previousLabel?: string;
    nextLabel?: string;
    rowsLabel?: string;
    enableRowSelection?: boolean;
    canSelectRow?: (row: T) => boolean;
    rowSelection?: RowSelectionState;
    onRowSelectionChange?: OnChangeFn<RowSelectionState>;
    /** Outer wrapper classes (default: studio-panel). */
    className?: string;
    /** `<table>` classes — override default min-width for compact embeds. */
    tableClassName?: string;
};
export declare function DataTable<T>({ columns, data, loading, isFetching, emptyTitle, emptyHint, emptyMessage, toolbar, bulkBar, pageSize, canPreviousPage, canNextPage, onPreviousPage, onNextPage, onPageSizeChange, pageSizeOptions, getRowId, skeletonRows, previousLabel, nextLabel, rowsLabel, enableRowSelection, canSelectRow, rowSelection, onRowSelectionChange, className, tableClassName, }: DataTableProps<T>): import("react").JSX.Element;
//# sourceMappingURL=data-table.d.ts.map