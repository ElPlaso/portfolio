import Link from "next/link";
import NavBarLink from "./navbar-link";

const navbarLinks = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "Experience", href: "/experience" },
];

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-grayDarkFill sticky w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600 flex flex-row justify-between items-center dark:px-4 max-md:px-2 dark:py-1 dark:rounded-lg max-md:rounded-none">
      <Link href="/">
        <svg
          className="w-6 h-6 hover:text-blue-500 dark:hover:text-blueDark space-x-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
      </Link>
      <div className="text-sm font-medium text-center">
        <ul className="flex flex-wrap -mb-px space-x-2">
          {navbarLinks.map((navbarLink) => (
            <li key={navbarLink.title}>
              <NavBarLink navbarLink={navbarLink} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
