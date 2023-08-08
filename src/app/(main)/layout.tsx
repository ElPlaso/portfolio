import NavBar from "@/components/layout/navbar";
import PageWrapper from "@/components/layout/page-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col space-y-8 w-[700px] mt-8 max-md:mt-0 max-md:w-[100%] items-start justify-start mb-16">
        <NavBar />
        <div className="px-4 max-sm:py-0">
          <PageWrapper>{children}</PageWrapper>
        </div>
      </div>
    </main>
  );
}
