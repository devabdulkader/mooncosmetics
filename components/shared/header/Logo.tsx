import Image from "next/image";
import Link from "next/link";
import logo from "@/public/moon/logo/logo.png";
// import mooncosmetics from "@/public/logo/header-logo.png";
const Logo = () => {
  return (
    <Link href="/">
      <div className="w-auto flex items-center">
        <div className="h-10 w-10 mr-2">
          <Image
            src={logo}
            alt=""
            height={300}
            width={300}
            className="h-full w-full"
          />
        </div>
        <div className="">
          <h2 className="text-base lg:text-2xl raleway-bold relative ">
            Moon Cosmetics BD
          </h2>
          <p className="relative text-sm  work-sans-regular ">Since 1982</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
