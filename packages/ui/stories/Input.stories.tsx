import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Input, Label, SearchInput, TextArea } from "../src";

const meta = {
  title: "Primitives/Input",
  component: Input,
  args: {
    placeholder: "you@example.com",
    size: "md",
    disabled: false,
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  argTypes: {
    size: { control: "select", options: ["md", "sm"] },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    value: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: "sm", placeholder: "Search…" },
};

export const Disabled: Story = {
  args: { disabled: true, value: "Locked value" },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="max-w-sm">
      <Label>Email</Label>
      <Input {...args} />
    </div>
  ),
};

export const TextAreaField: Story = {
  parameters: { controls: { include: ["placeholder", "disabled"] } },
  render: (args) => (
    <div className="max-w-md">
      <Label>Notes</Label>
      <TextArea
        placeholder={(args.placeholder as string) || "Add a note…"}
        disabled={args.disabled}
        onChange={fn()}
      />
    </div>
  ),
};

export const Search: Story = {
  render: (args) => (
    <div className="max-w-sm">
      <Label>Search</Label>
      <SearchInput
        placeholder="Find a member…"
        size={args.size}
        disabled={args.disabled}
        onChange={fn()}
      />
    </div>
  ),
};
