import Image from "next/image";
import Link from "next/link";

import { ICategory } from "@/types";
import getCategoriesData from "@/lib/getCategoriesData";

const Categories = async () => {
  const categories: ICategory[] = await getCategoriesData();

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl pt-10 md:px-10 ">
        <h1 className="mb-4 lg:mb-14 text-4xl font-bold md:text-6xl raleway-medium text-center">
          All of Our Categories
        </h1>
        <section className=" w-full  grid grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <div className="relative border flex flex-col group cursor-pointer ">
                <div className="w-full  relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={300}
                    height={300}
                    className="h-full w-full "
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-center uppercase text-white py-2 lg:py-4 lg:px-10 text-base lg:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Categories;
