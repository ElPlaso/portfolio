"use client";

import Image from "next/image";
import Link from "next/link";
import Details from "./details";
import { DetailsProvider } from "@/contexts/details-context";
import DetailsButton from "./details-button";

export default function Welcome() {
  return (
    <DetailsProvider>
      <div className="flex flex-col space-y-8 w-[700px] mt-8 max-md:mt-2 max-md:w-[100%] items-start justify-start">
        <Image src="/favicon.ico" width="75" height="75" alt="icon" />
        <div className="space-y-4 text-gray-500">
          <h1 className="text-gray-800 text-2xl font-medium">
            This site can&apos;t be reached
          </h1>
          <h3>
            <span className="font-bold">plasokusay</span> refused to connect.
          </h3>
          <div>
            Try:
            <ul className="list-disc ml-10">
              <li>Checking the connection</li>
              <li>
                <Link className="text-blue-500" href="/">
                  Checking the proxy and the firewall
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-xs">ERR_CONNECTION_REFUSED</p>
        </div>
        <div className="w-full flex flex-row justify-between">
          <DetailsButton />
          <button className="bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-600">
            Reload
          </button>
        </div>
        <Details />
      </div>
    </DetailsProvider>
  );
}
