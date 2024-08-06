import Image from "next/image";
import Link from "next/link";

import { ICategory } from "@/types";
import getCategoriesData from "@/lib/getCategoriesData";
import AnimatedSVG from "../motion/AnimatedSVG";
import MotionContent from "../motion/MotionContent";

const Categories = async () => {
  const categories: ICategory[] = await getCategoriesData();

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl pt-10 md:px-10 ">
        <div className="relative">
          <MotionContent>
            <h1 className="mb-4 text-3xl  md:text-6xl raleway-bold text-center">
              All Categories
            </h1>
          </MotionContent>
          <AnimatedSVG />
        </div>
        <section className=" w-full  grid grid-cols-2 px-2 lg:px-0 lg:grid-cols-3 gap-3">
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
