import Link from "next/link";
import React from "react";
import Heading from "../helper/Heading";
import { socialLinkElements } from "@/data/socialLinkElementData";

const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 ">
      <Heading first="Contact" second="With Me" />

      <div className="flex items-center gap-6 text-3xl sm:text-4xl md:text-5xl mt-5">
        {socialLinkElements.map((elem, idx) => {
          return (
            <Link key={idx} href={elem.link || "#"} target="_blank">
              <elem.icon
                className={`${elem.textColor} hover:${elem.hoverColor} transition-all duration-300 hover:scale-125 cursor-pointer`}
              />
            </Link>
          );
        })}
      </div>

      <p className="text-sm text-gray-400 mt-5 tracking-wider">
        &copy; 2025, All rights reserved by{" "}
        <span className="text-sky-400 font-semibold cursor-pointer">
          Sankar Karmakar
        </span>
      </p>
    </div>
  );
};

export default Footer;
