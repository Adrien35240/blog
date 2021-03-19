import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
function ButtonNavigationBar(props) {
  return (
    <>
      <Button>
        <Link to={props.path}>{props.name}</Link>
      </Button>
    </>
  );
}

export default ButtonNavigationBar;
