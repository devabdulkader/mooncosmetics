"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IFeaturedProduct } from "@/types"; // Adjust the import path as necessary

interface FeaturedProductsProps {
  featuredProducts: IFeaturedProduct[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  featuredProducts,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<IFeaturedProduct>(
    featuredProducts[0]
  );

  const handleButtonClick = (product: IFeaturedProduct) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-12 relative">
          {/* Buttons */}
          <div className="flex h-12 mb-8 sticky top-16 z-10">
            {featuredProducts.map((product) => (
              <button
                key={product.id}
                className={`flex-1 py-2 px-4 ${
                  selectedProduct.id === product.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => handleButtonClick(product)}
              >
                {product.button}
              </button>
            ))}
          </div>
          {/* Component */}
          <div className="flex flex-col gap-14">
            {/* Title */}
            <div className="flex max-w-5xl flex-col items-start gap-2.5 lg:flex-row lg:items-center ">
              <h2 className="text-3xl md:text-5xl capitalize raleway-bold">
                {selectedProduct.title}
              </h2>
            </div>
            <div className="lg:h-[400px] mx-auto bg-gray-100 w-full flex justify-center">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                height={300}
                width={300}
                className="h-full"
              />
            </div>
            {/* Displaying the content for the selected product */}
            {selectedProduct.contents.map((content, index) => (
              <div
                key={index}
                className="relative flex cursor-pointer flex-col gap-4 p-5 border-t border-black sm:px-6 md:py-10 lg:flex-row lg:gap-28"
              >
                <div className="flex items-center gap-4 pr-8 lg:w-1/3 lg:gap-20">
                  <p className="p-2.5 text-sm sm:text-sm">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl md:text-3xl raleway-bold">
                    {content.heading}
                  </h3>
                </div>
                <p className="max-w-xl text-sm sm:text-base work-sans-regular">
                  {content.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
