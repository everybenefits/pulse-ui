import { ThemeProvider } from "@pulse/ui/theme";
import "./globals.css";
import { Figtree, Outfit } from "next/font/google";
import type { Metadata } from "next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulse UI — Design system + shadcn registry",
  description:
    "Tokens, theme, and a shadcn-compatible component registry for product teams shipping React apps.",
  openGraph: {
    title: "Pulse UI",
    description:
      "Design system + shadcn registry for product teams. Built for Pulse.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
