import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../cp-design-kit/cp-tokens.css";
import { brand } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${brand.name} — Transform Your Business with AI Automation`,
  description:
    "Custom AI systems for businesses ready to cut costs, streamline ops, and scale fast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
