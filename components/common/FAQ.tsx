"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Define a type for the FAQ item
type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: React.FC = () => {
  // State to keep track of which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // List of FAQs
  const faqs: FAQItem[] = [
    {
      question: "What makes Moon Cosmetics products unique?",
      answer:
        "Moon Cosmetics products are specifically formulated to suit the weather conditions of Bangladesh. Our products are manufactured using advanced technology and by skilled workers, ensuring they meet international quality standards while being affordable and accessible to all classes of people.",
    },
    {
      question: "Are Moon Cosmetics products safe for all skin types?",
      answer:
        "Yes, our products are designed to be safe and effective for all skin types. We use high-quality ingredients and rigorously test our products to ensure they are suitable for various skin types and conditions.",
    },
    {
      question: "Where can I purchase Moon Cosmetics products?",
      answer:
        "Moon Cosmetics products are available at various retail outlets across Bangladesh. You can also purchase our products online through our official website and authorized e-commerce platforms.",
    },
    {
      question: "How can I be sure that Moon Cosmetics products are genuine?",
      answer:
        "To ensure you are purchasing genuine Moon Cosmetics products, always buy from our official website, authorized retailers, and verified online stores. Look for our logo and check the packaging for authenticity seals.",
    },
  ];

  return (
    <section>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-black">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="mt-5 lg:mt-10 flex w-full max-w-4xl flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative my-3 w-full rounded-md border border-gray-300 px-12 py-8"
            >
              <div className="max-w-3xl">
                <h2 className="text-lg lg:text-xl text-black raleway-bold">
                  {faq.question}
                </h2>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="mt-4 text-base font-light text-gray-500 work-sans-regular">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
              <button
                className="absolute right-5 top-9 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white"></circle>
                  <path
                    d="M7.04688 11.9999H16.9469"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 7.05005V16.95"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${
                      openFAQ === index ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-100 ease-in-out`}
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
