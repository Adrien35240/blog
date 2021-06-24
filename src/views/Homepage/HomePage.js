import React, { useState, useEffect } from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import CV from "./Ribault-Adrien-CV.pdf";
import Memoji from "./D9C973AA-D363-4C53-9359-EABAB881D4A1.jpeg";
import {
  CgArrowDownR,
  CgArrowUpR,
  CgCodeSlash,
  CgScreen,
} from "react-icons/cg";
import { GoGear } from "react-icons/go";
import "./home-page.css";
function HomePage() {
  init(process.env.EMAILJS_ID);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [transmission, setTransmission] = useState(false);
  useEffect(() => {
    console.log(useEffect);
  }, [transmission]);
  function handleSubmit() {
    var templateParams = {
      name,
      email,
      message,
    };
    console.log(name);
    console.log(message);
    emailjs.send("service_esm769a", "template_1zfdb5a", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        if (response.status === 200) {
          console.log("setTransmission ok");
          setTransmission(true);
        }
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }

  return (
    <div className="container-home-page">
      <section className="container-presentation" id="container-presentation">
        <div className="title">
          <div id="memoji">
            <img
              src={Memoji}
              alt="memoji"
            ></img>
          </div>
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
        <a href={CV} download id="link-to-cv">
          Télécharger mon CV
        </a>
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
            <section className="section-resume">
              <div>
                <b>Langages appréciés :</b> <br />
                HTML / CSS / Javascript
              </div>
              <div className="competences-title">Environnement :</div>
              <div>
                Windows / Linux / Mac / VsCode / GitHub / Trello / Docker
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
                <b>FrameWork :</b> <br />
                ReactJS{" "}
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
                <b>Notions :</b> <br />
                Nodejs / ExpressJS / Firebase / SQL / MongoDB
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
        Réalisations
        <a href="#container-contact" id="arrow">
          <CgArrowDownR />
        </a>
      </section>
      <section className="container-contact" id="container-contact">
        <a href="#container-work" id="arrow-secondary">
          <CgArrowUpR />
        </a>

        <form id="form-contact">
          <div className="form-title">Contact :</div>
          <div className="form-details">
            <label forhtml="name">Name </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <label forhtml="email"> Email </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>
          <label forhtml="message">Message</label>
          <textarea
            type="text"
            id="message"
            rows="10"
            cols="80"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {transmission ? (
            <a href="#container-presentation" id="transmission">
              Message Envoyer
            </a>
          ) : (
            <div id="button-contact" onClick={handleSubmit}>
              Envoyer
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

export default HomePage;
