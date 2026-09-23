import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "../src";

const meta = {
  title: "Primitives/Button",
  component: Button,
  args: {
    children: "Continue",
    variant: "primary",
    size: "md",
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
    },
    size: { control: "select", options: ["md", "sm"] },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /continue/i });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Cancel" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Skip" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "Delete" },
};

export const Small: Story = {
  args: { size: "sm", children: "Save" },
};

export const Disabled: Story = {
  args: { disabled: true, children: "Unavailable" },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" onClick={fn()}>
        Primary
      </Button>
      <Button variant="secondary" onClick={fn()}>
        Secondary
      </Button>
      <Button variant="ghost" onClick={fn()}>
        Ghost
      </Button>
      <Button variant="danger" onClick={fn()}>
        Danger
      </Button>
      <Button size="sm" onClick={fn()}>
        Small
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
