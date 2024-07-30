import Image from "next/image";
import Link from "next/link";
// import mooncosmetics from "@/public/logo/header-logo.png";
const Logo = () => {
  return (
    <Link href="/">
      {/* <Image
        // src={mooncosmetics}
        src={""}
        alt="Zorg IT Group"
        className=""
        width={90}
        height={90}
      /> */}
      <div>
        <h2 className="text-2xl font-bold">Moon Cosmetics BD</h2>
        <p>Since 1982</p>
      </div>
    </Link>
  );
};

export default Logo;
