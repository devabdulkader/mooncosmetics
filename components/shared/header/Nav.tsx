"use client";
import Link from "next/link";
import CustomLink from "./CustomLink";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { INavItem } from "@/types";
import Logo from "./Logo";
import getNavigationData from "@/lib/getNavigationData";
const Nav = () => {
  const [navigationData, setNavigationData] = useState<INavItem[]>([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchNavigationData = async () => {
      try {
        const data = await getNavigationData();
        setNavigationData(data);
      } catch (error) {
        console.error("Error fetching navigation data:", error);
      }
    };

    fetchNavigationData();
  }, []);

  const handleMouseEnter = (index: number) => {
    setOpenDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdownIndex(null);
  };

  return (
    <nav className="justify-between fixed top-0 z-50 items-center hidden xl:flex h-16 bg-[#faf6f7] w-full px-10 custom-shadow">
      <div className="w-72">
        <Logo />
      </div>
      <ul className="flex gap-4 h-full justify-end items-center z-50">
        {navigationData.map((navItem, index) => (
          <li
            key={index}
            className="relative h-full flex items-center justify-center hover:border-b-2 hover:border-blue-600"
            onMouseEnter={() => handleMouseEnter(index)} // Show dropdown on mouse enter
            onMouseLeave={handleMouseLeave} // Hide dropdown on mouse leave
          >
            {navItem.dropdown ? (
              <div className="flex items-center justify-center h-full text-md px-2 cursor-pointer">
                <CustomLink path={navItem.path}>{navItem.title}</CustomLink>
                <MdOutlineKeyboardArrowDown size={30} />
              </div>
            ) : (
              <CustomLink path={navItem.path}>{navItem.title}</CustomLink>
            )}
            {navItem.dropdown && openDropdownIndex === index && (
              <ul className="absolute left-0 top-14 shadow bg-white w-80 z-10">
                {navItem.items?.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="hover:bg-gray-100 hover:text-red-600 px-5 py-2"
                  >
                    <CustomLink path={`/category${subItem.path}`}>
                      {subItem.title}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <CustomLink path={`/shop`}>
        <div className="bg-orange-400 py-2 px-10 text-white rounded-full">
          E-Commerce Shop
        </div>
      </CustomLink>
    </nav>
  );
};

export default Nav;
