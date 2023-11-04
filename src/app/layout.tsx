import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plaso Kusay",
  description: "Plaso Kusay is a software engineer based in Aotearoa.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="snap-y scroll-auto">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
