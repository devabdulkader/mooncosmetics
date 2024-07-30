"use client";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import CustomLink from "./CustomLink";
import { MdOutlineKeyboardArrowRight, MdClose } from "react-icons/md";
import Link from "next/link";

const MobileNav = () => {
  let [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="  lg:hidden flex ">
        <FaBarsStaggered
          onClick={() => setOpen(!isOpen)}
          size={28}
          className="text-black font-bold"
        />
      </div>
      {isOpen && (
        <div className=" overflow-hidden z-20">
          <div className=" fixed overflow-hidden h-screen w-screen top-0 md:top-[-24px] right-0 left-0   z-50  bg-white text-black px-4 py-4 transition-all ease-in duration-500">
            <div className="flex justify-between items-center pb-4">
              <div>
                <MdClose size={28} onClick={() => setOpen(false)} />
              </div>
            </div>
            <div className=" w-full h-full  flex  flex-col justify-between gap-60 ">
              <ul className=" text-black gap-4 flex flex-col text-lg pt-2">
                <li>
                  <div className=" dropdown dropdown-hover w-full">
                    <div
                      tabIndex={0}
                      role="button"
                      className="flex justify-between items-center px-2 font-semibold "
                    >
                      <div>Services</div>
                      <div>
                        <MdOutlineKeyboardArrowRight size={30} />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu text-lg p-2 shadow bg-white rounded-lg w-full"
                    >
                      <li onClick={() => setOpen(false)}>
                        <CustomLink path="/services/ui-ux-design">
                          UI UX Design
                        </CustomLink>
                      </li>
                      <li onClick={() => setOpen(false)}>
                        <CustomLink path="/services/web-design-development">
                          Web Design Development
                        </CustomLink>
                      </li>
                      <li onClick={() => setOpen(false)}>
                        <CustomLink path="/services/graphics-motion-design">
                          Graphics Motion Design
                        </CustomLink>
                      </li>
                      <li onClick={() => setOpen(false)}>
                        <CustomLink path="/services/video-editing">
                          Video Editing
                        </CustomLink>
                      </li>
                      <li>
                        <CustomLink path="/services/digital-marketing">
                          Digital Marketing
                        </CustomLink>
                      </li>
                      <li onClick={() => setOpen(false)}>
                        <CustomLink path="/services/content-writing">
                          Content Writing
                        </CustomLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onClick={() => setOpen(false)}>
                  <CustomLink path="/ui-ux-design">UI UX Design</CustomLink>
                </li>
                <li onClick={() => setOpen(false)}>
                  <CustomLink path="/about-us">About Us</CustomLink>
                </li>
                <li>
                  <div className="dropdown dropdown-hover w-full">
                    <div
                      tabIndex={0}
                      role="button"
                      className=" flex justify-between items-center px-2 font-semibold "
                    >
                      <p>Resources</p>
                      <p>
                        <MdOutlineKeyboardArrowRight size={30} />
                      </p>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu text-lg p-2 shadow bg-white rounded-lg w-full"
                    >
                      <li onClick={() => setOpen(false)}>
                        <CustomLink path="/case-studies">
                          Case Studies
                        </CustomLink>
                      </li>
                      <li onClick={() => setOpen(false)}>
                        <CustomLink path="/blogs">Articles</CustomLink>
                      </li>
                      <li onClick={() => setOpen(false)}>
                        <CustomLink path="/contact-us">Contact Us</CustomLink>
                      </li>
                      <li onClick={() => setOpen(false)}>
                        <CustomLink path="/career">Career</CustomLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div onClick={() => setOpen(false)} className="h-full w-full ">
                <Link
                  target="black"
                  href="https://calendly.com/zorgitgroup/15min"
                >
                  <button className="rounded-xl font-normal text-white bg-red-600 hover:bg-red-700 h-12 w-full   text-md  duration-300 ">
                    {" "}
                    Schedule a Meeting
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
