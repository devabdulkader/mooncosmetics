import React from "react";
import mission from "@/public/moon/about/mission.svg";
import vision from "@/public/moon/about/vision.svg";
import testimonial from "@/public/moon/about/testimonial.jpg";
import Image from "next/image";

// Define TypeScript Interface
interface AboutData {
  id: number;
  title: string;
  content: string;
  label: string;
  image: string;
}

const AboutDetails: React.FC = () => {
  // Array of data with types
  const data: AboutData[] = [
    {
      id: 1,
      title: "Empowering Beauty and Self-Expression",
      content:
        "At Moon Cosmetics, our mission is to empower individuals to embrace their unique beauty and express themselves confidently through high-quality, innovative, and accessible cosmetic products. We are committed to using the finest ingredients and cutting-edge technology to create products that enhance natural beauty, inspire confidence, and promote self-expression. Our goal is to provide a diverse range of beauty solutions that cater to the needs of our customers, ensuring that everyone can feel beautiful, both inside and out.",
      label: "01 Our Mission",
      image: mission.src,
    },
    {
      id: 2,
      title: "Inspiring Confidence and Beauty for All",
      content:
        "Our vision is to become a global leader in the cosmetics industry, recognized for our dedication to quality, innovation, and inclusivity. We aim to set new standards in beauty by continuously evolving our products to meet the changing needs and desires of our customers. As we expand our brand, we aspire to create a world where beauty knows no bounds—where everyone has the opportunity to discover and celebrate their unique beauty with confidence. Moon Cosmetics envisions a future where beauty is not just a luxury but a universal right, accessible to all.",
      label: "02 Our Vision",
      image: vision.src,
    },
    {
      id: 3,
      title: "Message from the Chairman",
      content:
        "COSMETICS It is with immense pleasure and pride that I extend a warm welcome to you, our valued patrons, to the digital realm of MOON COSMETICS. As the Chairman, I am honored to lead a team dedicated to excellence in beauty and skincare. At MOON COSMETICS, we believe in the transformative power of cosmetics. Our commitment to innovation, quality, and sustainability drives us forward every day. We strive to create products that not only enhance natural beauty but also nourish and protect the beauty. In an industry where trends evolve rapidly, we stand firm on our principles of integrity and authenticity. Each product that bears the MOON COSMETICS Label is a testament to our unwavering dedication to craftsmanship and efficacy. Beyond offering exceptional products, we recognize our responsibility to the planet and future generations. Sustainability is at the core of our operations, guiding every decision we make, from sourcing ingredients to packaging materials. As we continue to grow and evolve, our mission remains unchanged: to empower individuals to look and feel their best while championing environmental stewardship. Thank you for choosing MOON COSMETICS. We invite you to explore our range of products and embark on a journey of beauty, wellness, and sustainability with us.",
      label: "03 Message from the Chairman",
      image: testimonial.src,
    },
  ];

  return (
    <section className="px-5 xl:px-20 pt-40 bg-black">
      <div className="py-32">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`relative py-16 md:py-24 lg:py-32 custom-shadow ${
              index === 0
                ? "sticky top-0 -mt-48 mb-48"
                : index === 1
                ? "sticky top-24 -mt-24 mb-24"
                : "sticky top-48"
            } rounded-t-[46px] border-t border-black bg-white px-5 py-10 sm:px-20`}
          >
            <div className="mb-14 flex gap-8 text-2xl font-bold">
              <p>{item.label}</p>
            </div>
            <div className="flex flex-col  gap-8 sm:gap-20 lg:flex-row lg:items-center">
              <div className=";g:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={300}
                  width={300}
                  className="w-full"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                  {item.title}
                </h2>
                <p className="text-sm text-[#636262] sm:text-base">
                  {item.content}
                  {item.id == 3 && (
                    <>
                      <p className="pt-5 text-lg italic">Warm regards,</p>
                      <h3 className="italic font-bold pt-5 flex flex-col space-y-2">
                        <span>SK. SALAH UDDIN</span>
                        <span> Chairman</span>
                        <span> MOON COSMETICS BANGLADESH</span>
                      </h3>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutDetails;
