import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plaso Kusay",
  description: "Plaso Kusay is a software engineer based in Aotearoa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="max-sm:snap-y max-sm:snap-mandatory scroll-auto">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
