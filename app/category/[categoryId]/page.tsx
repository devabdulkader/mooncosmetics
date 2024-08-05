import { NextPage } from "next";
import { ICategory, IProduct } from "@/types";
import getCategoriesData from "@/lib/getCategoriesData";
import getProductsData from "@/lib/getProductsData";
import Image from "next/image";

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
  console.log(category);

  if (!category) {
    return <p>Category not found</p>;
  }

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => product.category === category.slug
  );

  return (
    <div>
      <div className="relative h-96">
        <Image
          src={category.banner}
          alt={category.title}
          width={300}
          height={300}
          className="h-full w-full"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 bg-gray-100 px-10 py-2 rounded-full">
          <p className="text-center">{category.breadcrumb}</p>
        </div>
      </div>

      {/* Display filtered products */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 px-5 xl:grid-cols-5 md:px-10 xl:px-20 py-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.name}>
              <div className="border h-60 lg:h-96 p-4 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full"
                />
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
