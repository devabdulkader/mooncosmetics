import React from "react";
import testimonial from "@/public/moon/about/testimonial.jpg";
import Image from "next/image";
const Testimonial = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl  flex flex-col gap-y-16 px-5  sm:gap-y-20 md:px-10 py-16">
        {/* Heading */}
        <h2 className="text-center text-3xl  md:text-5xl italic raleway-bold">
          Message from the Chairman
        </h2>
        {/* Content Container */}
        <div className="mx-auto grid grid-cols-1 items-center  gap-y-10 sm:gap-y-14 ">
          {/* Contents */}
          <div className="lg: h-full">
            {/* Content */}

            <h3 className="text-xl lg:text-2xl font-bold pb-5">
              Welcome to MOON COSMETICS MOON{" "}
            </h3>
            <p className="work-sans-regular lg:text-xl">
              COSMETICS It is with immense pleasure and pride that I extend a
              warm welcome to you, our valued patrons, to the digital realm of
              MOON COSMETICS. As the Chairman, I am honored to lead a team
              dedicated to excellence in beauty and skincare. At MOON COSMETICS,
              we believe in the transformative power of cosmetics. Our
              commitment to innovation, quality, and sustainability drives us
              forward every day. We strive to create products that not only
              enhance natural beauty but also nourish and protect the beauty. In
              an industry where trends evolve rapidly, we stand firm on our
              principles of integrity and authenticity. Each product that bears
              the MOON COSMETICS Label is a testament to our unwavering
              dedication to craftsmanship and efficacy. Beyond offering
              exceptional products, we recognize our responsibility to the
              planet and future generations. Sustainability is at the core of
              our operations, guiding every decision we make, from sourcing
              ingredients to packaging materials. As we continue to grow and
              evolve, our mission remains unchanged: to empower individuals to
              look and feel their best while championing environmental
              stewardship. Thank you for choosing MOON COSMETICS. We invite you
              to explore our range of products and embark on a journey of
              beauty, wellness, and sustainability with us.
            </p>
            <p className="pt-5 text-lg italic">Warm regards,</p>
            <h3 className="italic font-bold pt-5 flex flex-col space-y-2">
              <span>SK. SALAH UDDIN</span>
              <span> Chairman</span>
              <span> MOON COSMETICS BANGLADESH</span>
            </h3>
          </div>
          {/* Image */}
          <div className="w-60 h-60 rounded-full">
            <Image
              src={testimonial}
              width={300}
              height={300}
              alt=""
              className="inline-block h-full w-full max-w-lg object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
