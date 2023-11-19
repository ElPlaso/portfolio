"use client";

import NavBarLinkProps from "@/types/navbarlink";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarLink({
  navbarLink,
}: {
  navbarLink: NavBarLinkProps;
}) {
  const pathname = usePathname();
  const isActive = navbarLink.href === pathname;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      href={navbarLink.href}
      className={
        "inline-block p-4 relative " +
        (isActive
          ? "text-blue-600 dark:text-blueDark "
          : "hover:text-gray-600  dark:hover:text-blueDarkFill")
      }
      onClick={scrollToTop}
      aria-current="page"
    >
      {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 bottom-[1px] block h-[2px] w-full rounded-sm bg-blue-600 dark:bg-blueDark"
        />
      )}
      {navbarLink.title}
    </Link>
  );
}
