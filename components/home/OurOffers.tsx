"use client";
import { FaBuilding } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {} from "swiper"; // Import Autoplay and Navigation modules
import "swiper/css/autoplay"; // Import Autoplay styles if needed
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import offer1 from "@/public/offers/offer1.jpg";
import offer2 from "@/public/offers/offer2.jpg";
import offer3 from "@/public/offers/offer3.jpg";

const offers = [
  { image: offer1, title: "Special Offer 1" },
  { image: offer2, title: "Special Offer 2" },
  { image: offer3, title: "Special Offer 3" },
  { image: offer1, title: "Special Offer 1" },
  { image: offer2, title: "Special Offer 2" },
  { image: offer3, title: "Special Offer 3" },
];

const OurOffers = () => {
  return (
    <div className="bg-white pt-14">
      <h1 className="mb-4 text-4xl font-bold md:text-6xl raleway-medium text-center">
        Our Special Offers
      </h1>
      <section className="">
        <Swiper
          slidesPerView={1} // Show 3 slides per view
          breakpoints={{
            // Define breakpoints for responsive behavior
            640: {
              slidesPerView: 2, // 2 slides for screens >= 640px
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // 3 slides for screens >= 768px
              spaceBetween: 40,
            },
          }}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <div className="container mx-auto lg:p-10 flex justify-center items-center">
                <div className="w-full  lg:h-[65vh]">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    // layout="responsive"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default OurOffers;
