import Image from "next/image";
import React from "react";
import factory from "@/public/moon/Factory/factory.jpg";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const page = () => {
  return (
    <div className="w-full max-w-7xl pt-10 md:pt-16 mx-auto px-2 md:px-4">
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-5xl text-center mb-10 ">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl raleway-bold">
              Connect with Us for Assistance!
            </h1>
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
