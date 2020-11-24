import React, { useState } from "react";
import tabsContent from "./tabsContent";
import Popover from "../../common/Popover";
import { IconContext } from "react-icons";
import LoadingAnimation from "../../common/LoadingAnimation";

export default function IconList({ currentTab }) {
  const [currentHoveredIcon, setIconHovered] = useState(null);

  const selectCurrentHoveredIcon = (index) => {
    setIconHovered(index);
  };

  return (
    <IconContext.Provider value={{ size: "4rem" }}>
      <div className="icon-list">
        {tabsContent[currentTab].icons.map((icon, index) => {
          return (
            <span
              className="icon-techno"
              key={index}
              onMouseEnter={() => selectCurrentHoveredIcon(index)}
              onMouseLeave={() => selectCurrentHoveredIcon(null)}
            >
              {index !== currentHoveredIcon ? icon.normalLogo : icon.hoverLogo}
              {index === currentHoveredIcon && (
                <Popover message={icon.message}>
                  {icon.soon && (
                    <div className="learn-soon">
                      <p className="blue-text ">Pour bientôt</p>
                      <LoadingAnimation />
                    </div>
                  )}
                </Popover>
              )}
            </span>
          );
        })}
      </div>
    </IconContext.Provider>
  );
}
