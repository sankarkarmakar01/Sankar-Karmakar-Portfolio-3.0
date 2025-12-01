import Heading from "@/components/helper/Heading";
import { experienceData } from "@/data/experiencedata";
import React from "react";

const Experience: React.FC = () => {
  return (
    <div className=" text-white py-16 min-h-screen flex justify-center items-center flex-col gap-12 pt-26 pb-4">
      <Heading first="Work" second="Experience" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12 pb-3">
          {experienceData.map((elem, idx) => {
            return (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-2 h-5 w-5 rounded-full border-4 border-slate-900 bg-blue-500 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>

                <span className="text-sm text-slate-400 font-mono mb-1 block">
                  {elem.startMonth}, {elem.startYear} - {elem.endMonth},{" "}
                  {elem.endYear}
                </span>

                <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {elem.experienceName}
                    </h3>
                    <p className="text-lg text-blue-400 font-medium italic">
                      {elem.companyName}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300/90 mb-4 leading-relaxed">
                  {elem.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {elem.toolsUsed.map((tool, idx2) => {
                    return (
                      <span
                        key={idx2}
                        className="px-3 py-1 text-xs font-medium rounded-full border badge-hover hover:cursor-pointer"
                        style={
                          {
                            color: tool.colorCode,
                            backgroundColor: tool.bgColor,
                            borderColor: tool.borderColor,
                            textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                            "--hover-color": tool.hoverColor,
                          } as React.CSSProperties
                        }
                      >
                        {tool.toolName}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
