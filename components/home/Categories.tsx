import Image from "next/image";
import Link from "next/link";
import category1 from "@/public/category/category1.jpeg";
import category2 from "@/public/category/category2.jpeg";
import category3 from "@/public/category/category3.jpeg";
import category4 from "@/public/category/category4.jpeg";
import category5 from "@/public/category/category5.jpeg";
import category6 from "@/public/category/category6.jpeg";
import { ICategory } from "@/types";

const categories: ICategory[] = [
  {
    image: category1,
    title: "Oil Collection",
    buttonText: "Oil Collection",
    slug: "herbal-oil",
    breadcrumb: "",
  },
  {
    image: category2,
    title: "Hair Care",
    buttonText: "Hair Care",
    slug: "hair-care",
    breadcrumb: "",
  },
  {
    image: category3,
    title: "Fragrance",
    buttonText: "Fragrance",
    slug: "fragrance",
    breadcrumb: "",
  },
  {
    image: category4,
    title: "Skin Care",
    buttonText: "Skin Care",
    slug: "skin-care",
    breadcrumb: "",
  },
  {
    image: category5,
    title: "Color Cosmetics",
    buttonText: "Color Cosmetics",
    slug: "color-cosmetics",
    breadcrumb: "",
  },
  {
    image: category6,
    title: "Winter Care",
    buttonText: "Winter Care",
    slug: "winter-care",
    breadcrumb: "",
  },
];

const Categories = () => {
  return (
    <div className="bg-white">
      <h2 className="text-2xl raleway-medium text-center uppercase py-5 lg:pt-10 lg:py-0 raleway-medium lg:text-3xl">
        All of Our Categories
      </h2>
      <section className="container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 lg:p-10 ">
        {categories.map((category, index) => (
          <Link key={index} href={`/shop/category/${category.slug}`}>
            <div className="relative border flex flex-col group cursor-pointer lg:w-96 mx-auto">
              <div className="w-full  relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full "
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-center uppercase text-white py-2 lg:py-4 lg:px-10 text-sm lg:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.buttonText}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Categories;
