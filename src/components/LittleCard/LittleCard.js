import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./little-card.css";

export default function LittleCard(props) {


  return (
    <Link id="link-little-card" to={"/focus/" + props.id}>
      <div className="container-little-card">
        <img
          className="container-img-little-card"
          id="img-exif"
          src={props.img}
          alt="no-img"
        />

        <div className="title-little-card">{props.title}</div>
        <div className="description-little-card">{props.description}</div>
      </div>
    </Link>
  );
}
