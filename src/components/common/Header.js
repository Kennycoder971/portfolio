import React from "react";

export default function Header({ onClickOpenNav }) {
  return (
    <header className="header">
      <div className="logo">DK</div>
      <ul className="menu">
        <li className="menu-link">
          <a href="/" className="link">
            portfolio
          </a>
        </li>
        <li className="menu-link">
          <a href="/competences" className="link">
            compétences
          </a>
        </li>
        <li className="menu-link">
          <a href="/contact" className="link">
            contact
          </a>
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
