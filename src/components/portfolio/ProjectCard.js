import React from "react";
import { Link } from "react-router-dom";

export default function Project({ title, projectLiveUrl, imgSrc, projectUrl }) {
  return (
    <div className="project-preview">
      <div className="project-card">
        <Link to={projectUrl || "/"}>
          <img src={imgSrc} alt={title} className="project-img" />
        </Link>
      </div>
      <div className="project-cta">
        <h3 className="project-title">{title}</h3>

        <a
          href={projectLiveUrl || "/porfolio"}
          className="project-live"
          target="_blank"
          rel="noreferrer"
        >
          Voir le projet
        </a>

        <Link className=" btn btn-shadow btn-blue-to-yellow" to={projectUrl}>
          En savoir plus
        </Link>
      </div>
    </div>
  );
}
