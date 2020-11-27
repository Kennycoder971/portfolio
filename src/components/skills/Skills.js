import React from "react";
import SVGBG from "../common/svg/bg/SVGBG";
import SkillsContentManager from "./SkillContent/SkillsContentManager";

export default function Skills() {
  return (
    <main className="skills">
      <div className="skills-text">
        <h1 className="skills-title">
          Un aperçu des <span className="green-text"> compétences</span> que
          j'ai acquises <br />
          et dans lesquelles je compte{" "}
          <span className="yellow-text">m'investir.</span>
        </h1>
      </div>
      <SkillsContentManager />
      <SVGBG />
    </main>
  );
}
