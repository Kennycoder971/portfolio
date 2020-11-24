import React from "react";
import tabsContent from "./tabsContent";
import IconList from "./IconList";
import MySkillsTab from "./MySkillsTab";
import MySkillsAccordion from "./MySkillsAccordion";

export default function Myskills({ currentTab, selectCurrentTab }) {
  return (
    <React.Fragment>
      <div className="my-skills">
        <MySkillsTab
          currentTab={currentTab}
          selectCurrentTab={selectCurrentTab}
        />
        <article className="tab-content">
          <p className="tab-text">{tabsContent[currentTab].content}</p>
          <IconList currentTab={currentTab} />
        </article>
      </div>

      <MySkillsAccordion currentTab={currentTab} />
    </React.Fragment>
  );
}
