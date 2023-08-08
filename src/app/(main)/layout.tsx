import NavBar from "@/components/layout/navbar";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="px-4 max-sm:py-0">{children}</div>
    </>
  );
}
