import React from "react";
import { Link } from "react-router-dom";
import { CgHomeAlt } from "react-icons/cg";
import "./button-icon.css";
function TitleNavigationBar(props) {
  return (
    <div className="container-icon-navbar">
      <Link id="id-icon-home" to={props.path}>
        <CgHomeAlt  />
      </Link>
    </div>
  );
}

export default TitleNavigationBar;
