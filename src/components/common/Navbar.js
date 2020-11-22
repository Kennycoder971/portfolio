import React from "react";
import CodeIcon from "./svg/CodeIcon";
import ContactIcon from "./svg/ContactIcon";
import SkillIcon from "./svg/SkillIcon";

export default function Navbar({ isNavOpen }) {
  return (
    <nav className={isNavOpen ? "responsive-nav active" : "responsive-nav"}>
      <ul className="responsive-nav-menu">
        <li className="responsive-menu-item">
          <a href="/" className="responsive-menu-link">
            <CodeIcon />
            <span>portfolio work</span>
          </a>
        </li>
        <li className="responsive-menu-item">
          <a href="/" className="responsive-menu-link">
            <SkillIcon />
            <span>compétences</span>
          </a>
        </li>
        <li className="responsive-menu-item">
          <a href="/" className="responsive-menu-link">
            <ContactIcon />
            <span>contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
