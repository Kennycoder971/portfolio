import {
  FaFigma,
  FaReact,
  FaSass,
  FaDocker,
  FaNodeJs,
  FaGulp,
} from "react-icons/fa";
import {
  SiAffinityphoto,
  SiJavascript,
  SiGatsby,
  SiMysql,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiGit } from "react-icons/di";

const tabs = [
  {
    title: "Design",
    content:
      "Je suis capable de faire des maquettes avec des designs à qui représentent l'image des entreprises ainsi que les émotions qu'ils veulent transmettre ",
    icons: [
      {
        normalLogo: <FaFigma />,
        hoverLogo: <FaFigma color="#F56255" />,
        message:
          "Figma est un éditeur de graphiques vectoriels et un outil de prototypage.",
      },
      {
        normalLogo: <SiAffinityphoto />,
        hoverLogo: <SiAffinityphoto color="#EF96F8" />,
        message:
          "Affinity Photo est un logiciel de retouche d’image. Il permet de réaliser des montage photo, retouche et gestion des couleurs.",
      },
    ],
  },
  {
    title: "Développement frontend",
    content:
      "Je suis sais de créer des sites du côté frontend en utilisant HTML, Css et Javascript. Réact me permet de mieux organiser mon code en découpant ses différentes parties en composants. ",
    icons: [
      {
        normalLogo: <AiFillHtml5 />,
        hoverLogo: <AiFillHtml5 color="#FF5733" />,
        message:
          " C’est un langage qui permet de composer des pages web. Le but du HTML est d’encadrer les différents éléments présents dans une page",
      },
      {
        normalLogo: <DiCss3 />,
        hoverLogo: <DiCss3 color="#106DB5" />,
        message:
          "Css permet de changer l’apparence des éléments HTLM des pages (les titres, le corps du texte, les puces etc..",
      },
      {
        normalLogo: <FaSass />,
        hoverLogo: <FaSass color="#C76395" />,
        message:
          "Sass est un préprocesseur CSS. C'est un langage de description compilé en CSS.",
      },
      {
        normalLogo: <SiJavascript />,
        hoverLogo: <SiJavascript color="#F0DB4F" />,
        message:
          "JavaScript est un langage de programmation de scripts principalement employé dans les pages web.",
      },
      {
        normalLogo: <FaReact />,
        hoverLogo: <FaReact color="#5ED3F4" />,
        message:
          "React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Son but principal est de faciliter la création d'application web monopage, via la création de composants",
      },
      {
        normalLogo: <SiGatsby />,
        hoverLogo: <SiGatsby color="#6A4A85" />,
        soon: true,
        message:
          " Gatsby est un framework basé sur React permattant de créer des sites statiques performants et modernes en permettant d'utiliser des sources de contenu variés.",
      },
      {
        normalLogo: <FaGulp />,
        hoverLogo: <FaGulp color="#E54849" />,
        soon: true,
        message:
          "Gulp.js est un toolkit JavaScript open-source créé par Fractal Innovations, et la communauté open source sur GitHub, utilisé dans le développement web front-end.",
      },
    ],
  },
  {
    title: "Développement backend",
    content:
      "Je pense me lancer vers le backend dans peut de temps. en attendant, voilà la liste que j'ai en tête pour le moment.",
    icons: [
      {
        normalLogo: <FaNodeJs />,
        hoverLogo: <FaNodeJs color="#53A74B" />,
        soon: true,
        message:
          "Node.js est un environnement bas niveau permettant l’exécution de JavaScript côté serveur.",
      },
      {
        normalLogo: <SiMysql />,
        hoverLogo: <SiMysql color="#0D5E86" />,
        soon: true,
        message:
          "MySQL est un système de gestion de bases de données relationnelles.",
      },
      {
        normalLogo: <SiMongodb />,
        hoverLogo: <SiMongodb color="#439A45" />,
        soon: true,
        message:
          "MongoDB est un système de gestion de base de données orienté documents, répartissable sur un nombre quelconque d'ordinateurs et ne nécessitant pas de schéma prédéfini des données. ",
      },
      {
        normalLogo: <FaDocker />,
        hoverLogo: <FaDocker color="#2292E7" />,
        soon: true,
        message:
          "Docker est un logiciel libre permettant de lancer des applications dans des conteneurs logiciels.",
      },
      {
        normalLogo: <SiGraphql />,
        hoverLogo: <SiGraphql color="#DF34A6" />,
        soon: true,
        message:
          "GraphQL est un langage de requêtes et un environnement d'exécution, créé par Facebook en 2012.",
      },
    ],
  },
  {
    title: "Général",
    content: "contend général",
    icons: [
      {
        normalLogo: <DiGit />,
        hoverLogo: <DiGit color="#EC4D29" />,
        message: "Git est un logiciel de gestion de versions décentralisé.",
      },
      {
        normalLogo: <AiFillGithub />,
        hoverLogo: <AiFillGithub color="#121212" />,
        message:
          "GitHub est un site web et un service de cloud qui aide les développeurs à stocker et à gérer leur code, ainsi qu’à suivre et contrôler les modifications qui lui sont apportées.",
      },
    ],
  },
];

export default tabs;
