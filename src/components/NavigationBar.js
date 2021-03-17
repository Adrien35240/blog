import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& a": {
      //NOTE: tout les liens dans root son blanc
      color: "white",
      textDecoration: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link to="/">Le Blog</Link>
          </Typography>
          <Button color="inherit">
           <Link to="/login">Login</Link> 
          </Button>
          <Button color="inherit">
           <Link to="/signup">Register</Link> 
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
