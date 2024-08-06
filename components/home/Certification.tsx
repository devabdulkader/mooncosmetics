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
            {/* <p className="mx-auto mb-8 mt-4 text-gray-500 md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </p> */}
          </div>
          {/* Content */}
          <ul className="grid gap-5 sm:grid-cols-2 md:gap-4 lg:gap-6">
            {/* Item */}
            <li className="rounded-md bg-gray-100 p-8 md:p-10 certification-card">
              <div className="flex items-center justify-between">
                <p className="mr-4 rounded-full bg-slate-800 text-white px-4 py-2 raleway-medium font-semibold uppercase">
                  Certified
                </p>
                <FaCheckCircle className="text-3xl text-green-500" />
              </div>
              {/* Divider */}
              <div className="mb-20 mt-4 h-0.5 w-full bg-gray-300"></div>
              {/* <p className="mb-3 text-xl font-semibold">
                Intuitive Calendar Interface
              </p>
              <p className="text-sm text-gray-500">
                The XYZ Payment App is a user-friendly mobile application that
                revolutionizes the way you handle your payments and
                transactions. With its intuitive interface and robust
                functionality.
              </p> */}
              <Image
                src={certification1}
                alt="Hero Banner"
                className="mx-auto mt-20"
                //   layout="responsive"
              />
            </li>
            {/* Item */}
            <li className="rounded-md bg-gray-100 p-8 md:p-10 certification-card">
              <div className="flex  items-center justify-between">
                <p className="mr-4 rounded-full bg-slate-800 text-white px-4 py-2 raleway-medium font-semibold uppercase">
                  Certified
                </p>

                <FaCheckCircle className="text-3xl text-green-500" />
              </div>
              {/* Divider */}
              <div className="mb-10 mt-4 h-0.5 w-full bg-gray-300"></div>
              {/* <p className="mb-3 text-xl font-semibold">
                Intuitive Calendar Interface
              </p>
              <p className="text-sm text-gray-500">
                The XYZ Payment App is a user-friendly mobile application that
                revolutionizes the way you handle your payments and
                transactions. With its intuitive interface and robust
                functionality.
              </p> */}
              <Image
                src={certification2}
                alt="Hero Banner"
                className="mx-auto "

                //   layout="responsive"
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Certification;
