import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";
import { TableCheckbox } from "../src";

const meta = {
  title: "Data/TableCheckbox",
  component: TableCheckbox,
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
    onChange: fn(),
  },
  argTypes: {
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof TableCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function CheckboxStory(args) {
    const [, setArgs] = useArgs();
    return (
      <label className="flex items-center gap-2 text-sm text-ink">
        <TableCheckbox
          {...args}
          onChange={(e) => {
            args.onChange?.(e);
            setArgs({
              checked: e.target.checked,
              indeterminate: false,
            });
          }}
        />
        Toggle me
      </label>
    );
  },
};

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <label className="flex items-center gap-2 text-sm text-ink">
        <TableCheckbox checked onChange={fn()} />
        Checked
      </label>
      <label className="flex items-center gap-2 text-sm text-ink">
        <TableCheckbox
          checked={false}
          indeterminate
          onChange={fn()}
        />
        Indeterminate
      </label>
      <label className="flex items-center gap-2 text-sm text-muted">
        <TableCheckbox checked disabled />
        Disabled
      </label>
    </div>
  ),
};
