import NavBar from "@/components/layout/navbar";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 max-sm:px-4 max-sm:py-0">
      <div className="flex flex-col space-y-8 w-[700px] mt-8 max-md:mt-2 max-md:w-[100%] items-start justify-start mb-16">
        <NavBar />
        <div>{children}</div>
      </div>
    </main>
  );
}
