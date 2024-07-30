import React from "react";
import SocialIcons from "../header/SocialIcons";

const Footer = () => {
  return (
    <footer className="block bg-black">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid grid-cols-[auto] justify-between gap-6 max-[991px]:grid-flow-col max-[991px]:[grid-template:'.'_auto_'.'_auto_/_0.75fr_0.75fr_0.75fr] max-[767px]:gap-y-8 max-[479px]:auto-cols-auto max-[479px]:grid-flow-dense sm:grid-cols-2 sm:gap-4 md:grid-cols-[max-content_auto_auto_auto_auto] lg:gap-10">
          <div className="flex max-w-sm grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:[grid-area:span_1/span_4/span_1/span_4] max-[767px]:flex-col max-[767px]:[grid-area:span_1/span_2/span_1/span_2] lg:mr-10">
            <div className="flex flex-col items-start gap-6">
              <a href="#" className="inline-block max-w-full text-white">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d6f4e6cf96_Group%2047874-3.png"
                  alt=""
                  className="inline-block max-h-10"
                />
              </a>
              <p className="text-white">
                Phasellus a nulla in neque lacinia posuere. Etiam auctor
                facilisis augue vel gravida.
              </p>
            </div>
            <div className="mt-12 ">
              <SocialIcons />
            </div>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase text-white">Solution</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Marketing
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Analytics
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Commerce
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Insights
            </a>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase text-white">Support</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Documentation
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Guides
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              API&nbsp;Status
            </a>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase text-white">Docs</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              API&nbsp;Guide
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              API Status
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Dev Guide
            </a>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase text-white">Comapny</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Blog
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Jobs
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Press
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-white transition hover:text-blue-600"
            >
              Partners
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-14 mt-16 w-full border-b border-white"></div>
        <div className="flex md:flex-row items-start justify-between sm:flex-col flex-col-reverse md:items-center">
          <p className="text-sm sm:text-base">
            © Copyright 2021. All rights reserved.
          </p>
          <div className="text-center font-semibold">
            <a
              href="#"
              className="inline-block py-2 pl-5 font-normal text-white transition hover:text-blue-600 px-2.5 lg:pl-12"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="inline-block py-2 pl-5 font-normal text-white transition hover:text-blue-600 px-2.5 lg:pl-12"
            >
              License
            </a>
            <a
              href="#"
              className="inline-block py-2 pl-5 font-normal text-white transition hover:text-blue-600 px-2.5 lg:pl-12"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
