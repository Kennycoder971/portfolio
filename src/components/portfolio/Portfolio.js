import React from "react";
import SVGBG from "../common/svg/bg/SVGBG";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData";

export default function Portfolio() {
  return (
    <main className="porfolio">
      <SVGBG />

      <h1>
        Voilà quelques projets que j'ai
        <span className="yellow-text">&nbsp;réalisé.</span>
      </h1>

      <div className="projects-list">
        {projectData.map((project, index) => {
          return (
            <ProjectCard
              title={project.title}
              key={index}
              imgSrc={project.imgSrc}
              projectUrl={project.projectUrl}
              projectLiveUrl={project.projectLiveUrl}
              index={index}
            />
          );
        })}
      </div>
    </main>
  );
}
