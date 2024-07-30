import React from "react";
import certification1 from "@/public/certification/certification1.png";
import certification2 from "@/public/certification/certification2.png";
import Image from "next/image";

const Certification = () => {
  return (
    <div className="container mx-auto mt-10 border-2 border-gray-200 bg-gray-50 ">
      <section className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col justify-center items-start p-3 lg:p-10 space-y-3 lg:space-y-6">
          <h2 className="text-2xl raleway-medium text-center uppercase py-5  lg:py-0">
            Our Certifications
          </h2>
          <p className="text-base lg:text-xl ">
            Moon Cosmetics is serving people for 38 years by very high quality
            products which started its journey in 1982 with more then 100
            products.
          </p>
          <button className="uppercase text-white py-2 px-5 lg:py-4 lg:px-10 bg-[#663130] text-sm lg:text-base">
            - Learn more -
          </button>
        </div>
        <div className="lg:w-1/2 flex  justify-center items-center p-5">
          <div className="h-full w-1/2  p-10">
            <Image
              src={certification1}
              alt="Hero Banner"
              //   layout="responsive"
              className="h-full w-full"
            />
          </div>
          <div className="h-full w-1/2  py-5">
            <Image
              src={certification2}
              alt="Hero Banner"
              //   layout="responsive"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
