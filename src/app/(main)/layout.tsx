import NavBar from "@/components/layout/navbar";
import PageWrapper from "@/components/layout/page-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-8 pt-8 max-sm:pt-0 max-sm:pb-16">
      <div className="flex flex-col space-y-8 w-[700px] selection:max-md:mt-0 max-md:w-[100%] items-start justify-start">
        <NavBar />
        <div className="px-4">
          <PageWrapper>{children}</PageWrapper>
        </div>
      </div>
    </main>
  );
}
