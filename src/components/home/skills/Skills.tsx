import Heading from "@/components/helper/Heading";
import { techStacks } from "@/data/techStacksData";
import Image from "next/image";
import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="pt-26 pb-16 min-h-screen flex flex-col items-center justify-center">
      <Heading first="Tech" second="Stacks" />

      <div className="container max-w-5xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-12 justify-items-center">
          {techStacks.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div
                  className={`w-18 h-18 md:w-20 md:h-20 bg-[#1a1a1a] rounded-2xl flex items-center justify-center p-4 border border-white/5 transition-all duration-300 group-hover:border-sky-400/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] hover-float`}
                >
                  <Image
                    src={elem.source}
                    alt={elem.name}
                    width={100}
                    height={100}
                    quality={75}
                    sizes="(max-width: 768px) 60px, 100px"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <span className="text-sm font-bold text-gray-300 group-hover:text-white">
                  {elem.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
