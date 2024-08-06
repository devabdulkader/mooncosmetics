"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomLinkProps } from "@/types";

const CustomLink = ({
  path,
  prefetch = true,
  children,
  setOpen,
}: CustomLinkProps) => {
  const pathname = usePathname();
  const active = pathname === path;

  const handleClick = () => {
    if (setOpen) {
      setOpen(false); // Close the mobile navigation only if setOpen is defined
    }
  };

  return (
    <Link
      prefetch={prefetch}
      href={path}
      className={`raleway-semi-bold ${active ? "text-red-600" : ""}`} // Add any active class styling if needed
      onClick={handleClick} // Call handleClick on link click
    >
      {children}
    </Link>
  );
};

export default CustomLink;
