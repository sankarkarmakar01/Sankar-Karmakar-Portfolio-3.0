import Heading from "@/components/helper/Heading";
import React from "react";

const Experience: React.FC = () => {
  return (
    <div className=" text-white py-16 min-h-screen flex justify-center items-center flex-col gap-12 pt-26 pb-4">
      <Heading first="Work" second="Experience" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12 pb-3">
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-[9px] top-2 h-5 w-5 rounded-full border-4 border-slate-900 bg-blue-500 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>

            <span className="text-sm text-slate-400 font-mono mb-1 block">
              March, 2025 - June, 2025
            </span>

            <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Industrial Internship on MERN Stack
                </h3>
                <p className="text-lg text-blue-400 font-medium italic">
                  Ardent Computech Pvt. Ltd.
                </p>
              </div>
            </div>

            <p className="text-slate-300/90 mb-4 leading-relaxed">
              Developed a complete E-Learning System using the MERN stack.
              Followed industry standards and good practices during the project.
              Implemented strong backend APIs using Node.js, Express.js, and the
              MVC pattern. Integrated MongoDB for effective data management and
              CRUD operations. Worked in a team to improve teamwork,
              communication, and problem-solving.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                JavaScript
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                React
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                Node
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                Express
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                MongoDB
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                Bootstrap
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                Redux
              </span>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-[9px] top-2 h-5 w-5 rounded-full border-4 border-slate-900 bg-blue-500 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>

            <span className="text-sm text-slate-400 font-mono mb-1 block">
              January, 2025 - March, 2025
            </span>

            <div className="mb-2">
              <h3 className="text-2xl font-semibold text-white">
                Social Media Executive Intern
              </h3>
              <p className="text-lg text-blue-400 font-medium italic">
                Team TCB Pvt. Ltd.
              </p>
            </div>

            <p className="text-slate-300 mb-4 leading-relaxed">
              Gained practical experience in managing and creating content for
              various social media platforms under expert guidance. Learned to
              examine engagement metrics and use insights to improve content
              performance. I built strong teamwork and communication skills by
              working with a creative team in a professional setting. This
              experience improved my understanding of digital marketing trends
              and how to engage audiences effectively.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                SEO
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                Ads
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                Digital Marketing
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                Social Media Marketing
              </span>
              <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                Teamwork
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
