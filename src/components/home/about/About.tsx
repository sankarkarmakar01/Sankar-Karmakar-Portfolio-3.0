import Heading from "@/components/helper/Heading";
import LocalTimezone from "@/components/helper/LocalTimezone";
import { aboutData } from "@/data/aboutData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-neutral-950 text-white pt-0 md:pt-26 pb-4">
      <div className="max-w-5xl mx-auto px-6 flex gap-8 flex-col">
        <Heading first="About" second="Me" />

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-neutral-900 rounded-3xl p-8 border border-neutral-800 flex flex-col justify-center hover:border-neutral-700 transition-colors">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">
              {aboutData.firstLine}
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed mb-4">
              {aboutData.secondLine}
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              {aboutData.thirdLine}
            </p>
          </div>

          <div className="md:col-span-1 md:row-span-1 bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-800">
            <Image
              src="/images/Sankar_Karmakar.jpg"
              alt="Sankar Karmakar"
              width={400}
              height={400}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500 cursor-pointer"
              placeholder="blur"
              blurDataURL="/images/Sankar_Karmakar.jpg"
              sizes="(max-width: 768px) 100vw, 400px"
              quality={75}
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 bg-neutral-900 rounded-3xl p-6 border border-neutral-800 flex flex-col justify-between relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity grayscale"></div>
            <div className="relative z-10">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                Based In
              </p>
              <p className="text-xl font-bold mt-1">{aboutData.location}</p>
            </div>
            <div className="relative z-10">
              <LocalTimezone />
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-1 bg-indigo-900 rounded-3xl p-6 border border-indigo-800 flex flex-col justify-center items-center text-center">
            <p className="text-indigo-300 text-xs uppercase font-bold mb-2">
              Favorite Stack
            </p>
            <div className="text-2xl font-bold text-white">
              {aboutData.favoriteStack}
            </div>
          </div>

          <Link
            href="#contact"
            className="md:col-span-2 md:row-span-1 bg-neutral-900 rounded-3xl p-6 border border-neutral-800 flex items-center justify-between group hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <div>
              <p className="text-neutral-400 text-sm">
                Interested in working together?
              </p>
              <p className="text-2xl font-bold text-white mt-1">
                Let&apos;s schedule a call
              </p>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
