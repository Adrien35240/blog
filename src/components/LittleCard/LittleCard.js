import React from "react";
import { Link } from "react-router-dom";
import "./little-card.css";

export default function LittleCard(props) {
  return (
    <Link id="link-little-card" to={"/focus-post/" + props.id}>
      <div className="container-little-card">
        <div className="container-img-little-card">
          <img
            className="img-little-card"
            id="img-exif"
            src={props.img}
            alt="no-img"
          />
        </div>

        <div className="title-little-card">{props.title}</div>
        <div className="description-little-card">{props.description}</div>
      </div>
    </Link>
  );
}
