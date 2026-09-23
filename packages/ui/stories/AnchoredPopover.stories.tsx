import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useRef, useState } from "react";
import { AnchoredPopover, Button } from "../src";

const meta = {
  title: "Overlays/AnchoredPopover",
  component: AnchoredPopover,
  args: {
    open: false,
    minWidth: 220,
    "aria-label": "Demo menu",
    onClose: fn(),
    // Provided by the story render (live ref + menu content).
    anchorRef: { current: null },
    children: null,
  },
  argTypes: {
    open: { control: "boolean" },
    minWidth: { control: { type: "number", min: 0, max: 480, step: 8 } },
    anchorRef: { control: false },
    children: { control: false },
  },
} satisfies Meta<typeof AnchoredPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: function PopoverStory(args) {
    const [open, setOpen] = useState(args.open);
    const anchorRef = useRef<HTMLButtonElement>(null);
    const close = () => {
      args.onClose?.();
      setOpen(false);
    };
    return (
      <div className="p-8">
        <Button
          ref={anchorRef}
          onClick={() => setOpen((v) => !v)}
        >
          Open popover
        </Button>
        <AnchoredPopover
          {...args}
          open={open}
          onClose={close}
          anchorRef={anchorRef}
        >
          <ul className="py-1 text-sm">
            {["Profile", "Settings", "Sign out"].map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="w-full px-3 py-2 text-left text-ink hover:bg-ink/[0.04]"
                  onClick={() => {
                    fn()(item);
                    close();
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </AnchoredPopover>
      </div>
    );
  },
};
