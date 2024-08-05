import Image from "next/image";
import React from "react";
import factory from "@/public/moon/Factory/factory.jpg";
const contactData = [
  {
    title: "Technical support",
    email: "support@example.com",
    phone: "+1 234-567-89",
  },
  {
    title: "Sales questions",
    email: "sales@example.com",
    phone: "+1 234-567-89",
  },
  {
    title: "Press",
    email: "press@example.com",
    phone: "+1 234-567-89",
  },
  {
    title: "Bug report",
    email: "bugs@example.com",
    phone: "+1 234-567-89",
  },
];
const page = () => {
  return (
    <div className="w-full max-w-7xl pt-10 md:pt-20 mx-auto px-2 md:px-4">
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
          </div>
        </div>

        {/* Content */}
        <section className="flex flex-col md:flex-row">
          <div className="h-96 md:h-[70vh] w-full md:w-1/2">
            <Image src={factory} alt="" className="h-full w-full" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 px-20 pt-10 md:pt-0">
            {contactData.map((contact, index) => (
              <div key={index} className="mb-12 w-full ">
                <p className="mb-2 font-bold">{contact.title}</p>
                <p className="text-neutral-500">{contact.email}</p>
                <p className="text-neutral-500">{contact.phone}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default page;
