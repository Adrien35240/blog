import React from "react";
import {
  CgArrowDownR,
  CgArrowUpR,
  CgCodeSlash,
  CgScreen,
} from "react-icons/cg";
import {GoGear} from "react-icons/go"
import "./home-page.css";
function HomePage() {
  return (
    <div className="container-home-page">
      <section className="container-presentation" id="container-presentation">
        <div className="title">
          <div>Bonjour, Je suis Adrien.</div>
          <div>Developpeur Web ReactJS.</div>
        </div>
        <div className="description">
          <div>
            Depuis que j'ai appris que le secteur pour lequel je travaillais
            depuis plus de 10 ans était en déclin . A 37 ans,j'ai décidé de
            saisir ma chance et ré-orienter ma carrière dans un domaine qui me
            passionne depuis l'enfance.
            <br />
            <div>
              Animer par une motivation sans-faille et l'envie de réussir ma
              reconversion. J'ai retrouver le goût d'apprendre de nouvelles
              choses.
            </div>
          </div>
        </div>
        <a href="#container-competences" id="arrow">
          <CgArrowDownR />
        </a>
      </section>
      <section className="container-competences" id="container-competences">
        <a href="#container-presentation" id="arrow-secondary">
          <CgArrowUpR />
        </a>
        <div className="container-tableau-competences">
          <div className="container-langages">
            <div className="icon-langages">
              <CgCodeSlash />
            </div>
            <div className="competences-title">langages appreciés</div>
            <section className="section-resume">
              <div>
                <b>Notions :</b> HTML / CSS / Javascript{" "}
              </div>
            </section>
          </div>
          <div className="container-front-end">
            <div className="icon-langages">
              <CgScreen />
            </div>

            <div className="competences-title">Front-end</div>
            <section className="section-resume">
              <div>
                <b>Notions :</b> ReactJS{" "}
              </div>
            </section>
          </div>
          <div className="container-back-end">
            <div className="icon-langages">
              <GoGear />
            </div>
            <div className="competences-title">Back-end</div>
            <section className="section-resume">
              <div>
                <b>Notions :</b> Nodejs / ExpressJS / Firebase / SQL
                / MongoDB
              </div>
            </section>
          </div>
        </div>
        <a href="#container-work" id="arrow-secondary">
          <CgArrowDownR />
        </a>
      </section>
      <section className="container-work" id="container-work">
        <a href="#container-competences" id="arrow">
          <CgArrowUpR />
        </a>
        Réalistations
        <a href="#container-contact" id="arrow">
          <CgArrowDownR />
        </a>
      </section>
      <section className="container-contact" id="container-contact">
        {" "}
        <a href="#container-work" id="arrow-secondary">
          <CgArrowUpR />
        </a>
        Contact
      </section>
    </div>
  );
}

export default HomePage;
