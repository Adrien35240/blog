import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
function ButtonComments(props) {
  return (
    <>
      <Button size="small" color="primary">
      <Link to={"/comments/" + props.slug}> Commentaires</Link>
      </Button>
    </>
  );
}

export default ButtonComments;
