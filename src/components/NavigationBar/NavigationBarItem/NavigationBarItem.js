//TODO: afficher le bouton dashboard pour un utilisateur connecté
import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import TitleNavigationBar from "./components/TitleNavigationBar";
import ButtonNavigationBar from "./components/ButtonNavigationBar";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../../../services/security/contexts/AuthContext"
import { useHistory, Link } from "react-router-dom";
import ButtonLogOutNavigationBar from "./components/ButtonLogOutNavigationBar";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));
function NavigationBarItem() {
 const [error, setError] = useState("");
 const { currentUser, logout } = useAuth();
 const history = useHistory();

  const classes = useStyles();

  return (
    <>
      <Toolbar>
        {error && <Alert severity="error">{error}</Alert>}
        <TitleNavigationBar name="Le Blog" path="/" className={classes.title} />
        {currentUser ? (
          <ButtonNavigationBar
            color="inherit"
            name="Dashboard"
            path="/dashboard"
          />
        ) : (
          <></>
        )}
        {currentUser ? (
          <ButtonLogOutNavigationBar
            name="LogOut"
            color="inherit"
            
          />
        ) : (
          <></>
        )}
        {!currentUser ? (
          <ButtonNavigationBar color="inherit" name="LogIn" path="/login" />
        ) : (
          <></>
        )}{" "}
        {!currentUser ? (
          <ButtonNavigationBar color="inherit" name="SignUp" path="/signup" />
        ) : (
          <></>
        )}
      </Toolbar>
    </>
  );
}

export default NavigationBarItem;
