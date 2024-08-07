"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // This effect will only run on the client side
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(event.target.value);
    };

  return (
    <div className="w-full lg:max-w-xl bg-white p-5 rounded-lg lg:rounded-l-none custom-shadow">
      <h3 className="pt-4 text-2xl text-center">Contact Us</h3>
      <form
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="full-name"
          >
            Full Name
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="full-name"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={handleInputChange(setFullName)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handleInputChange(setPhone)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleInputChange(setEmail)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={handleInputChange(setMessage)}
          ></textarea>
        </div>
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

// export default ContactForm;
// "use client";

// import Input from "../input/Input";
// import emailjs from "@emailjs/browser";
// import { useState } from "react";

// const ContactUsForm = () => {
//   const [contacts, setContacts] = useState({
//     name: "",
//     email: "",
//     number:"",
//     message: "",
//   });
//   const sendMail = (e) => {
//     e.preventDefault();

//     emailjs
//     .sendForm(
//       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//       e.target,
//       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//     )
//     .then(
//       (result) => {
//         console.log(result);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );

//     // console.log(
//     //   e.target.from_name.value,
//     //   e.target.from_email.value,
//     //   e.target.message.value
//     // );

//     setContacts({
//       name: "",
//       email: "",
//       number: "",
//       message: "",
//     });
//   };

//   return (
//     <div className=" bg-slate-50 opacity-60 rounded-2xl">
//       <div className="flex flex-col gap-4 md:gap-6 m-2 border border-gray-700 rounded-2xl p-4">
//         <form onSubmit={sendMail}>
//           <div className="grid md:grid-cols-2 gap-4">
//             <Input
//               label="Name"
//               name="from_name"
//               type="text"
//               placeholder="Your Name"
//               preValue={contacts?.name}
//               onChange={(e) => {
//                 setContacts({ ...contacts, name: e.target.value });
//               }}
//             />
//             <Input
//               label="Email"
//               name="from_email"
//               type="text"
//               placeholder="example@gmail.com"
//               preValue={contacts?.email}
//               onChange={(e) => {
//                 setContacts({ ...contacts, email: e.target.value });
//               }}
//             />
//           </div>
//           <Input
//             label="Contact Number"
//             type="text"
//             placeholder="Your Contact Number"
//             preValue={contacts.number}
//             onChange={(e) => {
//               setContacts({ ...contacts, number: e.target.value });
//             }}
//           />
//           <div>
//             <label className="block font-medium mb-1">Message</label>
//             <textarea
//               name="message"
//               className="resize-y w-full rounded-md bg-slate-50 border-2 py-1 px-2"
//               placeholder="Message"
//               rows={5}
//               value={contacts.message}
//               onChange={(e) => {
//                 setContacts({ ...contacts, message: e.target.value });
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             className="text-md rounded-xl font-normal text-white bg-red-600 hover:bg-red-800  py-3 px-4 text-center duration-500"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUsForm;
