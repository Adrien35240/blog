import React from "react";
import { Link } from "react-router-dom";
import "./little-card.css";
export default function LittleCard(props) {
  return (
    <div className="container-little-card">
      <Link id="link-little-card" to={"/focus/" + props.id}>
        <img
          className="container-img-little-card"
          src={props.img}
          alt="no-img"
        />

        <div className="title-little-card">{props.title}</div>
        <div className="description-little-card">{props.description}</div>
      </Link>
    </div>
  );
}
