import Image from "next/image";
import banner from "@/public/hero/banner.png";
import SocialIcons from "../shared/header/SocialIcons";

const herosection = () => {
  return (
    <div className=" border flex flex-col-reverse lg:flex-row w-full lg:h-[60vh] ">
      <div className="lg:w-1/2 bg-[#fde2cc] flex flex-col justify-center items-start p-3 lg:p-10 space-y-3 lg:space-y-6">
        <h2 className="text-2xl lg:text-5xl raleway-regular">
          Premium Quality Makeup Cosmetics
        </h2>
        <p className="text-base lg:text-xl raleway-regular">
          Moon Cosmetics is serving people for 38 years by very high quality
          products which started its journey in 1982 with more then 100
          products.
        </p>
        <button className="uppercase text-white py-3 px-10 bg-[#663130] text-base">
          - explore more -
        </button>
        <SocialIcons />
      </div>
      <div className="w-full flex h-full">
        <div className="w-full h-full">
          <Image
            src={banner}
            alt="Hero Banner"
            // layout="responsive"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default herosection;
