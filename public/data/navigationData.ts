// navigationData.js
const navigationData = [
  { title: "Home", path: "/", dropdown: false },
  {
    title: "Product Category",
    path: "#",
    dropdown: true,
    items: [
      { title: "Herbal Oil", path: "/product-category/herbal-oil" },
      { title: "Hair Care", path: "/product-category/hair-care" },
      {
        title: "Winter Care Collection",
        path: "/product-category/winter-care-collection",
      },
      { title: "Color Cosmetics", path: "/product-category/color-cosmetics" },
      { title: "Fragrances", path: "/product-category/fragrances" },
    ],
  },
  { title: "About Us", path: "/about-us", dropdown: false },
  { title: "Contact Us", path: "/contact-us", dropdown: false },
];

export default navigationData;
