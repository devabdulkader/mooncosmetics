"use client";
import React from "react";
import Image from "next/image";
import { IFeaturedProduct } from "@/types"; // Adjust the import path as necessary

interface FeaturedProductsProps {
  featuredProducts: IFeaturedProduct[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  featuredProducts,
}) => {
  const colors = ["#262125", "#D3EDC8", "#5BA653"];
  const textColors = ["text-white", "text-black", "text-white"];

  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-12 relative ">
          {/* Component */}
          <div className="flex flex-col gap-14">
            {featuredProducts.map((product, productIndex) => (
              <div
                key={productIndex}
                style={{
                  backgroundColor: colors[productIndex % colors.length],
                }}
                className={`${
                  textColors[productIndex % textColors.length]
                } py-10`}
              >
                <div className="lg:h-[400px] mx-auto  w-full flex justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    height={300}
                    width={300}
                    className="h-full"
                  />
                </div>
                {/* Title */}
                <div className="flex  flex-col items-start gap-2.5 lg:flex-row lg:items-center mb-5 md:mb-10 px-5 lg:px-10">
                  <h2 className="text-2xl md:text-5xl capitalize raleway-bold">
                    {product.title}
                  </h2>
                </div>

                {/* Displaying the content for each product */}
                <section className="flex flex-wrap w-full gap-6 px-5 lg:px-10">
                  {product.contents.map((content, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col   lg:w-[calc(33.333%-1rem)] "
                    >
                      <h3 className="text-xl mb-3 raleway-bold">
                        {content.heading}
                      </h3>
                      <p className="max-w-xl text-sm sm:text-base work-sans-regular">
                        {content.text}
                      </p>
                    </div>
                  ))}
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
