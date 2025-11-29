import Heading from "@/components/helper/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="pt-26 pb-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
        <Heading first="Featured" second="Projects" />

        <div className="space-y-16 md:space-y-24">
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center group">
            <div className="md:col-span-7 relative rounded shadow-2xl overflow-hidden border border-slate-800 ">
              <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10 "></div>

              <Image
                src="/images/blog_spot.png"
                alt="Project Screenshot"
                width={800}
                height={450}
                priority
                quality={75}
                placeholder="blur"
                blurDataURL="/images/blog_spot.png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
            </div>

            <div className="md:col-span-5 md:-ml-12 relative z-20 flex flex-col md:items-end text-left md:text-right mt-6 md:mt-0">
              <p className="text-indigo-400 font-mono text-sm mb-2">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Blog Spot - Full Stack Blog Application
              </h3>

              <div className="bg-slate-800 p-6 rounded shadow-xl mb-4 border border-slate-700">
                <p className="text-slate-400 text-sm leading-relaxed">
                  Developed a fully responsive Blog Application using the MERN
                  stack, Tailwind CSS, and Shadcn UI. It includes clean modern
                  UI components, dynamic APIs, secure JWT authentication, and
                  role-based authorization for Admins, Bloggers, and Readers.
                </p>
              </div>

              <ul className="flex flex-wrap gap-4 text-slate-400 font-mono text-xs mb-6 justify-start md:justify-end">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
              </ul>

              <div className="flex gap-4">
                <Link
                  href="https://github.com/sankarkarmakar01/Blog-Spot"
                  target="_blank"
                  className="text-slate-300 hover:text-indigo-400 transition-colors"
                  aria-label="Blog-Spot"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </Link>
                <Link
                  href="https://blog-spot-one.vercel.app/"
                  target="_blank"
                  className="text-slate-300 hover:text-indigo-400 transition-colors"
                  aria-label="Blog-Spot"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center group">
            <div className="md:col-span-5 md:col-start-1 md:row-start-1 md:-mr-12 relative z-20 flex flex-col items-start text-left mt-6 md:mt-0 order-2 md:order-1">
              <p className="text-indigo-400 font-mono text-sm mb-2">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                LearnSphere - ELearning Website
              </h3>

              <div className="bg-slate-800 p-6 rounded shadow-xl mb-4 border border-slate-700">
                <p className="text-slate-400 text-sm leading-relaxed">
                  I developed a complete E-Learning System using the MERN stack,
                  which includes React.js, Node.js, Express.js, and MongoDB. It
                  features MVC architecture, JWT authentication, token-based
                  authorization, Email.js integration, and dynamic APIs that
                  support all dashboards and data.
                </p>
              </div>

              <ul className="flex flex-wrap gap-4 text-slate-400 font-mono text-xs mb-6">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Tailwind CSS</li>
                <li>Stripe</li>
              </ul>

              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-slate-300 hover:text-indigo-400 transition-colors"
                  aria-label="LearnSphere"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-indigo-400 transition-colors"
                  aria-label="LearnSphere"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-6 md:row-start-1 relative rounded shadow-2xl overflow-hidden border border-slate-800 order-1 md:order-2">
              <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>

              <Image
                src="/images/demp-projects.jpg"
                alt="Project Screenshot"
                width={800}
                height={450}
                priority
                quality={75}
                placeholder="blur"
                blurDataURL="/images/demp-projects.jpg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
