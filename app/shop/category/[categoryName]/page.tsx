"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
// Define the type for the component props
interface PageProps {
  params: {
    categoryName: string;
  };
}

const Page: React.FC<PageProps> = ({ params: { categoryName } }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [categoryBanner, setCategoryBanner] = useState("");

  useEffect(() => {
    fetch("/data/categoryData.json")
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data);
        const category = data.find((cat) => cat.slug === categoryName);
        if (category) {
          setCategoryBanner(category.image);
        }
      });
  }, []);

  useEffect(() => {
    fetch("/data/productData.json")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);
  function filterProductsByCategorySlug(categorySlug) {
    return productData.filter(
      (product) => product.categorySlug === categorySlug
    );
  }

  // Example usage
  const selectedCategorySlug = categoryName; // This could come from user selection
  const filteredProducts = filterProductsByCategorySlug(selectedCategorySlug);
  console.log(filteredProducts);
  return (
    <div>
      {/* <h1>Category: {categoryName}</h1> */}
      {/* Render the content for the dynamic category */}
      {categoryBanner && (
        <div className="w-full ">
          <Image
            src={categoryBanner}
            alt={`Banner for ${categoryName}`}
            width={800} // Adjust width as needed
            height={400} // Adjust height as needed
            className="w-full h-full"
          />
        </div>
      )}
      {filteredProducts.map((product) => (
        <div key={product.id}></div>
      ))}
    </div>
  );
};

export default Page;
