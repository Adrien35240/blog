import React from "react";
import { Link } from "react-router-dom";
import "./button-icon.css";

function ButtonNavigationBar(props) {
  return (
    <div className="container-icon-navbar">
      <Link id="link" to={props.path}>
        <button className="icon-navbar">{props.name}</button>
      </Link>
    </div>
  );
}

export default ButtonNavigationBar;
