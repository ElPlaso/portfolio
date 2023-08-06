"use client";

import NavBarLink from "@/types/navbarlink";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarLink({ navbarLink }: { navbarLink: NavBarLink }) {
  const pathname = usePathname();
  const isActive = navbarLink.href === pathname;
  return (
    <Link
      href={navbarLink.href}
      className={
        "inline-block p-4 border-b-2 rounded-t-lg " +
        (isActive
          ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500"
          : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 active:text-blue-500 active:border-blue-500 dark:active:text-blue-400 dark:active:border-blue-400")
      }
      aria-current="page"
    >
      {navbarLink.title}
    </Link>
  );
}
