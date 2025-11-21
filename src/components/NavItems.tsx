"use client";

import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constansts";
import Link from "next/link";
const NavItems = () => {
  const pathName: any = usePathname();
  const isActive = (path: string) => {
    if (path === "/") return pathName === "/";

    return pathName?.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map(({ href, title }) => (
        <li key={href}>
          <Link
            href={href}
            className={`hover:text-yellow-500 transition-color ${
              isActive(href) ? "text-gray-100" : ""
            }`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
