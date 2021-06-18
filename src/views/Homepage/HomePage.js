import React from "react";
import "./home-page.css";
function HomePage() {
  return (
    <div className="container-home-page">
      <section className="container-presentation">
        <div className="title">
          <div>Bonjour, Je suis Adrien</div>
          <div>Developpeur Web en reconversion</div>
        </div>
        <div className="description">
          <div>
            Depuis que j'ai appris que le secteur pour lequel je travaillais
            depuis plus de 10 ans était en déclin . A 37 ans,j'ai décidé de
            saisir ma chance et ré-orienter ma carrière dans un domaine qui me
            passionne depuis l'enfance.
            <br />
            <div>
              Animer par une motivation sans-faille et l'envie de réussir. J'ai
              retrouver le goût d'apprendre de nouvelles choses.
            </div>
          </div>
        </div>
      </section>
      <section className="container-competences">
        <div className="container-langages">
          <div className="competences-title">langages</div>
          <section className="section-resume">
            <div>Notions : HTML / CSS / Javascript </div>
          </section>
        </div>
        <div className="container-front-end">
          <div className="competences-title">Front-end</div>{" "}
          <section className="section-resume">
            <div>Notions : React </div>
          </section>
        </div>
        <div className="container-back-end">
          <div className="competences-title">Back-end</div>{" "}
          <section className="section-resume">
            <div>Notions : Nodejs / ExpressJS / AdonisJS / Firebase / SQL / MongoDB</div>
          </section>
        </div>
      </section>
      <section className="container-work">Réalistation</section>
      <section className="container-contact">Contact</section>
    </div>
  );
}

export default HomePage;
