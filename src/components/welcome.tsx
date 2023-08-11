"use client";

import Image from "next/image";
import Link from "next/link";
import Details from "./details";
import { DetailsProvider } from "@/contexts/details-context";
import DetailsButton from "./details-button";
import ReloadButton from "./reload-button";
import PageWrapper from "./layout/page-wrapper";

export default function Welcome() {
  return (
    <DetailsProvider>
      <div className="space-y-8 w-full">
        <PageWrapper>
          <div className="space-y-8">
            <div className="flex flex-row">
              <a href="/cv.pdf" target="_blank">
                <Image
                  src="/favicon.ico"
                  width="75"
                  height="95"
                  alt="icon"
                  className="hover:shadow-lg hover:ring-4 hover:ring-blue-100 rounded-sm"
                  title="Download CV"
                />
              </a>
            </div>
            <div className="space-y-4 text-gray-500 dark:text-gray-400">
              <h1 className="text-gray-800 text-2xl font-medium dark:text-white">
                Welcome to my website
              </h1>
              <h3>
                <span className="font-bold">plasokusay</span> is able to
                connect.
              </h3>
              <div>
                Try:
                <ul className="list-disc ml-10">
                  <li>Checking my contact info</li>
                  <li>
                    <Link
                      className="text-blue-500 hover:underline"
                      href="/portfolio"
                    >
                      Checking out my portfolio
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="text-xs">SUCC_CONNECTION_ACCEPTED</p>
            </div>
          </div>
        </PageWrapper>
        <div className="w-full flex flex-row justify-between max-sm:flex-col-reverse max-sm:space-y-4 max-md:fixed max-md:bottom-0 max-md:pb-4 max-md:left-0 max-md:px-4 max-md:bg-gradient-to-t max-md:from-white max-md:to-transparent max-md:via-white dark:max-md:via-black dark:max-md:from-black dark:max-md:to-transparent max-md:z-40">
          <DetailsButton />
          <ReloadButton />
        </div>
        <Details />
      </div>
    </DetailsProvider>
  );
}
