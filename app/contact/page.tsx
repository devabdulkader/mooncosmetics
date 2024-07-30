import React from "react";
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
    <div className="container my-12 mx-auto px-2 md:px-4">
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-wrap">
          <div className="flex justify-center lg:w-1/2">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
            </div>
          </div>

          <div className="flex flex-wrap lg:w-1/2">
            {contactData.map((contact, index) => (
              <div
                key={index}
                className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6"
              >
                <div className="align-start flex">
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold">{contact.title}</p>
                    <p className="text-neutral-500">{contact.email}</p>
                    <p className="text-neutral-500">{contact.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
