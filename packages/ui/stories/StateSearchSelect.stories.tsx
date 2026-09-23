import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";
import { Label, StateSearchSelect } from "../src";

const meta = {
  title: "Forms/StateSearchSelect",
  component: StateSearchSelect,
  args: {
    value: "CA",
    placeholder: "Search state…",
    emptyLabel: "No states available",
    disabled: false,
    onChange: fn(),
  },
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    emptyLabel: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof StateSearchSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function StateStory(args) {
    const [, setArgs] = useArgs();
    return (
      <div className="max-w-xs space-y-2">
        <Label>State</Label>
        <StateSearchSelect
          {...args}
          onChange={(code) => {
            args.onChange?.(code);
            setArgs({ value: code });
          }}
        />
        <p className="text-xs text-muted">
          Selected: {args.value || "(none)"}
        </p>
      </div>
    );
  },
};
