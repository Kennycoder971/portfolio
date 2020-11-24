import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Accordion({ title, content, children }) {
  const [isActive, setActive] = useState(false);

  return (
    <div className="accordion">
      <div
        className={isActive ? "accordion-title active" : "accordion-title"}
        onClick={() => setActive(!isActive)}
      >
        <span>{title}</span>
        <span className="accordion-title-icon">
          <MdKeyboardArrowDown style={{ fontSize: "2.5rem" }} />
        </span>
      </div>
      {isActive && (
        <article className="accordion-content">
          <p className="accordion-content-paragraph">{content}</p>
          {children && (
            <div className="accordion-other-content"> {children} </div>
          )}
        </article>
      )}
    </div>
  );
}
