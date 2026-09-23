import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Avatar, Badge, Button, Panel } from "../src";

const meta = {
  title: "Primitives/Panel",
  component: Panel,
  args: {
    className: "max-w-md space-y-3",
    children: (
      <>
        <div className="flex items-center gap-3">
          <Avatar name="Alex Rivera" />
          <div>
            <p className="font-display text-sm font-semibold text-ink">
              Alex Rivera
            </p>
            <p className="text-xs text-muted">Agency owner</p>
          </div>
          <Badge>Active</Badge>
        </div>
        <p className="text-sm text-muted">
          Shared panel surface using the canonical Pulse sheet token.
        </p>
        <Button size="sm" onClick={fn()}>
          View profile
        </Button>
      </>
    ),
  },
  argTypes: {
    className: { control: "text" },
    children: { control: false },
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
