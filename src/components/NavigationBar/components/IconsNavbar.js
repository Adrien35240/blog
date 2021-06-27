import React from "react";
import ButtonNavigationBar from "./icons/ButtonNavigationBar";
import ToggleDarkMode from "./toggle-darkMode/ToggleDarkMode";
import { useAuth } from "../../../services/security/contexts/AuthContext";
import { FaHome,FaBlog } from "react-icons/fa";
import ButtonLogOutNavigationBar from "./icons/ButtonLogOutNavigationBar";
import "./icon-navbar.css";
function IconsNavbar() {
  const { currentUser } = useAuth();

  return (
    <div className="container-icon-navbar">
      <a
        className="icon-home"
        href="/#container-presentation"
      >
        <FaHome />
      </a>
      <ToggleDarkMode />
      <div className="container-liens">
        <a id="a-portfolio" href="/#container-presentation">
          Accueil
        </a>
        <a id="a-portfolio" href="/#container-competences">
          Compétences
        </a>
        <a id="a-portfolio" href="/#container-work">
          Portfolio
        </a>
        <a id="a-portfolio" href="/#container-contact">
          Contact
        </a>
      </div>
      <div className="container-icon-link">
        <ButtonNavigationBar
          name="Blog"
          path="/blog"
          className="container-title-navbar"
        />
        {currentUser ? (
          <ButtonNavigationBar
            color="inherit"
            name="Dashboard"
            path="/dashboard"
          />
        ) : (
          <></> // n'afficher rien si condition = false
        )}
        {currentUser ? (
          <ButtonLogOutNavigationBar name="LogOut" color="inherit" />
        ) : (
          <></> // n'afficher rien si condition = false
        )}
        {!currentUser ? (
          <ButtonNavigationBar color="inherit" name="LogIn" path="/login" />
        ) : (
          <></> // n'afficher rien si condition = false
        )}
        {!currentUser ? (
          <ButtonNavigationBar
            color="inherit"
            name="Register"
            path="/in-progress"
          />
        ) : (
          <></> // n'afficher rien si condition = false / modifier le path a /signup pour activer la page d'enregistrement d'utilisateur
        )}
      </div>
      <div >
        <a className="icon-blog" href="/blog">
          <FaBlog />
        </a>
      </div>
    </div>
  );
}

export default IconsNavbar;
