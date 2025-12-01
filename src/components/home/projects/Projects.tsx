import Heading from "@/components/helper/Heading";
import React from "react";
import LeftProjectCard from "./LeftProjectCard";
import RightProjectCard from "./RightProjectCard";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="pt-26 pb-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
        <Heading first="Featured" second="Projects" />
        <div className="space-y-16 md:space-y-24">
          <LeftProjectCard />
          <RightProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
