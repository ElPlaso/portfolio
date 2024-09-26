"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Welcome() {
  const pathName = usePathname();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col p-4 space-y-4 w-[700px] max-md:w-full items-start justify-start mb-16">
        <Image
          src="/images/sad-face.png"
          alt="Not Found"
          width={80}
          height={80}
          className="dark:brightness-200"
        />
        <div className="space-y-4 max-sm:pb-8">
          <h1 className="text-2xl font-medium text-black dark:text-grayDark">
            {`This page can't be reached.`}
          </h1>
          <h3>
            The web page at <span className="font-bold">{pathName}</span> might
            not exist or it may have moved permanently to a new route.
          </h3>
          <p className="text-xs">ERR_PAGE_NOTFOUND</p>
        </div>
      </div>
    </main>
  );
}
