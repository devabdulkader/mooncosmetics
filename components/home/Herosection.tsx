import Image from "next/image";
import Video from "next-video";
import banner from "@/public/hero/banner.png";
import SocialIcons from "../shared/header/SocialIcons";
import video1 from "@/videos/welcome-moon.mp4";

const herosection = () => {
  return (
    // <div className=" border flex flex-col-reverse lg:flex-row w-full lg:h-[93vh] overflow-hidden">
    //  <div className="lg:w-1/2 bg-[#fde2cc] flex flex-col justify-center items-start p-3 lg:p-10 space-y-3 lg:space-y-6">
    //     <h2 className="text-2xl lg:text-5xl raleway-regular">
    //       Premium Quality Makeup Cosmetics
    //     </h2>
    //     <p className="text-base lg:text-xl raleway-regular">
    //       Moon Cosmetics is serving people for 38 years by very high quality
    //       products which started its journey in 1982 with more then 100
    //       products.
    //     </p>
    //     <button className="uppercase text-white py-3 px-10 bg-[#663130] text-base">
    //       - explore more -
    //     </button>
    //     <SocialIcons />
    //   </div>
    //   <div className="w-full flex h-full">
    //     <div className="w-full h-full">
    //       <Image
    //         src={banner}
    //         alt="Hero Banner"
    //         // layout="responsive"
    //         className="h-full w-full"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col-reverse lg:flex-row w-full lg:h-[93vh] overflow-hidden relative group">
      {/* Overlay that covers the video */}
      <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 group-hover:opacity-0 z-10"></div>
      {/* Video component */}
      {/* <Video
        src={video1}
        className="w-full relative left-0  group-hover:z-30 cursor-pointer"
      /> */}
    </div>
  );
};

export default herosection;
