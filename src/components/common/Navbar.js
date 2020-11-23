import React from "react";
import CodeIcon from "./svg/CodeIcon";
import ContactIcon from "./svg/ContactIcon";
import SkillIcon from "./svg/SkillIcon";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="responsive-nav active  move-left delay-1">
      <ul className="responsive-nav-menu">
        <li className="responsive-menu-item">
          <NavLink to="/portfolio" className="responsive-menu-link">
            <CodeIcon />
            <span>portfolio </span>
          </NavLink>
        </li>
        <li className="responsive-menu-item">
          <NavLink to="/competences" className="responsive-menu-link">
            <SkillIcon />
            <span>compétences</span>
          </NavLink>
        </li>
        <li className="responsive-menu-item">
          <NavLink to="/contact" className="responsive-menu-link">
            <ContactIcon />
            <span>contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
