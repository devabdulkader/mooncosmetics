import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <Nav />
      <MobileNav />
    </>
  );
};

export default Navbar;
