import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";
import { Button, Drawer, Input, Label } from "../src";

const meta = {
  title: "Overlays/Drawer",
  component: Drawer,
  args: {
    open: true,
    title: "Edit user",
    subtitle: "Update profile details",
    closeLabel: "Close",
    onClose: fn(),
    children: (
      <div className="space-y-3">
        <div>
          <Label>Name</Label>
          <Input defaultValue="Alex Rivera" onChange={fn()} />
        </div>
        <div>
          <Label>Email</Label>
          <Input defaultValue="alex@example.com" onChange={fn()} />
        </div>
      </div>
    ),
  },
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    subtitle: { control: "text" },
    closeLabel: { control: "text" },
    children: { control: false },
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: function DrawerStory(args) {
    const [, setArgs] = useArgs();
    const close = () => {
      args.onClose?.();
      setArgs({ open: false });
    };
    return (
      <div className="p-6">
        <Button onClick={() => setArgs({ open: true })}>Open drawer</Button>
        <Drawer
          {...args}
          onClose={close}
          footer={
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={close}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  fn()();
                  close();
                }}
              >
                Save
              </Button>
            </div>
          }
        />
      </div>
    );
  },
};
