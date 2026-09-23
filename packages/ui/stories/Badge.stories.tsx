import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../src";

const meta = {
  title: "Primitives/Badge",
  component: Badge,
  args: {
    children: "Member",
  },
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Member</Badge>
      <Badge>Admin</Badge>
      <Badge>New</Badge>
    </div>
  ),
};
