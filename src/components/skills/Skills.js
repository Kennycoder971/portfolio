import React from "react";
import SVGBG from "../common/svg/bg/SVGBG";
import SkillsContentManager from "./SkillContent/SkillsContentManager";

export default function Skills() {
  return (
    <main className="skills">
      <div className="skills-text">
        <h1>
          Mes comp <br />
          je compte &nbsp;
          <span className="blue-text">apprendre.</span>
        </h1>
      </div>
      <SkillsContentManager />
      <SVGBG />
    </main>
  );
}
