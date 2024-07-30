import { FaBuilding } from "react-icons/fa";
import offer1 from "@/public/offers/offer1.jpg";
import offer2 from "@/public/offers/offer2.jpg";
import offer3 from "@/public/offers/offer3.jpg";

import Image from "next/image";

const OurOffers = () => {
  return (
    <div className="  bg-white">
      <h2 className="text-2xl raleway-medium text-center uppercase py-5 lg:pt-10 lg:py-0">
        Our Special Offers
      </h2>
      <section className="grid container mx-auto grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 lg:p-10">
        <div className="border   flex flex-col ">
          <div className="w-full h-[25vh] lg:h-[50vh]">
            <Image
              src={offer1}
              alt="Hero Banner"
              // layout="responsive"
              className="h-full w-full"
            />
          </div>

          <button className="uppercase text-white py-2 lg:py-4 lg:px-10 bg-[#663130] text-sm lg:text-base">
            - explore more -
          </button>
        </div>

        <div className="border   flex flex-col ">
          <div className="w-full h-[25vh] lg:h-[50vh]">
            <Image
              src={offer2}
              alt="Hero Banner"
              // layout="responsive"
              className="h-full w-full"
            />
          </div>

          <button className="uppercase text-white py-2 lg:py-4 lg:px-10 bg-[#663130] text-sm lg:text-base">
            - explore more -
          </button>
        </div>

        <div className="border   flex flex-col ">
          <div className="w-full h-[25vh] lg:h-[50vh]">
            <Image
              src={offer3}
              alt="Hero Banner"
              // layout="responsive"
              className="h-full w-full"
            />
          </div>

          <button className="uppercase text-white py-2 lg:py-4 lg:px-10 bg-[#663130] text-sm lg:text-base">
            - explore more -
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurOffers;
