import MoonArnica from "@/components/featuredProducts/MoonArnica";
import MoonFaceWash from "@/components/featuredProducts/MoonFaceWash";
import MoonPata from "@/components/featuredProducts/MoonPata";
import React from "react";

const page = () => {
  return (
    <div className="lg:pt-14">
      <MoonArnica />
      <MoonFaceWash />
      <MoonPata />
    </div>
  );
};

export default page;
