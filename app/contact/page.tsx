import Image from "next/image";
import React from "react";
import factory from "@/public/moon/Factory/factory.jpg";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const page = () => {
  return (
    <div className="w-full max-w-7xl  md:pt-5 xl:mt-16 mx-auto px-2 md:px-4">
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-5xl text-center mb-10 ">
            <h2 className="  px-3 text-xl md:text-3xl capitalize raleway-bold 2xl:text-4xl pb-10">
              Contact With Us
            </h2>
          </div>

          <Image
            src={factory}
            alt=""
            layout="responsive"
            className="h-[60vh] w-full"
          />

          <section className="lg:flex">
            <ContactInfo />
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
