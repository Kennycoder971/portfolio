import React from "react";
import SVGBG from "../common/svg/bg/SVGBG";
import SkillsContentManager from "./SkillContent/SkillsContentManager";

export default function Skills() {
  return (
    <main className="skills">
      <div className="skills-text">
        <h1 className="skills-title">
          Un bon <span className="green-text">développeur</span> se doit de
          rester à jour, <br /> voilà les{" "}
          <span className="blue-text"> compétences</span> que j'ai acquises
          <br />
          et que je compte &nbsp;
          <span className="yellow-text">apprendre.</span>
        </h1>
      </div>
      <SkillsContentManager />
      <SVGBG />
    </main>
  );
}
