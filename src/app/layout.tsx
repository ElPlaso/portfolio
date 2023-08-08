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
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="flex flex-col space-y-8 w-[700px] mt-8 max-md:mt-0 max-md:w-[100%] items-start justify-start mb-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
