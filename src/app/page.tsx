import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col p-4 space-y-4 w-[700px] mt-8 max-md:mt-0 max-md:w-[100%] items-start justify-start mb-16">
        <Welcome />
      </div>
    </main>
  );
}
