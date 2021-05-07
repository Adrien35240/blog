import React from "react";
import { Link } from "react-router-dom";
import "./button-icon.css";

function ButtonNavigationBar(props) {
  return (
    <div className="container-icon-link">
      <Link id="id-icon-link" to={props.path}>
        {props.name}
      </Link>
    </div>
  );
}

export default ButtonNavigationBar;
