"use client";
import Image from "next/image";
import category1 from "@/public/category/category1.jpeg";
import category2 from "@/public/category/category2.jpeg";
import category3 from "@/public/category/category3.jpeg";
import category4 from "@/public/category/category4.jpeg";
import category5 from "@/public/category/category5.jpeg";
import category6 from "@/public/category/category6.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import {} from "swiper"; // Import Autoplay and Navigation modules

import "swiper/css/autoplay"; // Import Autoplay styles if needed
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
const GallerySlider = () => {
  return (
    <div className="container mx-auto mt-10 bg-white">
      <div className="p-10 text-center">
        <h2 className="text-3xl lg:text-6xl mb-3 lg:mb-5">Our Gallery</h2>
        <p className="text-base lg:text-xl">
          BEST TAX PAYER IN 2023 (KHULNA ZILLA) Chairman of the Moon Cosmetics
          has got Best Tax payer in Khulna District.
        </p>
      </div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper lg:h-[70vh] w-full "
      >
        <SwiperSlide className="cursor-pointer">
          <div className="h-full w-full ">
            <Image
              src={category1}
              alt="Hero Banner"
              // layout="responsive"
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <div className="h-full w-full ">
            <Image
              src={category2}
              alt="Hero Banner"
              // layout="responsive"
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <div className="h-full w-full ">
            <Image
              src={category3}
              alt="Hero Banner"
              // layout="responsive"
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GallerySlider;
