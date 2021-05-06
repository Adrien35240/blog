import React from "react";
import { Link } from "react-router-dom";
function ButtonComments(props) {
  return (
    <div>
      <button size="small" color="primary">
      <Link to={"/comments/" + props.slug} > Commentaires</Link>
      </button>
    </div>
  );
}

export default ButtonComments;
