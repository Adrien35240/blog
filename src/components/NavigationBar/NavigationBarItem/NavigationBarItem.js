import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import TitleNavigationBar from "./components/items/TitleNavigationBar";
import ButtonNavigationBar from "./components/items/ButtonNavigationBar";
function NavigationBarItem() {
  return (
    <>
      <Toolbar>
        <TitleNavigationBar name="Le Blog" path="/" />
        <ButtonNavigationBar color="inherit" name="Login" path="/login" />
        <ButtonNavigationBar color="inherit" name="Register" path="/signup" />
      </Toolbar>
    </>
  );
}

export default NavigationBarItem;
