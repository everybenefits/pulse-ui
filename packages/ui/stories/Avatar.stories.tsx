import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../src";

const meta = {
  title: "Primitives/Avatar",
  component: Avatar,
  args: {
    name: "Alex Rivera",
    size: 40,
    photoUrl: null,
  },
  argTypes: {
    name: { control: "text" },
    size: { control: { type: "number", min: 20, max: 96, step: 4 } },
    photoUrl: { control: "text" },
    className: { control: "text" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const Large: Story = {
  args: { size: 64, name: "Jordan Lee" },
};

export const Group: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-2">
      <Avatar name="Alex Rivera" size={36} />
      <Avatar name="Blake Chen" size={36} />
      <Avatar name="Casey Ng" size={36} />
    </div>
  ),
};
