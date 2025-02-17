import React from "react";
import MotionContent from "../motion/MotionContent";
import AnimatedSVG from "../motion/AnimatedSVG";
import SocialIcons from "../shared/header/SocialIcons";
import factory from "@/public/moon/Factory/factory.jpg";
import Image from "next/image";

const LocationMap = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <div className="relative mb-5">
            <MotionContent>
              <h1 className="mb-4 text-3xl   md:text-6xl raleway-bold text-center">
                Our Location
              </h1>
            </MotionContent>
            <AnimatedSVG />
          </div>
        </div>
        <Image
          src={factory}
          alt=""
          layout="responsive"
          className="h-[60vh] w-full"
        />
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                width="100%"
                height="480"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Corporate Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {" "}
                    Vatara, Gulshan, Dhaka, Bangladesh{" "}
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Factory</h3>
                  <p className="mt-1 text-gray-600">
                    Sener Bazar, Khulna, Bangladesh
                  </p>
                </div>

                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Saturday - Thursday: 9am - 8pm
                  </p>
                  <p className="mt-1 text-gray-600">Friday: Closed</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">
                    Email: mooncosmeticscorporate@gmail.com
                  </p>
                  <p className="mt-1 text-gray-600">Phone: +8801716-822400</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Social Media
                  </h3>
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
