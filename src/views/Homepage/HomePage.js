import React, { useState, useEffect } from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import memoji from "./memoji.svg";
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
  useEffect(() => {}, [transmission]);

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
            <img src={memoji} alt="memoji"></img>
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
        <a
          href="https://cv-acces-141115429158.s3-accesspoint.eu-west-3.amazonaws.com/cv.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCWV1LXdlc3QtMyJGMEQCIBTBznASnDpmD5UDaunIf2X1BoOAKp7Ud7E5adERRPirAiB4qDpOJdPFocFRHRr3LHSbDPrt0XwNnerRgLeRki12cir2AggYEAAaDDE0MTExNTQyOTE1OCIMM0oajCFEP8%2BqysjqKtMCLWeQWp5f8vVjCgGPLgvqrz%2FQCuu4dcgsva6jujjLdbpQh%2BxHP4us2VNGF2t8sCouweHa7qEe6BGTTZDLTiU8tDlgCLCeJCGMzpkGAGTGLdoIA8EzyTCh7auEOcVPiTgs7oruvWvrvmkQt0VChz%2Fp2ev%2Bv%2FZYyS4ol2f5x74GW%2F7VmgAFDq7Twh3%2Bi0MZgvQlTBw87Lva6pgDm2Y8KDLY2QvMKzZojpcee7kOYkODZNTIBfzex2kw77b%2BzwTOrWQeGpOfMoOK65xZaclGD8YxAhI90677wPY3HCHdG%2Buay0A%2BzsdjeIUSBbaKYSK9dfLS4YdPu6TnfiK0DQDYblpnRYIFuE7CqwX58WOd%2Bwoq%2BZF%2F9l22c45d%2B72qfSCuf8%2BFmggth3IqOfdo1oaieB2zGYImJu0PCIuurUgRH4WzstSHsjKgz8c%2BnrqlkYwcVke04TBtMKGL0YYGOrQCAFDkNRF8K2ur1XJLmyJV0B1frQlahksp0FKV30%2B5x7SUPS%2BmztQPawbQ%2Fy3F7GXhCV%2FUjxVPBa0qAbM8ES5dIu0glFIJBRqjoISzw6ZqlrFES0kZm7dBLe9LCYrTQmlNf%2FdwzsCUuGvJehgh5QVYTPULJzlY2%2FOeO7Ow02tFrjbqrV8dXat%2FlWm3oLARCIHQvQXyDBreGtM1Z0P3w9nx1cwIzoU6XtzbW78jYoRCm0GQNQxV7VHaciqDHCIF%2F%2Bj25Px%2BmUG4lEcx52z84sqdBIPb1FOHJVj7OUQ5I5QSwHCENUVfqSENjMDtxL%2Bkazb8AQcu7rN6mvnDXGt9ZmgaFOVa%2BmP6jptjm9blKrv493Jk61XX%2BEVE%2FxYs1FGycRUhD3fgg%2FQV4OvXZjcYmhHfJJL8Ylk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210624T155017Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIASBWZCSETISMLDC7R%2F20210624%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Signature=09d6ec62ff13a268c12f3dfefaf29456c0bfb62032964442dfc714c4cb162271"
          download
          className="cv"
          target="_blank"
        >
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
