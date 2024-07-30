"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomLinkProps } from "@/types";

const CustomLink = ({ path, prefetch = true, children }: CustomLinkProps) => {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link prefetch={prefetch} href={path} className="raleway-medium">
      {children}
    </Link>
  );
};
export default CustomLink;
