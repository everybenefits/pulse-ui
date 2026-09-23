import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "../src";
import {
  AcademyPageSkeleton,
  AccountPageSkeleton,
  CardListSkeleton,
  ChatInboxSkeleton,
  ConversationSkeleton,
  CourseGridSkeleton,
  FeedPageSkeleton,
  PageContentSkeleton,
  TablePageSkeleton,
} from "../src";

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  args: {
    className: "h-10 w-48",
  },
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const PageContent: Story = {
  parameters: { controls: { disable: true } },
  render: () => <PageContentSkeleton rows={4} />,
};

export const Feed: Story = {
  parameters: { controls: { disable: true } },
  render: () => <FeedPageSkeleton />,
};

export const ChatInbox: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ChatInboxSkeleton />,
};

export const Conversation: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div className="h-[28rem] overflow-hidden rounded-2xl border border-glass-border">
      <ConversationSkeleton />
    </div>
  ),
};

export const Academy: Story = {
  parameters: { controls: { disable: true } },
  render: () => <AcademyPageSkeleton />,
};

export const Account: Story = {
  parameters: { controls: { disable: true } },
  render: () => <AccountPageSkeleton />,
};

export const Cards: Story = {
  parameters: { controls: { disable: true } },
  render: () => <CardListSkeleton />,
};

export const Courses: Story = {
  parameters: { controls: { disable: true } },
  render: () => <CourseGridSkeleton />,
};

export const TablePage: Story = {
  parameters: { controls: { disable: true } },
  render: () => <TablePageSkeleton />,
};
