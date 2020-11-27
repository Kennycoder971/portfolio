import React from "react";

const SpotySound = () => {
  return (
    <article className="work spotysound">
      <main>
        <h1 className="project-title-xl">SpotySound</h1>

        <div className="project-images">
          <div className="img-container">
            <img
              src={process.env.PUBLIC_URL + "/images/spotysound/phone_1.png"}
              alt="App sur téléphone"
            />
          </div>
          <div className="img-container">
            <img
              src={process.env.PUBLIC_URL + "/images/spotysound/phone_2.png"}
              alt="Librarie de sons"
            />
          </div>
        </div>
      </main>

      <section className="text-project thin-container">
        <h2 className="project-title-xl">Pourquoi avoir créé ce projet ?</h2>
        <p>
          C'est l'une des premières applications que j'ai créé avec React.js
          donc j'ai voulu me challenger un peu. Aussi, je voulais un projet
          assez simple et joli que je pourrais mettre sur mon portfolio. J'ai
          utilisé des musiques du site{" "}
          <a
            href="https://chillhop.com/"
            className="external-link"
            target="_blank"
            rel="noreferrer"
          >
            chillhop
          </a>{" "}
          que l'on peut utiliser presque où l'on veut afin d'éviter les
          problèmes de copyright.
        </p>
      </section>
      <section className="what-i-learned">
        <div className="img-container">
          <img
            src={process.env.PUBLIC_URL + "/images/Spotysound.png"}
            alt="L'application sur ordinateur"
          />
        </div>

        <div className="text-project thin-container">
          <h2 className="project-title-xl">Ce que j'ai appris</h2>
          <p>
            C'était la première fois que je travaillais avec des audios donc il
            m'a fallu utiliser avec des évènements comme: onLoadedMetadata,
            onTimeUpdate, onEnded, etc. J'ai aussi appris à gérer le caractère
            asynchrone des lifecycle methods (méthodes de cycle de vie) de React
            en utilisant async-await sur certaines fonctions.
          </p>

          <a
            href="https://affectionate-mccarthy-397e31.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-blue-to-yellow"
          >
            Voir le projet
          </a>
        </div>
      </section>
    </article>
  );
};

export default SpotySound;
