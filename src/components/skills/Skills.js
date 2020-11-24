import React from "react";
import SVGBG from "../common/svg/bg/SVGBG";
import Myskills from "./Myskills";

export default function Skills() {
  return (
    <main className="skills">
      <div className="skills-text">
        <h1>
          Ce que je sais faire et ce que <br />
          je compte &nbsp;
          <span className="blue-text">apprendre.</span>
        </h1>
        <Myskills />
      </div>

      <SVGBG />
    </main>
  );
}
