import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import getFeaturedProductsData from "@/lib/getFeaturedProductsData";
import { IFeaturedProduct } from "@/types";
import React from "react";

const Page = async (): Promise<JSX.Element> => {
  const featuredProducts: IFeaturedProduct[] = await getFeaturedProductsData();
  return (
    <div className="lg:pt-32">
      <div className="mx-auto w-full max-w-6xl text-center  ">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl raleway-bold">
          Discover the Finest Selection of Featured Products at Moon Cosmetics
        </h1>
      </div>
      <FeaturedProducts featuredProducts={featuredProducts} />
    </div>
  );
};

export default Page;
