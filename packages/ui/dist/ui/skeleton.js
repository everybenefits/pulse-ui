"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = Skeleton;
exports.PageContentSkeleton = PageContentSkeleton;
exports.FeedPageSkeleton = FeedPageSkeleton;
exports.ChatsPageSkeleton = ChatsPageSkeleton;
exports.AcademyPageSkeleton = AcademyPageSkeleton;
exports.AccountPageSkeleton = AccountPageSkeleton;
exports.NotificationsPageSkeleton = NotificationsPageSkeleton;
exports.ChatInboxSkeleton = ChatInboxSkeleton;
exports.ChatDirectorySkeleton = ChatDirectorySkeleton;
exports.ConversationSkeleton = ConversationSkeleton;
exports.CardListSkeleton = CardListSkeleton;
exports.ProfileFormSkeleton = ProfileFormSkeleton;
exports.CourseGridSkeleton = CourseGridSkeleton;
exports.DetailPageSkeleton = DetailPageSkeleton;
exports.PlayerSkeleton = PlayerSkeleton;
const jsx_runtime_1 = require("react/jsx-runtime");
/** Shared pulse loading placeholders. */
function Skeleton({ className = "" }) {
    return ((0, jsx_runtime_1.jsx)("div", { "aria-hidden": true, className: `animate-pulse rounded-xl bg-ink/[0.06] dark:bg-white/[0.08] ${className}` }));
}
/** Content-only page fallback — AppShell (nav) stays mounted in the parent layout. */
function PageContentSkeleton({ rows = 4 }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mx-auto max-w-3xl space-y-3 p-4 lg:p-6", "aria-busy": "true", "aria-label": "Loading", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-8 w-40 rounded-lg" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-4 w-64 rounded" }), Array.from({ length: rows }, (_, i) => ((0, jsx_runtime_1.jsx)(Skeleton, { className: "h-28 rounded-2xl" }, i)))] }));
}
function FeedPageSkeleton() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mx-auto max-w-3xl space-y-3 p-4 lg:p-6", "aria-busy": "true", "aria-label": "Loading", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-8 w-40 rounded-lg" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-4 w-64 rounded" }), Array.from({ length: 4 }, (_, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-3 rounded-2xl border border-glass-border bg-sheet/40 p-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-11 w-11 shrink-0 rounded-full" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 space-y-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-28" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-2.5 w-16" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-4 w-[88%]" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-full" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-[72%]" })] })] }, i)))] }));
}
function ChatsPageSkeleton() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", "aria-busy": "true", "aria-label": "Loading", children: [(0, jsx_runtime_1.jsx)("div", { className: "border-b border-glass-border px-4 py-3 lg:hidden", children: (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-6 w-28" }) }), (0, jsx_runtime_1.jsx)(ChatInboxSkeleton, { rows: 8 })] }));
}
function AcademyPageSkeleton() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mx-auto w-full max-w-6xl space-y-6 px-4 py-8 lg:px-8", "aria-busy": "true", "aria-label": "Loading", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-8 w-48" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-4 w-72" })] }), (0, jsx_runtime_1.jsx)(CourseGridSkeleton, {})] }));
}
function AccountPageSkeleton() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mx-auto w-full max-w-3xl space-y-6 px-4 py-8 lg:px-8", "aria-busy": "true", "aria-label": "Loading", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-8 w-40" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-4 w-64" })] }), (0, jsx_runtime_1.jsx)(ProfileFormSkeleton, {})] }));
}
function NotificationsPageSkeleton() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mx-auto w-full max-w-3xl space-y-4 px-4 py-8 lg:px-8", "aria-busy": "true", "aria-label": "Loading", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-8 w-48" }), (0, jsx_runtime_1.jsx)(CardListSkeleton, { rows: 5 })] }));
}
function ChatInboxSkeleton({ rows = 6 }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "space-y-2 p-3", "aria-busy": "true", "aria-label": "Loading", children: Array.from({ length: rows }, (_, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2.5 px-2 py-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-9 w-9 shrink-0 rounded-full" }), (0, jsx_runtime_1.jsxs)("div", { className: "min-w-0 flex-1 space-y-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3.5 w-2/3" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-5/6" })] })] }, i))) }));
}
function ChatDirectorySkeleton({ rows = 5 }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "space-y-1 py-1", "aria-busy": "true", children: Array.from({ length: rows }, (_, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3 px-2 py-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-10 w-10 shrink-0 rounded-full" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3.5 flex-1" })] }, i))) }));
}
function ConversationSkeleton() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", "aria-busy": "true", "aria-label": "Loading", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex shrink-0 items-center gap-3 border-b border-glass-border px-4 py-3", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-5 w-40" }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-auto flex gap-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-8 w-16" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-8 w-16" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 space-y-3 overflow-hidden p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex justify-start", children: (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-14 w-[70%] rounded-2xl" }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-end", children: (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-10 w-[55%] rounded-2xl" }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-start", children: (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-16 w-[65%] rounded-2xl" }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-end", children: (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-12 w-[48%] rounded-2xl" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex shrink-0 gap-2 border-t border-glass-border p-4", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-10 flex-1" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-10 w-20" })] })] }));
}
function CardListSkeleton({ rows = 4, className = "", }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: `space-y-3 ${className}`, "aria-busy": "true", children: Array.from({ length: rows }, (_, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "rounded-2xl border border-glass-border bg-sheet/40 p-4", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "mb-3 h-4 w-1/3" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "mb-2 h-3 w-full" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-4/5" })] }, i))) }));
}
function ProfileFormSkeleton() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", "aria-busy": "true", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-4", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-16 w-16 rounded-full" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 space-y-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-4 w-40" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-28" })] })] }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-10 w-full" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-10 w-full" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-10 w-2/3" })] }));
}
function CourseGridSkeleton({ cards = 6 }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3", "aria-busy": "true", "aria-label": "Loading", children: Array.from({ length: cards }, (_, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "overflow-hidden rounded-2xl border border-glass-border bg-sheet/40", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "aspect-[16/9] w-full rounded-none" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2 p-4", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-4 w-1/3" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-5 w-4/5" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-full" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-2/3" })] })] }, i))) }));
}
function DetailPageSkeleton() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mx-auto w-full max-w-5xl space-y-4 px-4 py-10 lg:px-8", "aria-busy": "true", "aria-label": "Loading", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-24" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-8 w-2/3" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-4 w-full max-w-xl" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "mt-4 aspect-video w-full max-w-3xl" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2 pt-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-full" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-5/6" }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-4/5" })] })] }));
}
function PlayerSkeleton() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mx-auto w-full max-w-6xl px-4 py-6 lg:px-8 lg:py-8", "aria-busy": "true", "aria-label": "Loading", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-3 w-32" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 grid gap-6 lg:grid-cols-[1.6fr_1fr]", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "aspect-video w-full rounded-2xl" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-3", children: [(0, jsx_runtime_1.jsx)(Skeleton, { className: "h-5 w-1/2" }), Array.from({ length: 5 }, (_, i) => ((0, jsx_runtime_1.jsx)(Skeleton, { className: "h-12 w-full rounded-xl" }, i)))] })] })] }));
}
