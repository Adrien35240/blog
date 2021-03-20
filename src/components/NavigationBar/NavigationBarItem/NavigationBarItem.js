import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import TitleNavigationBar from "./components/TitleNavigationBar";
import ButtonNavigationBar from "./components/ButtonNavigationBar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));
function NavigationBarItem() {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <TitleNavigationBar name="Le Blog" path="/" className={classes.title}/>
        <ButtonNavigationBar color="inherit" name="Login" path="/login" />
        <ButtonNavigationBar color="inherit" name="Register" path="/signup" />
      </Toolbar>
    </>
  );
}

export default NavigationBarItem;
