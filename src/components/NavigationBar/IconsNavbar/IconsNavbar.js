//TODO: afficher le bouton dashboard pour un utilisateur connecté
import React from "react";
import TitleNavigationBar from "./components/TitleNavigationBar";
import ButtonNavigationBar from "./components/ButtonNavigationBar";
import { useAuth } from "../../../services/security/contexts/AuthContext";
import ButtonLogOutNavigationBar from "./components/ButtonLogOutNavigationBar";

function IconsNavbar() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="container-icon-navbar">
      <TitleNavigationBar
        name="Le Blog"
        path="/"
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
      )}{" "}
      {!currentUser ? (
        <ButtonNavigationBar color="inherit" name="SignUp" path="/signup" />
      ) : (
        <></> // n'afficher rien si condition = false
      )}
    </div>
  );
}

export default IconsNavbar;
