import Link from "next/link";
import NavBarLink from "./navbar-link";

const navbarLinks = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "Experience", href: "/experience" },
];

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 flex flex-row w-full justify-between items-center dark:px-4 dark:py-1 dark:rounded-lg">
      <Link href="/">
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
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
      </Link>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
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
