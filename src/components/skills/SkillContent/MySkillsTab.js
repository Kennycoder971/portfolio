import React from "react";
import tabsContent from "./tabsContent";

export default function MySkillsTab({ selectCurrentTab, currentTab }) {
  return (
    <ul className="tabs">
      {tabsContent.map((tab, index) => {
        return (
          <li
            className={currentTab === index ? "tab active" : "tab"}
            key={tab.title}
            onClick={() => selectCurrentTab(index)}
          >
            {tab.title}
          </li>
        );
      })}
    </ul>
  );
}
