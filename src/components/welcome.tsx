"use client";

import Image from "next/image";
import Link from "next/link";
import Details from "./details";
import { DetailsProvider } from "@/contexts/details-context";
import DetailsButton from "./details-button";
import ReloadButton from "./reload-button";

export default function Welcome() {
  return (
    <DetailsProvider>
      <div className="flex flex-col space-y-8 w-[700px] mt-8 max-md:mt-2 max-md:w-[100%] items-start justify-start">
        <Image src="/favicon.ico" width="75" height="75" alt="icon" />
        <div className="space-y-4 text-gray-500">
          <h1 className="text-gray-800 text-2xl font-medium">
            Welcome to my website
          </h1>
          <h3>
            <span className="font-bold">plasokusay</span> is able to connect.
          </h3>
          <div>
            Try:
            <ul className="list-disc ml-10">
              <li>Checking my contacts</li>
              <li>
                <Link className="text-blue-500" href="/">
                  Checking out my portfolio
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-xs">SUCC_CONNECTION_ACCEPTED</p>
        </div>
        <div className="w-full flex flex-row justify-between">
          <DetailsButton />
          <ReloadButton />
        </div>
        <Details />
      </div>
    </DetailsProvider>
  );
}
