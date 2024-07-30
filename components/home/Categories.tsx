import category1 from "@/public/category/category1.jpeg";
import category2 from "@/public/category/category2.jpeg";
import category3 from "@/public/category/category3.jpeg";
import category4 from "@/public/category/category4.jpeg";
import category5 from "@/public/category/category5.jpeg";
import category6 from "@/public/category/category6.jpeg";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="  bg-white">
      <h2 className="text-2xl raleway-medium text-center uppercase py-5 lg:pt-10 lg:py-0">
        All of Our Categories
      </h2>
      <section className="container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 lg:p-10">
        <div className="border   flex flex-col ">
          <div className="w-full h-[25vh] lg:h-[50vh]">
            <Image
              src={category1}
              alt="Hero Banner"
              //   layout="responsive"
              className="h-full w-full "
            />
          </div>

          <button className="uppercase text-white py-2 lg:py-4 lg:px-10 bg-[#663130] text-sm lg:text-base">
            - Oil Collection -
          </button>
        </div>

        <div className="border   flex flex-col ">
          <div className="w-full h-[25vh] lg:h-[50vh]">
            <Image
              src={category2}
              alt="Hero Banner"
              //   layout="responsive"
              className="h-full w-full"
            />
          </div>

          <button className="uppercase text-white py-2 lg:py-4 lg:px-10 bg-[#663130] text-sm lg:text-base">
            - Hair Care -
          </button>
        </div>

        <div className="border   flex flex-col ">
          <div className="w-full h-[25vh] lg:h-[50vh]">
            <Image
              src={category3}
              alt="Hero Banner"
              //   layout="responsive"
              className="h-full w-full"
            />
          </div>

          <button className="uppercase text-white py-2 lg:py-4 lg:px-10 bg-[#663130] text-sm lg:text-base">
            - Fragrance -
          </button>
        </div>

        <div className="border   flex flex-col">
          <div className="w-full h-[25vh] lg:h-[50vh]">
            <Image
              src={category4}
              alt="Hero Banner"
              //   layout="responsive"
              className="h-full w-full"
            />
          </div>

          <button className="uppercase text-white py-2 lg:py-4 lg:px-10 bg-[#663130] text-sm lg:text-base">
            - Skin Care -
          </button>
        </div>

        <div className="border   flex flex-col ">
          <div className="w-full h-[25vh] lg:h-[50vh]">
            <Image
              src={category5}
              alt="Hero Banner"
              //   layout="responsive"
              className="h-full w-full"
            />
          </div>

          <button className="uppercase text-white py-2 lg:py-4 lg:px-10 bg-[#663130] text-sm lg:text-base">
            - Color Cosmetics -
          </button>
        </div>

        <div className="border   flex flex-col ">
          <div className="w-full h-[25vh] lg:h-[50vh]">
            <Image
              src={category6}
              alt="Hero Banner"
              //   layout="responsive"
              className="h-full w-full"
            />
          </div>

          <button className="uppercase text-white py-2 lg:py-4 lg:px-10 bg-[#663130] text-sm lg:text-base">
            - Winter Care-
          </button>
        </div>
      </section>
    </div>
  );
};

export default Categories;
