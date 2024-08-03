import React from "react";

// Define the categories
const categories = [
  { title: "Herbal Oil", slug: "herbal-oil" },
  { title: "Hair Care", slug: "hair-care" },
  { title: "Fragrance", slug: "fragrance" },
  { title: "Attar", slug: "attar" },
  { title: "Perfume", slug: "perfume" },
  { title: "Color Cosmetics", slug: "color-cosmetics" },
  { title: "Winter Care", slug: "winter-care" },
];

const AllCategories = () => {
  return (
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
  );
};

export default AllCategories;
