"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Define the types for category and product data
interface Category {
  title: string;
  breadcrumb: string;
  slug: string;
  image: string;
}

interface Product {
  id: string;
  name: string;
  categorySlug: string;
  brand: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  popularity: number;
  trendingStatus: boolean;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
}

// Define the type for the component props
interface PageProps {
  params: {
    categoryName: string;
  };
}

const Page: React.FC<PageProps> = ({ params: { categoryName } }) => {
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  const [productData, setProductData] = useState<Product[]>([]);
  const [categoryBanner, setCategoryBanner] = useState<string>("");

  useEffect(() => {
    fetch("/data/categoryData.json")
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data);
        const category = data.find(
          (cat: Category) => cat.slug === categoryName
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

  function filterProductsByCategorySlug(categorySlug: string): Product[] {
    return productData.filter(
      (product: Product) => product.categorySlug === categorySlug
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
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <Image
              src={product.image}
              alt={product.name}
              width={300} // Adjust width as needed
              height={200} // Adjust height as needed
            />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default Page;
