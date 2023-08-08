import PageWrapper from "@/components/layout/page-wrapper";
import Welcome from "@/components/welcome";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col p-4 space-y-8 w-[700px] mt-8 max-md:mt-0 max-md:w-[100%] items-start justify-start mb-16">
        <PageWrapper>
          <div className="w-full flex flex-row justify-end">
            <Link href="/portfolio">
              <svg
                className="w-6 h-6 text-gray-500 dark:text-white hover:text-blue-500 space-x-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <Welcome />
        </PageWrapper>
      </div>
    </main>
  );
}
