import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const socialIcons = [
  {
    Icon: FaFacebookF,
    text: "Facebook",
    bgColor: "bg-blue-600",
    textColor: "text-blue-600",
    hoverBgColor: "hover:bg-blue-600",
  },
  {
    Icon: FaTwitter,
    text: "Twitter",
    bgColor: "bg-blue-400",
    textColor: "text-blue-400",
    hoverBgColor: "hover:bg-blue-400",
  },
  {
    Icon: FaLinkedinIn,
    text: "LinkedIn",
    bgColor: "bg-blue-700",
    textColor: "text-blue-700",
    hoverBgColor: "hover:bg-blue-700",
  },
  {
    Icon: FaInstagram,
    text: "Instagram",
    bgColor: "bg-pink-500",
    textColor: "text-pink-500",
    hoverBgColor: "hover:bg-pink-500",
  },
];

const SocialIcons = () => {
  return (
    <div className="">
      <div className="flex ">
        {socialIcons.map((socialIcon, index) => (
          <div
            key={index}
            className={`flex h-8 w-8  rounded-full mr-3  justify-center items-center transition-colors duration-300 ${socialIcon.textColor} ${socialIcon.hoverBgColor} hover:text-white`}
          >
            <socialIcon.Icon className="cursor-pointer text-[14px]" />
            <p className="hidden">{socialIcon.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
