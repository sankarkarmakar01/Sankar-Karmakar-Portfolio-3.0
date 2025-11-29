import { socialLinks } from "@/data/socialLinksData";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 ">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            Contact
          </span>
          <span className="text-white"> With Me</span>
        </h2>
        <div className="mt-2 h-1 w-24 bg-sky-300 mx-auto rounded-full opacity-80"></div>
      </div>

      <div className="flex items-center gap-6 text-3xl sm:text-4xl md:text-5xl ">
        <Link href={socialLinks.LinkedinLink || "#"} target="_blank">
          <FiLinkedin className="text-sky-600/50 hover:text-sky-600 transition-all duration-300 hover:scale-125 cursor-pointer" />
        </Link>

        <Link href={socialLinks.GithubLink || "#"} target="_blank">
          <FaGithub className="text-gray-600/50 hover:text-gray-600 transition-all duration-300 hover:scale-125 cursor-pointer" />
        </Link>
        <Link href={socialLinks.Gmail || "#"} target="_blank">
          <MdAlternateEmail className="text-orange-600/50 hover:text-orange-600 transition-all duration-300 hover:scale-125 cursor-pointer" />
        </Link>
        <Link href={socialLinks.InstagramLink || "#"} target="_blank">
          <FaInstagram className="text-pink-600/50 hover:text-pink-600 transition-all duration-300 hover:scale-125 cursor-pointer" />
        </Link>
        <Link href={socialLinks.XTwitterLink || "#"} target="_blank">
          <FaXTwitter className="text-gray-500/50 hover:text-gray-500 transition-all duration-300 hover:scale-125 cursor-pointer" />
        </Link>
        <Link href={socialLinks.YoutubeLink || "#"} target="_blank">
          <FaYoutube className="text-red-600/50 hover:text-red-600 transition-all duration-300 hover:scale-125 cursor-pointer" />
        </Link>
      </div>

      <p className="text-sm text-gray-400 mt-4 tracking-wider">
        &copy; 2025, All rights reserved by{" "}
        <span className="text-sky-400 font-semibold">Sankar Karmakar</span>
      </p>
    </div>
  );
};

export default Footer;
