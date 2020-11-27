import React from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";

export default function RightNav({ isNavOpen, setIsNavOpen }) {
  return (
    <nav className={`right-nav ${isNavOpen && "active"}`}>
      <ul className="right-nav-menu">
        <li className="right-nav-menu-link">
          <NavLink to="/" onClick={() => setIsNavOpen(false)}>
            accueil
          </NavLink>
        </li>
        <li className="right-nav-menu-link">
          <NavLink to="/portfolio" onClick={() => setIsNavOpen(false)}>
            portfolio
          </NavLink>
        </li>
        <li className="right-nav-menu-link">
          <NavLink to="/competences" onClick={() => setIsNavOpen(false)}>
            compétences
          </NavLink>
        </li>
        <li className="right-nav-menu-link">
          <NavLink to="/contact" onClick={() => setIsNavOpen(false)}>
            contact
          </NavLink>
        </li>
      </ul>

      <div className="close-btn" onClick={() => setIsNavOpen(false)}>
        <MdClose />
      </div>
    </nav>
  );
}
