import type { Meta, StoryObj } from "@storybook/react-vite";
import { RoleBadge, StatusBadge, UserCell } from "../src";

const meta = {
  title: "Data/TableCells",
  component: UserCell,
  args: {
    name: "Alex Rivera",
    email: "alex@pulse.example",
    photoUrl: null,
  },
  argTypes: {
    name: { control: "text" },
    email: { control: "text" },
    photoUrl: { control: "text" },
  },
} satisfies Meta<typeof UserCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const User: Story = {};

export const Badges: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <RoleBadge>Admin</RoleBadge>
      <StatusBadge tone="neutral">Draft</StatusBadge>
      <StatusBadge tone="success">Active</StatusBadge>
      <StatusBadge tone="warning">Pending</StatusBadge>
      <StatusBadge tone="danger">Suspended</StatusBadge>
    </div>
  ),
};
