import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between  items-center z-20 h-16 border bg-[#ffffff] lg:px-20  lg:mx-auto sticky top-0 ">
      <Logo />
      <div className=" hidden lg:flex h-full">
        <Nav />
      </div>

      {/* <Link
          target="black"
          href="https://calendly.com/zorgitgroup/15min"
          className="text-sm  rounded-xl font-normal text-white bg-red-600 hover:bg-red-700 px-4 py-1 md:px-8 md:py-3 md:text-md duration-300 "
        >
          Schedule a Meeting
        </Link>

        <MobileNav /> */}
    </nav>
  );
};

export default Navbar;
