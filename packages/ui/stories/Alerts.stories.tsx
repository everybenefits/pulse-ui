import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { AlertProvider, useAlerts, Button } from "../src";

function AlertsDemo({
  successTitle,
  successDescription,
}: {
  successTitle: string;
  successDescription: string;
}) {
  const alerts = useAlerts();
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        size="sm"
        onClick={() => {
          fn()("success");
          alerts.success(successTitle, successDescription);
        }}
      >
        Success
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => {
          fn()("info");
          alerts.info("Tip", "Use bulk select for batch edits.");
        }}
      >
        Info
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => {
          fn()("warning");
          alerts.warning("Quota", "You are nearing your invite limit.");
        }}
      >
        Warning
      </Button>
      <Button
        size="sm"
        variant="danger"
        onClick={() => {
          fn()("error");
          alerts.error("Failed", "Could not sync roster.");
        }}
      >
        Error
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={async () => {
          fn()("confirm-open");
          const ok = await alerts.confirm({
            title: "Delete user?",
            description: "This cannot be undone.",
            danger: true,
            confirmLabel: "Delete",
          });
          fn()(ok ? "confirm-yes" : "confirm-no");
          if (ok) alerts.success("Deleted");
        }}
      >
        Confirm
      </Button>
    </div>
  );
}

const meta = {
  title: "Feedback/Alerts",
  component: AlertsDemo,
  args: {
    successTitle: "Saved",
    successDescription: "Your changes were published.",
  },
  argTypes: {
    successTitle: { control: "text" },
    successDescription: { control: "text" },
  },
  decorators: [
    (Story) => (
      <AlertProvider>
        <Story />
      </AlertProvider>
    ),
  ],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AlertsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
