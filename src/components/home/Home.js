import React from "react";

export default function Home() {
  return (
    <main className="home">
      <div className="home-text">
        <h1 className="author-name">Kenny Delver</h1>
        <p className="author-job">
          Développeur web <span className="long-blue-line"></span>
        </p>

        <h3 className="author-welcome">Bienvenue sur mon portfolio. </h3>
        <p className="author message">
          Je suis un développeur web full-stack en devenir, n'hésitez pas à
          jeter un coup d'oeil.
        </p>

        <a href="/" className="btn-blue">
          Voir mon travail
        </a>
      </div>
    </main>
  );
}
