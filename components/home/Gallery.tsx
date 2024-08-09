"use client";
import Image from "next/image";
import category1 from "@/public/category/category1.jpeg";
import category2 from "@/public/category/category2.jpeg";
import category3 from "@/public/category/category3.jpeg";
import category4 from "@/public/category/category4.jpeg";
import category5 from "@/public/category/category5.jpeg";
import category6 from "@/public/category/category6.jpeg";
import award1 from "@/public/moon/Gallary/AWARD.png";
import award2 from "@/public/moon/Gallary/AWARD2.png";
import award3 from "@/public/moon/Gallary/AWARD3.png";

import { Navigation, Autoplay } from "swiper/modules";
import MotionContent from "../motion/MotionContent";
import AnimatedSVG from "../motion/AnimatedSVG";
const Gallery = () => {
  return (
    <div className=" bg-white">
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <div className="relative lg:mb-5">
            <MotionContent>
              <h1 className="mb-4 text-3xl md:text-6xl raleway-bold text-center">
                Our Gallery
              </h1>
            </MotionContent>
            <AnimatedSVG />
          </div>
          <p className="msm:text-base mb-8 lg:mt-4 text-sm md:text-xl text-gray-500 md:mb-12 lg:mb-16 mx-auto text-center">
            BEST TAX PAYER IN 2023 (KHULNA ZILLA) Chairman of the Moon Cosmetics
            has got Best Tax payer in Khulna District.
          </p>
          {/* Content */}
          <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
            {/* Item */}
            <a
              href="#"
              className="relative flex h-[300px] items-end [grid-area:1/1/3/2] md:h-auto"
            >
              <Image
                src={award1}
                alt=""
                className="inline-block h-full w-full rounded-lg object-cover"
              />
            </a>
            {/* Item */}
            <a href="#" className="relative flex h-[300px] items-end">
              <Image
                src={award2}
                alt=""
                className="inline-block h-full w-full rounded-lg object-cover"
              />
            </a>
            {/* Item */}
            <a href="#" className="relative flex h-[300px] items-end">
              <Image
                src={award3}
                alt=""
                className="inline-block h-full w-full rounded-lg object-cover"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
