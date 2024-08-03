import Image from "next/image";
import Video from "next-video";
import banner from "@/public/hero/banner.png";
import SocialIcons from "../shared/header/SocialIcons";
import video1 from "@/videos/welcome-moon.mp4";

const herosection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full lg:h-[93vh] overflow-hidden relative group">
      {/* Overlay that covers the video */}
      <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 group-hover:opacity-0 z-10"></div>
      {/* Video component */}
      <Video
        src={video1}
        className="w-full relative left-0  group-hover:z-30 cursor-pointer"
      />
    </div>
  );
};

export default herosection;
