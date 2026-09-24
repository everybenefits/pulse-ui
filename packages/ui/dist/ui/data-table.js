"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = DataTable;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_table_1 = require("@tanstack/react-table");
const button_1 = require("./button");
const data_table_skeleton_1 = require("./data-table-skeleton");
const table_checkbox_1 = require("./table-checkbox");
const utils_1 = require("../lib/utils");
function DataTable({ columns, data, loading = false, isFetching = false, emptyTitle, emptyHint, emptyMessage = "No results.", toolbar, bulkBar, pageSize = 25, canPreviousPage = false, canNextPage = false, onPreviousPage, onNextPage, onPageSizeChange, pageSizeOptions = [25, 50], getRowId, skeletonRows = 8, previousLabel = "Previous", nextLabel = "Next", rowsLabel = "Rows", enableRowSelection = false, canSelectRow, rowSelection, onRowSelectionChange, className = "", tableClassName = "", }) {
    const selectionColumn = (0, react_1.useMemo)(() => {
        if (!enableRowSelection)
            return null;
        return {
            id: "__select",
            size: 44,
            header: ({ table }) => ((0, jsx_runtime_1.jsx)(table_checkbox_1.TableCheckbox, { "aria-label": "Select all on page", checked: table.getIsAllPageRowsSelected(), indeterminate: table.getIsSomePageRowsSelected(), onChange: table.getToggleAllPageRowsSelectedHandler() })),
            cell: ({ row }) => ((0, jsx_runtime_1.jsx)(table_checkbox_1.TableCheckbox, { "aria-label": "Select row", checked: row.getIsSelected(), disabled: !row.getCanSelect(), onChange: row.getToggleSelectedHandler() })),
        };
    }, [enableRowSelection]);
    const allColumns = (0, react_1.useMemo)(() => {
        if (!selectionColumn)
            return columns;
        return [selectionColumn, ...columns];
    }, [columns, selectionColumn]);
    const table = (0, react_table_1.useReactTable)({
        data,
        columns: allColumns,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getRowId: getRowId ? (row) => getRowId(row) : undefined,
        manualPagination: true,
        enableRowSelection: enableRowSelection
            ? (row) => canSelectRow?.(row.original) ?? true
            : false,
        onRowSelectionChange,
        state: enableRowSelection
            ? { rowSelection: rowSelection ?? {} }
            : undefined,
    });
    const showPagination = Boolean(onPreviousPage || onNextPage || onPageSizeChange);
    const showInitialSkeleton = loading && data.length === 0;
    const rows = table.getRowModel().rows;
    const selectedCount = enableRowSelection
        ? Object.keys(rowSelection ?? {}).filter((k) => rowSelection?.[k]).length
        : 0;
    const colCount = allColumns.length;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("studio-panel overflow-hidden rounded-2xl", className), children: [toolbar ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-end gap-3 border-b border-glass-border px-3 py-3 sm:px-4", children: [toolbar, isFetching && !showInitialSkeleton ? ((0, jsx_runtime_1.jsx)("span", { className: "mb-3 ml-auto h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-brand/30 border-t-brand", "aria-label": "Refreshing" })) : null] })) : null, bulkBar && selectedCount > 0 ? ((0, jsx_runtime_1.jsx)("div", { className: "border-b border-brand/15 bg-gradient-to-r from-brand/[0.09] via-brand/[0.05] to-transparent px-3 py-3 sm:px-4", children: bulkBar })) : null, (0, jsx_runtime_1.jsx)("div", { className: "relative max-h-[min(70vh,44rem)] overflow-auto", children: (0, jsx_runtime_1.jsxs)("table", { className: (0, utils_1.cn)("w-full min-w-[40rem] border-separate border-spacing-0 text-left text-xs", tableClassName), children: [(0, jsx_runtime_1.jsx)("thead", { className: "sticky top-0 z-10", children: table.getHeaderGroups().map((hg) => ((0, jsx_runtime_1.jsx)("tr", { children: hg.headers.map((header) => ((0, jsx_runtime_1.jsx)("th", { className: `border-b border-glass-border bg-sheet/95 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-muted backdrop-blur-sm ${header.id === "__select" ? "w-9 px-1" : "px-3"}`, children: header.isPlaceholder
                                        ? null
                                        : (0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext()) }, header.id))) }, hg.id))) }), (0, jsx_runtime_1.jsx)("tbody", { children: showInitialSkeleton ? ((0, jsx_runtime_1.jsx)(data_table_skeleton_1.DataTableSkeleton, { columns: colCount, rows: skeletonRows })) : rows.length === 0 ? ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsxs)("td", { colSpan: colCount, className: "px-3 py-10 text-center", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-xs font-semibold text-ink", children: emptyTitle ?? emptyMessage }), emptyHint ? ((0, jsx_runtime_1.jsx)("p", { className: "mx-auto mt-1 max-w-sm text-[11px] text-muted", children: emptyHint })) : null] }) })) : (rows.map((row, rowIndex) => ((0, jsx_runtime_1.jsx)("tr", { className: `transition-colors hover:bg-ink/[0.03] dark:hover:bg-white/[0.035] ${row.getIsSelected() ? "bg-brand/[0.04]" : ""} ${rowIndex < rows.length - 1
                                    ? "shadow-[inset_0_-1px_0_0_var(--glass-border)]"
                                    : ""}`, children: row.getVisibleCells().map((cell) => ((0, jsx_runtime_1.jsx)("td", { className: `py-1.5 align-middle ${cell.column.id === "__select" ? "w-9 px-1" : "px-3"}`, children: (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id)))) })] }) }), showPagination ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-glass-border px-3 py-1.5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 text-[11px] text-muted", children: [(0, jsx_runtime_1.jsx)("span", { children: rowsLabel }), (0, jsx_runtime_1.jsx)("select", { className: "h-7 rounded-md border border-glass-border bg-transparent px-1.5 text-[11px] text-ink", value: pageSize, onChange: (e) => onPageSizeChange?.(Number(e.target.value)), disabled: !onPageSizeChange, children: pageSizeOptions.map((n) => ((0, jsx_runtime_1.jsx)("option", { value: n, children: n }, n))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-1", children: [(0, jsx_runtime_1.jsx)(button_1.Button, { variant: "secondary", size: "sm", disabled: !canPreviousPage || loading, onClick: onPreviousPage, children: previousLabel }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "secondary", size: "sm", disabled: !canNextPage || loading, onClick: onNextPage, children: nextLabel })] })] })) : null] }));
}
