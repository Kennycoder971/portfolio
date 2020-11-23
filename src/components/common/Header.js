import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ onClickOpenNav }) {
  return (
    <header className="header move-bottom">
      <div className="logo">
        <NavLink to="/">DK</NavLink>
      </div>
      <ul className="menu">
        <li className="menu-link">
          <NavLink to="/portfolio" className="link">
            portfolio
          </NavLink>
        </li>
        <li className="menu-link">
          <NavLink to="/competences" className="link">
            compétences
          </NavLink>
        </li>
        <li className="menu-link">
          <NavLink to="/contact" className="link">
            contact
          </NavLink>
        </li>
      </ul>

      <div className="toggle-btn" onClick={onClickOpenNav}>
        <div className="line-1 line"></div>
        <div className="line-2 line"></div>
        <div className="line-3 line"></div>
      </div>
    </header>
  );
}
