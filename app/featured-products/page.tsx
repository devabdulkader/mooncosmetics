import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import getFeaturedProductsData from "@/lib/getFeaturedProductsData";
import { IFeaturedProduct } from "@/types";
import Image from "next/image";
import React from "react";
import featuredBanner from "@/public/moon/categoryBanner/banner-6.jpg";
const Page = async (): Promise<JSX.Element> => {
  const featuredProducts: IFeaturedProduct[] = await getFeaturedProductsData();
  return (
    // <div className="relative">
    //   <div
    //     className="h-[80vh]"
    //     style={{
    //       backgroundImage: 'url("/moon/categoryBanner/banner-6.jpg")', // Adjust the path if necessary
    //       backgroundSize: "cover", // Ensure the image covers the entire area
    //       backgroundPosition: "center", // Center the image
    //     }}
    //   ></div>
    //   <section className="relative -top-96  ">
    //     <div className="mx-auto w-full max-w-7xl text-center bg-white pt-10">
    //       <h2 className="   text-xl md:text-3xl capitalize raleway-bold 2xl:text-4xl">
    //         Discover the Finest Selection of Featured Products
    //       </h2>
    //     </div>
    //     <FeaturedProducts featuredProducts={featuredProducts} />
    //   </section>
    // </div>
    <div className="relative">
      <div
        className="h-[50vh]"
        style={{
          backgroundImage: 'url("/moon/categoryBanner/banner-6.jpg")', // Adjust the path if necessary
          backgroundSize: "cover", // Ensure the image covers the entire area
          backgroundPosition: "center", // Center the image
        }}
      ></div>
      <section className="relative   ">
        <div className="mx-auto w-full max-w-7xl text-center bg-white pt-10">
          <h2 className="   text-xl md:text-3xl capitalize raleway-bold 2xl:text-4xl">
            Discover the Finest Selection of Featured Products
          </h2>
        </div>
        <FeaturedProducts featuredProducts={featuredProducts} />
      </section>
    </div>
  );
};

export default Page;
