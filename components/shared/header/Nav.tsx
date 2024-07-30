"use client";
import Link from "next/link";
import CustomLink from "./CustomLink";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";

const Nav = () => {
  const [navigationData, setNavigationData] = useState([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  useEffect(() => {
    fetch("/data/navigationData.json")
      .then((response) => response.json())
      .then((data) => setNavigationData(data));
  }, []);

  const handleMouseEnter = (index) => {
    setOpenDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdownIndex(null);
  };

  return (
    <ul className="flex gap-4 h-full justify-center items-center w-full">
      {navigationData.map((navItem, index) => (
        <li
          key={index}
          className="relative h-full flex items-center justify-center"
          onMouseEnter={() => handleMouseEnter(index)} // Show dropdown on mouse enter
          onMouseLeave={handleMouseLeave} // Hide dropdown on mouse leave
        >
          {navItem.dropdown ? (
            <div className="flex items-center justify-center h-full text-md px-2   cursor-pointer">
              <CustomLink path={navItem.path}>{navItem.title}</CustomLink>
              <MdOutlineKeyboardArrowDown size={30} />
            </div>
          ) : (
            <CustomLink path={navItem.path}>{navItem.title}</CustomLink>
          )}
          {navItem.dropdown && openDropdownIndex === index && (
            <ul className="absolute left-0 top-14  shadow bg-white  w-80  z-10">
              {navItem.items.map((subItem, subIndex) => (
                <li key={subIndex} className="hover:bg-green-200 px-5 py-2">
                  <CustomLink path={`/shop/category/${subItem.path}`}>
                    {subItem.title}
                  </CustomLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
