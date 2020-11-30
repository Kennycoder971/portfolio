import React from "react";
import { Link } from "react-router-dom";
import Svg404 from "../common/svg/404_svg";

export default function Page404() {
  return (
    <main className="page-404">
      <div className="text-404">
        <h2>
          Oups, <br /> Il semblerait que vous soyez perdu !
        </h2>
        <Link to="/" className="btn btn-blue">
          Retourner sur le site
        </Link>
      </div>
      <div className="img-container">
        <Svg404 />
      </div>
    </main>
  );
}
