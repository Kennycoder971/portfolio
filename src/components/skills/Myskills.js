import React, { useState } from "react";
import tabsContent from "./tabsContent";
import IconList from "./IconList";

export default function Myskills() {
  const [currentTab, setCurrentTab] = useState(0);

  const selectCurrentTab = (index) => {
    setCurrentTab(index);
  };
  return (
    <div className="my-skills">
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
      <article className="tab-content">
        <p className="tab-text">{tabsContent[currentTab].content}</p>
        <IconList currentTab={currentTab} />
      </article>
    </div>
  );
}
