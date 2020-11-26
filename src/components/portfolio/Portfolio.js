import React from "react";
import SVGBG from "../common/svg/bg/SVGBG";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Music app",
    imgSrc: process.env.PUBLIC_URL + "./images/SpotySound.png",
    projectUrl: "/portfolio/spotysound",
    projectLiveUrl: "https://affectionate-mccarthy-397e31.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <main className="porfolio">
      <SVGBG />

      <h1>
        Voilà quelques projets que j'ai
        <span className="yellow-text">&nbsp;réalisé.</span>
      </h1>

      <div className="projects-list">
        {projects.map((project, index) => {
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
