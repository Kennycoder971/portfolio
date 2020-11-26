import React from "react";
import SVGShape from "../common/svg/bg/MainImage";
import SVGBG from "../common/svg/bg/SVGBG";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <div className="home-text">
        <div className="mask">
          <h1 className="author-name move-top">
            Bonjour,&nbsp; je m'appelle Kenny Delver,
          </h1>
        </div>
        <div className="mask">
          <p className="author-job move-top ">
            et je suis développeur web &nbsp;
            <span className="green-text">full-stack en devenir.</span>
            <span className="long-green-line"></span>
          </p>
        </div>

        <div className="mask">
          <h3 className="author-welcome move-top">
            Bienvenue sur mon <span className="yellow-text">portfolio.</span>
          </h3>
        </div>
        <div className="mask">
          <p className="author-message ">
            <span className="move-top">
              N'hésitez pas à jeter un
              <span className="blue-text"> coup d'oeil.</span>
            </span>
          </p>
        </div>

        <div className="mask">
          <Link to="/portfolio" className="btn btn-blue move-top">
            Voir mon travail
          </Link>
        </div>
      </div>
      <div className="svg-shape">
        <SVGShape />
      </div>

      <SVGBG />
    </main>
  );
}
