import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import getFeaturedProductsData from "@/lib/getFeaturedProductsData";
import { IFeaturedProduct } from "@/types";
import React from "react";

const Page = async (): Promise<JSX.Element> => {
  const featuredProducts: IFeaturedProduct[] = await getFeaturedProductsData();
  return (
    <div className="lg:pt-14">
      <FeaturedProducts featuredProducts={featuredProducts} />
    </div>
  );
};

export default Page;
