import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";
import { SearchInput } from "../src";

const meta = {
  title: "Primitives/SearchInput",
  component: SearchInput,
  args: {
    placeholder: "Search users…",
    size: "md",
    value: "",
    disabled: false,
    onChange: fn(),
  },
  argTypes: {
    size: { control: "select", options: ["md", "sm"] },
    placeholder: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Controlled: Story = {
  render: function ControlledSearch(args) {
    const [, setArgs] = useArgs();
    return (
      <SearchInput
        {...args}
        onChange={(e) => {
          args.onChange?.(e);
          setArgs({ value: e.target.value });
        }}
      />
    );
  },
};
