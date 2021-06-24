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

  const crypto = require("crypto-js");

  function getSignatureKey(key, dateStamp, regionName, serviceName) {
    const kDate = crypto.HmacSHA256(dateStamp, "AWS4" + key);
    const kRegion = crypto.HmacSHA256(regionName, kDate);
    const kService = crypto.HmacSHA256(serviceName, kRegion);
    const kSigning = crypto.HmacSHA256("aws4_request", kService);
    return kSigning;
  }


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
          // https://iam.amazonaws.com?Action=ListUsers&Version=2010-05-08&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIDEXAMPLE%2F20150830%2Fus-east-1%2Fiam%2Faws4_request&X-Amz-Date=20150830T123600Z&X-Amz-Expires=60&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Signature=37ac2f4fde00b0ac9bd9eadeb459b1bbee224158d66e7ae5fcadb70b2d181d02
          href="https://cv-acces-141115429158.s3-accesspoint.eu-west-3.amazonaws.com/cv.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCWV1LXdlc3QtMyJHMEUCICV7v0yyQJDOZTYLN5MCOixFfgZQMVcE40bGYf67JoXwAiEA1FyyGEQf4NQUbDC9GDnwVjbAY4cC0lzrduhM2QMcNPUq9gIIGhAAGgwxNDExMTU0MjkxNTgiDHsTT%2Bex91jA51NXfSrTAm92Vn1P1lSJwJivuJwsKf9JrMdEgST0bzmeuvDu2FgV1j7MQKaUHjTCnNj4i8cl5PwzE4Se9rCrsB1lUDa7IWf3Vp%2BuTOQQlV0pN08M9WvZPeV29SetOEIZp5uPXes2xX2RweGy%2F7AvUT4KDFPWJ8yBxJofs0E1VZXqxAzYiMqb7fxZtgFk%2FPIdsfRgO%2F0RuT08vJ1Or5EuqAC4FWw2Iid3XxHfxhmcpnLaLL4vJcgmIqc5G3%2FQHiHqIQ2OIYHrjcznGb6Deh88Lfpzw3Aoxi0Z4b%2B1nRMF9zWtALv1Du5o%2BV1jd%2BFXcjqq6qgJTY%2BaMKIwa%2F9kvzPdO0c5xfHUlcTiU8I85kqiXc5DpSp3DOC92NmfJXM%2B5qusQcoAexl%2BZq6VbtJe7G%2FkXrH1hhcMxyP405gSundPsDtwZgDFPkfcYS39BPpvrhNqAuveBQ7MOzsVtjCT89KGBjqzAny3n62K2b9ymxGawO%2B%2B2dZJq%2FXAa9EPbxqQH7KreKdUCrWjYpKE6%2BFc%2FnPiisVOr9AwmpZvc9G8wtaWkxYd0tElDch2xPu%2FeTNVTPOlcM2EUKEaM5tvXKe3Kw39coYKNWEuTJPkgrTOK4JnrJpmHNK5IoilXJ0dwNO0A8fhWI08%2FclYkOwE9eu7PRKsXB3piKR7AqAXmr%2BkOzjIhMg3X%2FAZqMgdQMts6aLUCdLrhHzjlgN5f5Cm3n8VyPJxsZsmu%2BL6xw%2Fb%2FpIOFckZUtuFbN99KtJ5Ur2m7zY%2B5IwmcG7qFVbptTTEE%2BCsWJ1K9WKGZF2nnD1jfMeI0LKWCFGrM1z2MoPIIz1SC%2Bkybb%2FASdX%2BD4VMlFLpOiI5IhQ5t0GafIN5GZfKWRE%2F3Wvh6%2FavZvhxSgM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210624T204619Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBWZCSETHCK5IMB5%2F20210624%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Signature=19edd12f8acc4cafaf0e716f8eda3d17fcef04448f63ae3e8b41fc87c01de13b"
          download
          className="cv"
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
