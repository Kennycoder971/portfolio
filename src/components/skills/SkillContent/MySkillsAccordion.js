import React from "react";
import Accordion from "../../common/Accordion";
import tabsContent from "./tabsContent";
import IconList from "./IconList";

export default function MySkillsAccordion() {
  return (
    <div className="my-skills-accordions">
      {tabsContent.map((tab, index) => {
        return (
          <Accordion title={tab.title} content={tab.content}>
            <IconList currentTab={index} />
          </Accordion>
        );
      })}
    </div>
  );
}
