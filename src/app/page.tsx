import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 max-sm:pt-8 max-sm:px-4">
      <div className="flex flex-col space-y-8 w-[700px] mt-8 max-md:mt-2 max-md:w-[100%] items-start justify-start max-sm:px-1">
        <Welcome />
      </div>
    </main>
  );
}
