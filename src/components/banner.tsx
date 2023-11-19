import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative rounded-xl">
      <Image
        src="/images/backdrop2.png"
        alt="Backdrop"
        width={1080}
        height={607.5}
        className="rounded-lg object-cover h-[200px] w-full z-0"
      />
      <Image
        src="/images/profile.jpg"
        alt="Plaso Kusay"
        width={175}
        height={175}
        className={`
          bg:white dark:bg-darkBackground
          rounded-full border-white
          dark:border-darkBackground border-4
          object-cover h-[175px] w-[175px]
          absolute left-[25px] max-sm:left-[50%]
          max-sm:translate-x-[-50%] top-[33%]
          `}
      />
      <div className="flex justify-end py-4 px-2 max-sm:pt-24 max-sm:justify-center gap-x-2">
        <a
          href={"/cv.pdf"}
          target="_blank"
          className="flex items-center gap-x-2 bg-white dark:bg-darkBackground
          border border-gray-300 dark:border-grayDarkSecondary
          rounded-full px-4 py-2 text-grayLight dark:text-blueDark
          hover:bg-gray-100 dark:hover:bg-grayDarkFill text-sm
          "
        >
          CV
          <svg
            className="w-4 h-4 text-gray-800 dark:text-blueDark group-hover:text-blue-500 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            />
          </svg>
        </a>
        <Link
          href="/portfolio"
          className="flex items-center gap-x-2 bg-blue-500 dark:bg-blueDark 
          rounded-full px-4 py-2 text-white dark:text-darkBackground 
          active:bg-blue-600 dark:active:bg-blueDarkFill text-sm
          "
        >
          More
          <svg
            className="w-4 h-4 dark:text-gray-800 text-white dark:group-hover:text-blue-500 group-hover:text-white"
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
    </div>
  );
}
