"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PageProps, ICategory, IProduct } from "@/types";

const Page: React.FC<PageProps> = ({ params: { categoryName } }) => {
  const [categoryData, setCategoryData] = useState<ICategory[]>([]);
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [categoryBanner, setCategoryBanner] = useState<string>("");

  useEffect(() => {
    fetch("/data/categoryData.json")
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data);
        const category = data.find(
          (cat: ICategory) => cat.slug === categoryName
        );
        if (category) {
          setCategoryBanner(category.image);
        }
      });
  }, [categoryName]); // Added categoryName as a dependency

  useEffect(() => {
    fetch("/data/productData.json")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);

  function filterProductsByCategorySlug(categorySlug: string): IProduct[] {
    return productData.filter(
      (product: IProduct) => product.category === categorySlug
    );
  }

  // Example usage
  const filteredProducts = filterProductsByCategorySlug(categoryName);

  return (
    <div>
      {categoryBanner && (
        <div className="w-full">
          <Image
            src={categoryBanner}
            alt={`Banner for ${categoryName}`}
            width={800} // Adjust width as needed
            height={400} // Adjust height as needed
            className="w-full h-full"
          />
        </div>
      )}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product: IProduct, index: number) => (
          <div key={index}>
            <h2>{product.name}</h2>
            <Image
              src={product.image}
              alt={product.name}
              width={300} // Adjust width as needed
              height={200} // Adjust height as needed
            />
          </div>
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default Page;
