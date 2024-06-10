import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ravifarhan" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mravifarhan" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/mravifarhan" },
  { icon: <FaXTwitter />, path: "https://twitter.com/ravifarhan2" },
];

const SocialMedia = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link target="_blank" key={index} href={item.path} className={iconStyles}>
          {item.icon} 
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
