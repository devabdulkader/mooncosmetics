import React from "react";
import Link from "next/link";
import SocialIcons from "../header/SocialIcons";
import Logo from "../header/Logo";

const Footer = () => {
  return (
    <footer className="block bg-black">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="lg:grid grid-cols-[auto] justify-between gap-6 max-[991px]:grid-flow-col max-[991px]:[grid-template:'.'_auto_'.'_auto_/_0.75fr_0.75fr_0.75fr] max-[767px]:gap-y-8 max-[479px]:auto-cols-auto max-[479px]:grid-flow-dense  sm:grid-cols-2 sm:gap-4 md:grid-cols-[max-content_auto_auto_auto_auto] lg:gap-10">
          <div className="flex max-w-sm grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:[grid-area:span_1/span_4/span_1/span_4] max-[767px]:flex-col max-[767px]:[grid-area:span_1/span_2/span_1/span_2] lg:mr-10">
            <div className=" text-white">
              <Logo />
            </div>
            <div className="">
              <div className="">
                <dt className="text-lg leading-6 font-medium text-white">
                  Phone number
                </dt>
                <dd className="mt-2 text-base text-white white">
                  +8801716-822400
                </dd>
              </div>
              <div className=" my-5">
                <dt className="text-lg leading-6 font-medium text-white">
                  Email
                </dt>
                <dd className="mt-2 text-base text-white">
                  mooncosmeticscorporate@gmail.com
                </dd>
              </div>
              <div className=" my-5">
                <dt className="text-lg leading-6 font-medium text-white">
                  Corporate Address
                </dt>
                <dd className="mt-2 text-base text-white">
                  Vatara, Gulshan, Dhaka, Bangladesh
                </dd>
              </div>
              <div className=" my-5">
                <dt className="text-lg leading-6 font-medium text-white">
                  Factory
                </dt>
                <dd className="mt-2 text-base text-white">
                  Sener Bazar, Khulna, Bangladesh
                </dd>
              </div>

              <SocialIcons />
            </div>
          </div>
          <div className="flex flex-col items-start raleway-bold my-5 lg:my-0">
            <div className="mb-4">
              <p className="font-bold uppercase text-white">Quick Links</p>
            </div>
            <Link href="/">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Home
              </p>
            </Link>
            <Link href="/shop">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                E-Commerce Shop
              </p>
            </Link>
            <Link href="/featured-products">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Featured Products
              </p>
            </Link>
            <Link href="/about">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                About Us
              </p>
            </Link>
            <Link href="/contact">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Contact Us
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-start font-semibold mb-5 lg:mb-0">
            <div className="mb-4">
              <p className="font-bold uppercase text-white">category</p>
            </div>
            <Link href="/category/herbal-oil">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Herbal Oil
              </p>
            </Link>
            <Link href="/category/hair-care">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Hair Care
              </p>
            </Link>
            <Link href="/category/skin-care">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Skin Care
              </p>
            </Link>
            <Link href="/category/winter-care">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Winter Care
              </p>
            </Link>
            <Link href="/category/color-cosmetics">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Color Cosmetics
              </p>
            </Link>
            <Link href="/category/fragrances">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Fragrances
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase text-white">Company</p>
            </div>
            <Link href="/">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Terms of Service
              </p>
            </Link>
            <Link href="/">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                License
              </p>
            </Link>
            <Link href="/">
              <p className="py-2 text-sm font-normal text-white transition hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </p>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-14 mt-16 w-full border-b border-white"></div>
        <div className="flex md:flex-row items-start justify-center sm:flex-col flex-col-reverse md:items-center">
          <p className="text-sm sm:text-base text-white">
            Moon Cosmetics BD © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
