import React, { useState, useEffect } from "react";
import SendMail from "../../services/features/SendMail";
import memoji from "./memoji.svg";
import { ImLinkedin, ImGithub } from "react-icons/im";
import { CgCodeSlash, CgScreen } from "react-icons/cg";
import {FaAddressCard} from "react-icons/fa"
import { GoGear } from "react-icons/go";
import "./home-page.css";
function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [transmission, setTransmission] = useState(false);
  useEffect(() => {}, [transmission]);

  return (
    <div className="container-home-page">
      <section className="container-presentation" id="container-presentation">
        <div>
          <div id="memoji">
            <img src={memoji} alt="memoji"></img>
          </div>
          <div className="title">
            <div>Bonjour, Je suis Adrien.</div>
            <div>Developpeur Web ReactJS.</div>
          </div>
        </div>
        <div className="description">
          <div>
            Développeur passionné dans le domaine du web. J'ai réalisé ce site
            vitrine en React pour exposer mes compétences apprises en
            auto-didacte. Vous y trouverez mon portfolio ainsi qu'un blog
            réalisé avec ReactJs et Firebase.
          </div>
        </div>
        <div className="container-icon-presentation">
          <a
            href="https://www.linkedin.com/in/adrien-ribault-30792019b/"
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin"
          >
            <ImLinkedin />
          </a>
          <a
            href="https://github.com/adrien35240"
            id="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImGithub />
          </a>
          <a
            href="https://compartiment-cv.s3.eu-west-3.amazonaws.com/cv.pdf"
            download="cv.pdf"
            className="cv"
          >
            <FaAddressCard />
          </a>
        </div>
        {/* <a
          href="https://compartiment-cv.s3.eu-west-3.amazonaws.com/cv.pdf"
          download="cv.pdf"
          className="cv"
        >
          Télécharger mon CV
        </a> */}
      </section>
      <section className="container-competences" id="container-competences">
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
              </div>{" "}
              <div className="competences-title">Notions :</div>
              <div>AWS S3 & Amplify</div>
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
                ReactJS
              </div>
              <br />
              <div>
                <b>Testing :</b> <br />
                Jest
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
      </section>
      <section className="container-work" id="container-work">
        Réalisations
      </section>
      <section className="container-contact" id="container-contact">
        <form
          id="form-contact"
          onSubmit={(e) => {
            e.preventDefault();
            setTransmission(true);
            SendMail(name, email, message);
          }}
        >
          <div className="form-title">Contact :</div>
          <div className="form-details">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom"
              required
            ></input>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse e-mail"
              required
            ></input>
          </div>
          <textarea
            type="text"
            id="message"
            rows="10"
            cols="80"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message"
            required
          ></textarea>
          {transmission ? (
            <a href="#container-presentation" id="transmission">
              Message Envoyer
            </a>
          ) : (
            <input
              type="submit"
              className="button-contact"
              value="ME CONTACTER"
            ></input>
          )}
        </form>
      </section>
    </div>
  );
}

export default HomePage;
