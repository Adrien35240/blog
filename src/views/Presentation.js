import React from "react";
import "../css/presentation.css";
function Presentation() {
  return (
    <div className="container-presentation">
      <div className="title-presentation">Bienvenue</div>
      <div className="paragraphe-presentation">
        <div>
          Ceci est le blog d'un développeur junior en reconversion, j'ai décidé
          de developper ce blog de zéro en ReactJs/CSS/Firebase en utilisant un
          minimun de librairies.
        </div>
        <div>
          il me servira de support pour exposer mon savoir faire ainsi que
          quelques réflexions ou notes sur des notions apprisent à travers ce
          projet.
        </div>
      </div>
      <a
        id="lien-github"
        target="_blank"
        rel="noopener noreferrer"
         href="https://github.com/Adrien35240/Blog"
      >
        Le Github du projet est disponible ici
      </a>
      <div className="st">Stay tune !</div>
    </div>
  );
}

export default Presentation;
