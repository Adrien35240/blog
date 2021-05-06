import React from "react";
import { Link } from "react-router-dom";
import "./button-icon.css";

function ButtonNavigationBar(props) {
  return (
    <div>
      <button className="icon-navbar">
        <Link to={props.path}>{props.name}</Link>
      </button>
    </div>
  );
}

export default ButtonNavigationBar;
