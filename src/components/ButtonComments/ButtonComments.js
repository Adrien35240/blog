import React from "react";
import { Link } from "react-router-dom";
import "./button-comment.css"
function ButtonComments(props) {
  return (
    <Link id="container-button-comment" to={"/comments/" + props.slug}>
    Commentaires
    </Link>
  );
}

export default ButtonComments;
