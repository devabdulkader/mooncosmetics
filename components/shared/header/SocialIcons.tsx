import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialIcons = [
  {
    Icon: FaFacebookF,
    text: "Facebook",
    bgColor: "bg-blue-600",
    textColor: "text-blue-600",
    hoverBgColor: "hover:bg-blue-600",
    url: "https://www.facebook.com/yourprofile",
  },
  {
    Icon: FaTwitter,
    text: "Twitter",
    bgColor: "bg-blue-400",
    textColor: "text-blue-400",
    hoverBgColor: "hover:bg-blue-400",
    url: "https://www.twitter.com/yourprofile",
  },
  {
    Icon: FaLinkedinIn,
    text: "LinkedIn",
    bgColor: "bg-blue-700",
    textColor: "text-blue-700",
    hoverBgColor: "hover:bg-blue-700",
    url: "https://www.linkedin.com/in/yourprofile",
  },
  {
    Icon: FaInstagram,
    text: "Instagram",
    bgColor: "bg-pink-500",
    textColor: "text-pink-500",
    hoverBgColor: "hover:bg-pink-500",
    url: "https://www.instagram.com/yourprofile",
  },
  // {
  //   Icon: MdEmail,
  //   text: "Gmail",
  //   bgColor: "bg-red-600",
  //   textColor: "text-red-600",
  //   hoverBgColor: "hover:bg-red-600",
  //   url: "mailto:mooncosmeticscorporate@gmail.com",
  // },
];

const SocialIcons = () => {
  return (
    <div className="flex">
      {socialIcons.map((socialIcon, index) => (
        <a
          key={index}
          href={socialIcon.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-8 w-8 rounded-full mr-3 justify-center items-center transition-colors duration-300 ${socialIcon.textColor} ${socialIcon.hoverBgColor} hover:text-white`}
        >
          <socialIcon.Icon className="cursor-pointer text-[14px]" />
          <p className="hidden">{socialIcon.text}</p>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
