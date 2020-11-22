import React, { useState } from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">DK</div>
      <ul className="menu">
        <li className="menu-link">
          <a href="/" className="link">
            portfolio
          </a>
          <a href="/competences" className="link">
            compétences
          </a>
          <a href="/contact" className="link">
            contact
          </a>
        </li>
      </ul>

      <div className="toggle-btn">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </header>
  );
}
