"use client";
import Link from "next/link";
import CustomLink from "./CustomLink";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { INavItem } from "@/types";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight, MdClose } from "react-icons/md";
import Logo from "./Logo";
import getNavigationData from "@/lib/getNavigationData";
import LiveChat from "@/components/button/LiveChat";
import SocialIcons from "./SocialIcons";

const MobileNav = () => {
  const [navigationData, setNavigationData] = useState<INavItem[]>([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [isOpen, setOpen] = useState(false);

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
    <nav className="xl:hidden sticky top-0 bg-white z-50 shadow-sm">
      <div className="flex justify-between items-center px-10 py-2">
        <Logo />
        <FaBarsStaggered
          size={28}
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        />
      </div>
      {isOpen && (
        <div className="px-10 fixed top-0 left-0 right-0 bg-white z-50 h-screen">
          <div className="flex justify-between items-center py-2 ">
            <Logo />
            <MdClose
              size={28}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <ul className="flex flex-col gap-4 mt-4 mb-6">
            {navigationData.map((navItem, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {navItem.dropdown ? (
                  <div className="flex items-center justify-between text-md cursor-pointer">
                    <CustomLink path={navItem.path}>{navItem.title}</CustomLink>
                    <MdOutlineKeyboardArrowDown size={24} />
                  </div>
                ) : (
                  <CustomLink path={navItem.path} setOpen={setOpen}>
                    {navItem.title}
                  </CustomLink>
                )}
                {navItem.dropdown && openDropdownIndex === index && (
                  <ul className="shadow bg-white w-full z-10 mt-3">
                    {navItem.items?.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="hover:bg-gray-100 hover:text-red-600 px-5 py-2"
                      >
                        <CustomLink
                          path={`/category${subItem.path}`}
                          setOpen={setOpen}
                        >
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
            <div className="bg-orange-400 py-2 w-52 flex justify-center text-white rounded-full">
              E-Commerce Shop
            </div>
          </CustomLink>

          <div className="absolute bottom-24">
            <SocialIcons />
          </div>
          <LiveChat />
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
