import React from "react";
import certification1 from "@/public/certification/certification1.png";
import certification2 from "@/public/certification/certification2.png";

import Image from "next/image";
import AnimatedSVG from "../motion/AnimatedSVG";
import { FaCheckCircle } from "react-icons/fa";
import MotionContent from "../motion/MotionContent";

const Certification = () => {
  return (
    <div className="container mx-auto ">
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 ">
          {/* Title */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="relative">
              <MotionContent>
                <h1 className="mb-4 text-3xl  md:text-6xl raleway-bold text-center">
                  Our Certification
                </h1>
              </MotionContent>
              <AnimatedSVG />
            </div>
          </div>
          {/* Content */}
          <ul className=" w-full ">
            {/* Item */}
            <li className="rounded-md bg-gray-100 p-8 md:p-10 certification-card w-full">
              <div className="flex items-center justify-between">
                <p className="mr-4 rounded-full bg-slate-800 text-white px-4 py-2 raleway-medium font-semibold uppercase">
                  Certified
                </p>
                <FaCheckCircle className="text-3xl text-green-500" />
              </div>
              {/* Divider */}
              <div className="mb-16 mt-4 h-0.5 w-full bg-gray-300"></div>

              <div className="flex justify-center space-y-5 lg:space-y-0 lg:space-x-10 w-full flex-wrap">
                <Image
                  src={certification1}
                  alt="Hero Banner"
                  className="h-auto w-auto sm:h-36 sm:w-44"
                  //   layout="responsive"
                />
                <Image
                  src={certification2}
                  alt="Hero Banner"
                  className="h-auto w-auto sm:h-40  sm:w-72"

                  //   layout="responsive"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Certification;
