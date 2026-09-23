import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { fn } from "storybook/test";
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import {
  BulkActionButton,
  BulkBarShell,
  BulkField,
  BulkSelect,
  DataTable,
  RoleBadge,
  RowActionButton,
  RowActions,
  StatusBadge,
  UserCell,
} from "../src";

type Row = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "invited" | "disabled";
};

const ROWS: Row[] = [
  {
    id: "1",
    name: "Alex Rivera",
    email: "alex@pulse.example",
    role: "Admin",
    status: "active",
  },
  {
    id: "2",
    name: "Blake Chen",
    email: "blake@pulse.example",
    role: "Member",
    status: "invited",
  },
  {
    id: "3",
    name: "Casey Ng",
    email: "casey@pulse.example",
    role: "Owner",
    status: "active",
  },
  {
    id: "4",
    name: "Dana Ortiz",
    email: "dana@pulse.example",
    role: "Member",
    status: "disabled",
  },
];

const columns: ColumnDef<Row, unknown>[] = [
  {
    accessorKey: "name",
    header: "User",
    cell: ({ row }) => (
      <UserCell name={row.original.name} email={row.original.email} />
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ getValue }) => <RoleBadge>{String(getValue())}</RoleBadge>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = String(getValue()) as Row["status"];
      const tone =
        status === "active"
          ? "success"
          : status === "invited"
            ? "warning"
            : "danger";
      return <StatusBadge tone={tone}>{status}</StatusBadge>;
    },
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <RowActions>
        <RowActionButton onClick={fn()}>Edit</RowActionButton>
        <RowActionButton variant="danger" onClick={fn()}>
          Remove
        </RowActionButton>
      </RowActions>
    ),
  },
];

const meta = {
  title: "Data/DataTable",
  component: DataTable,
  args: {
    columns,
    data: ROWS,
    emptyTitle: "No users yet",
    emptyHint: "Invite teammates to get started.",
    loading: false,
    enableRowSelection: true,
    skeletonRows: 6,
    onPreviousPage: fn(),
    onNextPage: fn(),
    onPageSizeChange: fn(),
  },
  argTypes: {
    loading: { control: "boolean" },
    enableRowSelection: { control: "boolean" },
    emptyTitle: { control: "text" },
    emptyHint: { control: "text" },
    skeletonRows: { control: { type: "number", min: 1, max: 12 } },
    columns: { control: false },
    data: { control: false },
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof DataTable<Row>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSelection: Story = {
  args: {},
  render: function SelectionStory(args) {
    const [selection, setSelection] = useState<RowSelectionState>({});
    const selectedCount = Object.keys(selection).filter((k) => selection[k])
      .length;
    return (
      <DataTable
        {...args}
        columns={columns}
        data={ROWS}
        getRowId={(row) => row.id}
        rowSelection={selection}
        onRowSelectionChange={(updater) => {
          setSelection(updater);
          fn()(updater);
        }}
        pageSize={25}
        canPreviousPage={false}
        canNextPage={false}
        toolbar={<p className="text-xs text-muted">Demo roster</p>}
        bulkBar={
          <BulkBarShell
            selectedCount={selectedCount}
            selectedLabel={`${selectedCount} selected`}
            clearLabel="Clear"
            onClear={() => {
              setSelection({});
              fn()("clear");
            }}
          >
            <BulkField label="Role">
              <BulkSelect defaultValue="member" onChange={fn()}>
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </BulkSelect>
            </BulkField>
            <BulkActionButton variant="primary" onClick={fn()}>
              Apply
            </BulkActionButton>
          </BulkBarShell>
        }
      />
    );
  },
};

export const Loading: Story = {
  args: { loading: true, data: [] },
  render: (args) => <DataTable {...args} />,
};

export const Empty: Story = {
  args: { data: [] },
  render: (args) => <DataTable {...args} />,
};
