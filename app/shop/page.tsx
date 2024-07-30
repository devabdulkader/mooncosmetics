import React from "react";

const page = () => {
  const categories: { title: string; slug: string }[] = [
    {
      title: "Oil Collection",
      slug: "herbal-oil",
    },
    {
      title: "Hair Care",
      slug: "hair-care",
    },
    {
      title: "Fragrance",
      slug: "fragrance",
    },
    {
      title: "Skin Care",
      slug: "skin-care",
    },
    {
      title: "Color Cosmetics",
      slug: "color-cosmetics",
    },
    {
      title: "Winter Care",
      slug: "winter-care",
    },
  ];

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full px-5 py-6 md:px-10 md:py-14 bg-white">
        {/* Component */}
        <div className="flex flex-col gap-12 ">
          {/* Title */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold md:text-5xl">Filter products</h3>
          </div>
          {/* Content */}
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[max-content_1fr] ">
            {/* Filters */}
            <div className="mb-4 max-w-none lg:max-w-sm ">
              <form
                name="wf-form-Filter-2"
                method="get"
                className="flex-col gap-6"
              >
                {/* Filters title */}
                <div className="mb-6 flex items-center justify-between py-4 [border-bottom:1px_solid_rgb(217,_217,_217)]">
                  <h5 className="text-xl font-bold">Filters</h5>
                  <a href="#" className="text-sm">
                    <p>Clear all</p>
                  </a>
                </div>
                {/* Search input */}
                <input
                  type="text"
                  className="mb-10 block h-9 min-h-[44px] w-full rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] bg-[16px_center] bg-no-repeat py-3 pl-11 pr-4 text-sm font-bold text-[#333333] [background-size:18px] [border-bottom:1px_solid_rgb(215,_215,_221)]"
                  placeholder="Search"
                  style={{
                    backgroundImage:
                      'url("https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaa_MagnifyingGlass.svg")',
                  }}
                />
                {/* Categories */}
                <div className="flex flex-col gap-6">
                  <p className="font-semibold">Categories</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {categories.map((category) => (
                      <a
                        key={category.slug}
                        href="#"
                        className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
                      >
                        <p>{category.title}</p>
                      </a>
                    ))}
                  </div>
                </div>
                {/* Divider */}
                <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
              </form>
            </div>
            {/* Decor */}
            <div className="w-full [border-left:1px_solid_rgb(217,_217,_217)]">
              <div className="h-16 bg-[#cccccc]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
