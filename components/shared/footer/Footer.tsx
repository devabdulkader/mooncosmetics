import React from "react";
import SocialIcons from "../header/SocialIcons";
import Logo from "../header/Logo";

const Footer = () => {
  return (
    <footer className="block bg-black">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid grid-cols-[auto] justify-between gap-6 max-[991px]:grid-flow-col max-[991px]:[grid-template:'.'_auto_'.'_auto_/_0.75fr_0.75fr_0.75fr] max-[767px]:gap-y-8 max-[479px]:auto-cols-auto max-[479px]:grid-flow-dense sm:grid-cols-2 sm:gap-4 md:grid-cols-[max-content_auto_auto_auto_auto] lg:gap-10">
          <div className="flex max-w-sm grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:[grid-area:span_1/span_4/span_1/span_4] max-[767px]:flex-col max-[767px]:[grid-area:span_1/span_2/span_1/span_2] lg:mr-10">
            <div className="flex flex-col items-start gap-6 text-white">
              <Logo />
            </div>
            <div className="mt-12 ">
              <SocialIcons />
            </div>
          </div>
          <div className="flex flex-col items-start  raleway-bold">
            <div className="mb-4">
              <p className="font-bold uppercase text-white">Quick Links</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Shop
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Featured Products
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Contact Us
            </a>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase text-white">Categories</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Herbal Oil
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Hair Care
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Skin Care
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Winter Care
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Color Cosmetics
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Fragrances
            </a>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase text-white">COMPANY</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              License
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-14 mt-16 w-full border-b border-white"></div>
        <div className="flex md:flex-row items-start justify-center sm:flex-col flex-col-reverse md:items-center">
          <p className="text-sm sm:text-base text-white">
            Moon Cosmetics BD © Copyright 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
