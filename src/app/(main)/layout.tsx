import NavBar from "@/components/layout/navbar";
import AnimationWrapper from "@/components/layout/animation-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen pt-8 pb-8 max-sm:pt-0 max-sm:pb-16">
      <div className="flex flex-col space-y-8 w-[700px] selection:max-md:mt-0 max-md:w-[100%] items-start justify-start">
        <NavBar />
        <div className="w-full px-4">
          <AnimationWrapper>{children}</AnimationWrapper>
        </div>
      </div>
    </main>
  );
}
