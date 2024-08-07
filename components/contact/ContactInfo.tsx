import React from "react";
import { FaEnvelope, FaGlobe } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="pt-10">
      <div className="mb-5">
        <h2 className="font-bold md:text-5xl text-3xl mb-4 michroma-regular">
          Get in Touch with Us
        </h2>
        <p className="mb-8 poppins-light">
          Feel free to reach out through any of the methods below, and our team
          will respond promptly. We look forward to hearing from you!
        </p>
      </div>

      <div className="grid grid-cols-2 montserrat-light">
        <div className="mb-5">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mr-2"
            >
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 7a2 2 0 0 1 2 2" />
              <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
            <h3 className="mb-2">Call Center</h3>
          </div>
          <p>+8801716-822400</p>
        </div>

        <div className="mb-5">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mr-2"
            >
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <h3 className="mb-2">Our Location</h3>
          </div>
          <p className="pl-1">Dhaka, Bangladesh</p>
        </div>

        <div className="mb-5">
          <div className="flex">
            <FaEnvelope className="mt-1 mr-2" />
            <h3 className="mb-2">Email</h3>
          </div>
          <p>mooncosmeticscorporate@gmail.com</p>
        </div>

        <div>
          <div className="flex">
            <FaGlobe className="mt-1 mr-2" />
            <h3 className="mb-2">Social Network</h3>
          </div>
          <div className="flex space-x-4 pl-1">
            <span>f</span>
            <span>x</span>
            <span>in</span>
            <span>g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
