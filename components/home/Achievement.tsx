import Image from "next/image";
import React from "react";
import achivment from "@/public/moon/Achivment/achivment.jpg";
import AnimatedSVG from "../motion/AnimatedSVG";
import MotionContent from "../motion/MotionContent";

const Achievement = () => {
  return (
    <div>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5  md:px-10 ">
        {/* Title */}
        <div className="relative">
          <MotionContent>
            <h1 className="mb-4 text-3xl  font-bold md:text-6xl raleway-medium text-center">
              Our Achievements
            </h1>
          </MotionContent>
          <AnimatedSVG />
        </div>
        {/* <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-16 text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p> */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={achivment}
              // layout="responsive"
              alt=""
              className="inline-block h-full w-full  object-cover hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl raleway-medium ">
              Our Mission
            </h1>
            <ul className="flex flex-col space-y-3">
              <MotionContent>
                <li className="flex items-start">
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    width={300}
                    height={300}
                    className="mr-2 relative top-1 inline-block h-4 w-4"
                  />
                  <p className="text-gray-500 text-sm sm:text-base work-sans-regular">
                    {" "}
                    <strong>Deliver Excellence:</strong> We are committed to
                    providing products of the highest quality that meet the
                    diverse needs of our customers. We continuously innovate and
                    use the latest technology to ensure our products exceed
                    industry standards.
                  </p>
                </li>
              </MotionContent>
              <MotionContent>
                <li className="flex items-start">
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    width={300}
                    height={300}
                    className="mr-2 relative top-1 inline-block h-4 w-4"
                  />
                  <p className="text-gray-500 text-sm sm:text-base work-sans-regular">
                    {" "}
                    <strong>Community Support:</strong> We are committed to
                    giving back to the community. Through various initiatives
                    and partnerships, we aim to support and uplift the people
                    who support us.
                  </p>
                </li>
              </MotionContent>
              <MotionContent>
                <li className="flex items-start">
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    width={300}
                    height={300}
                    className="mr-2 relative top-1 inline-block h-4 w-4"
                  />
                  <p className="text-gray-500 text-sm sm:text-base work-sans-regular">
                    {" "}
                    <strong>Customer Satisfaction:</strong> Our customers are at
                    the heart of everything we do. We are dedicated to
                    understanding and meeting their needs, providing exceptional
                    service, and building lasting relationships based on trust
                    and satisfaction.{" "}
                  </p>
                </li>{" "}
              </MotionContent>
              <MotionContent>
                <li className=" flex items-start">
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    width={300}
                    height={300}
                    className="mr-2 relative top-1 inline-block h-4 w-4"
                  />
                  <p className="text-gray-500 text-sm sm:text-base work-sans-regular">
                    {" "}
                    <strong>Growth and Innovation:</strong> We continuously seek
                    to expand our product range and improve our offerings. By
                    staying ahead of industry trends and embracing new ideas, we
                    ensure that Moon Cosmetics remains a leader in the market.{" "}
                  </p>
                </li>
              </MotionContent>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
