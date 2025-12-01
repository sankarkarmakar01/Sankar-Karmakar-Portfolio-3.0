import { socialLinks } from "@/data/socialLinksData";
import { SocialLinkElementsType } from "@/interfaces/SocialLinkElementsType";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

export const socialLinkElements: SocialLinkElementsType[] = [
  {
    link: socialLinks.LinkedinLink,
    icon: FiLinkedin,
    textColor: "text-sky-600/50",
    hoverColor: "text-sky-600",
  },
  {
    link: socialLinks.GithubLink,
    icon: FaGithub,
    textColor: "text-gray-600/50",
    hoverColor: "text-gray-600",
  },
  {
    link: socialLinks.Gmail,
    icon: MdAlternateEmail,
    textColor: "text-orange-600/50",
    hoverColor: "text-orange-600",
  },
  {
    link: socialLinks.InstagramLink,
    icon: FaInstagram,
    textColor: "text-pink-600/50",
    hoverColor: "text-pink-600",
  },
  {
    link: socialLinks.XTwitterLink,
    icon: FaXTwitter,
    textColor: "text-gray-600/50",
    hoverColor: "text-gray-600",
  },
  {
    link: socialLinks.YoutubeLink,
    icon: FaYoutube,
    textColor: "text-red-600/50",
    hoverColor: "text-red-600",
  },
];
