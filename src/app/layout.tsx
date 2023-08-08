import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
    <html lang="en" className="snap-y snap-mandatory overflow-y-scroll">
      <body className={`${inter.className} snap-y snap-mandatory`}>
        {children}
      </body>
    </html>
  );
}
