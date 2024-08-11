import { NextPage } from "next";
import { ICategory, IProduct } from "@/types";
import getCategoriesData from "@/lib/getCategoriesData";
import getProductsData from "@/lib/getProductsData";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

interface CategoryPageProps {
  params: {
    categoryId: string; // Use categoryId as per your route parameter
  };
}

// Update the NextPage type to reflect the correct props
const Page: NextPage<CategoryPageProps> = async ({ params }) => {
  // Fetch the categories and products data
  const categories: ICategory[] = await getCategoriesData();
  const products: IProduct[] = await getProductsData();

  // Filter the category based on categoryId
  const category = categories.find((cat) => cat.slug === params.categoryId);

  if (!category) {
    return <p>Category not found</p>;
  }

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => product.category === category.slug
  );

  return (
    <div>
      <div className="relative h-auto w-full">
        <Image
          src={category.banner}
          alt={category.title}
          width={300}
          height={300}
          layout="responsive"
          className="h-full w-full"
        />
        <div className="absolute -bottom-5 flex justify-center items-center w-full">
          <p className="text-center text-white bg-slate-800 px-5 rounded-full py-2">
            {category.breadcrumb}
          </p>
        </div>
      </div>

      {/* Display filtered products */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 px-2 xl:grid-cols-5 md:px-10 xl:px-10 py-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.name}
              className="relative group place-self-center lg:pb-4"
            >
              {" "}
              {/* Add group class here */}
              <div className="border h-54 w-auto   sm:w-40 lg:h-72 lg:w-56 xl:h-72 xl:w-56   p-4 relative ">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full"
                />
                {/* Inset overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Centered button shown on hover */}
                <div className="absolute inset-0 flex justify-center items-end ">
                  <a
                    href="https://m.me/mooncosmeticsbd82"
                    target="_blank"
                    className="w-full"
                  >
                    <button className="bg-orange-300 w-full text-xs lg:text-base py-2 text-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-10 lg:py-[10px] flex justify-center items-center">
                      Buy Now
                      {/* Cart Icon (SVG) */}
                      <FaCartShopping className="text-white ml-2" />
                    </button>
                  </a>
                </div>
              </div>
              <h4 className="text-sm lg:text-[1rem] font-normal pt-3">
                {product.name}
              </h4>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
