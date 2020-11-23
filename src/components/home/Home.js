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
            Bonjour, je m'appelle Kenny Delver,
          </h1>
        </div>
        <div className="mask">
          <p className="author-job move-top">
            Développeur web <span className="long-blue-line"></span>
          </p>
        </div>

        <div className="mask">
          <h3 className="author-welcome move-top">
            Bienvenue sur mon <span className="blue-text">portfolio.</span>
          </h3>
        </div>
        <p className="author-message ">
          <div className="mask">
            <span className="move-top">Je suis un &nbsp;</span>
            <span className="blue-text move-top">développeur full-stack</span>
            <br />
          </div>
          <div className="mask">
            <span className="move-top">
              en devenir, n'hésitez pas à jeter un coup d'oeil.
            </span>
          </div>
        </p>

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
