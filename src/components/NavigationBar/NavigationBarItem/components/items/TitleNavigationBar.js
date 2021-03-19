import React from 'react'
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));
function TitleNavigationBar(props) {
  const classes = useStyles();

    return (
      <>
        <Typography variant="h6" className={classes.title}>
          <Link to={props.path}>{props.name}</Link>
        </Typography>
      </>
    );
}

export default TitleNavigationBar;
