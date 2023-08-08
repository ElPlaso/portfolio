"use client";

import NavBarLink from "@/types/navbarlink";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarLink({ navbarLink }: { navbarLink: NavBarLink }) {
  const pathname = usePathname();
  const isActive = navbarLink.href === pathname;
  return (
    <Link
      href={navbarLink.href}
      className={
        "inline-block p-4 relative " +
        (isActive
          ? "text-blue-600  dark:text-blue-500 "
          : "hover:text-gray-600  dark:hover:text-gray-300 active:text-blue-500  dark:active:text-blue-400")
      }
      aria-current="page"
    >
      {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 bottom-[1px] block h-[2px] w-full rounded-sm bg-blue-600 dark:bg-blue-500"
        />
      )}
      {navbarLink.title}
    </Link>
  );
}
