import React from "react";
import { Link } from "react-router-dom";
import "./button-icon.css";

function ButtonNavigationBar(props) {
  return (
    <>
      <button>
        <Link to={props.path}>{props.name}</Link>
      </button>
    </>
  );
}

export default ButtonNavigationBar;
