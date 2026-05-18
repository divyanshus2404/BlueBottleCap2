import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bluebottlecap - Premium AI Tools Platform",
  description:
    "Access powerful AI tools for image generation, content creation, code assistance, and more. One subscription, unlimited possibilities.",
  keywords: [
    "AI tools",
    "image generation",
    "content creation",
    "code assistant",
    "SaaS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
