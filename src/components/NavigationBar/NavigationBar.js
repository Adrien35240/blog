import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import NavigationBarItem from "./NavigationBarItem/NavigationBarItem";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <NavigationBarItem />
      </AppBar>
    </div>
  );
}
