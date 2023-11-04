"use client";

import Link from "next/link";
import Details from "./details";
import { DetailsProvider } from "@/contexts/details-context";
import DetailsButton from "./details-button";
import ReloadButton from "./reload-button";
import AnimationWrapper from "./layout/animation-wrapper";
import Banner from "./banner";

export default function Welcome() {
  return (
    <DetailsProvider>
      <div className="space-y-8 w-full">
        <div className="space-y-16">
          <AnimationWrapper>
            <Banner />
          </AnimationWrapper>
          <div className="space-y-4">
            <h1 className="text-black dark:text-grayDark text-2xl font-medium">
              Welcome to my website
            </h1>
            <h3>
              <span className="font-bold">plasokusay</span> is able to connect.
            </h3>
            <div>
              Try:
              <ul className="list-disc ml-10">
                <li>Checking my contact info</li>
                <li>
                  <Link
                    className="text-blue-500 dark:text-blueDark hover:underline"
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
        <div
          className={`w-full flex flex-row
            justify-between max-sm:flex-col-reverse
            max-sm:space-y-4 max-md:fixed max-md:bottom-0
            max-md:pb-4 max-md:left-0 max-md:px-4 
            max-md:bg-gradient-to-t max-md:from-white 
            max-md:to-transparent max-md:via-white
            dark:max-md:via-darkBackground dark:max-md:from-darkBackground
            dark:max-md:to-transparent max-md:z-40`}
        >
          <DetailsButton />
          <ReloadButton />
        </div>
        <Details />
      </div>
    </DetailsProvider>
  );
}
