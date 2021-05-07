//TODO: afficher le bouton dashboard pour un utilisateur connecté
import React from "react";
import TitleNavigationBar from "./components/TitleNavigationBar";
import ButtonNavigationBar from "./components/ButtonNavigationBar";
import { useAuth } from "../../../services/security/contexts/AuthContext";
import ButtonLogOutNavigationBar from "./components/ButtonLogOutNavigationBar";
import "./icon-navbar.css"
function IconsNavbar() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="container-icon-navbar">
      <div>
        <TitleNavigationBar
          name="Le Blog"
          path="/"
          className="container-title-navbar"
        />
      </div>
      <div className="container-icon-link">
        
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
        )}{" "}
        {!currentUser ? (
          <ButtonNavigationBar color="inherit" name="SignUp" path="/connection-disable" />
        ) : (
          <></> // n'afficher rien si condition = false / modifier le path a /signup pour activer la page d'enregistrement d'utilisateur
        )}
      </div>
    </div>
  );
}

export default IconsNavbar;
