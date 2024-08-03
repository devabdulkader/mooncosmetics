// app/page.tsx (Server Component)
import React from "react";
import { IProduct } from "@/types";
import getProductsData from "@/lib/getProductsData";
import ShopSection from "@/components/shop/ShopSection";

const Page = async () => {
  // Optionally fetch products data in the server component if needed
  const products: IProduct[] = await getProductsData();

  return (
    <div>
      {/* Pass data down to the client component if needed */}
      <ShopSection products={products} />
    </div>
  );
};

export default Page;
