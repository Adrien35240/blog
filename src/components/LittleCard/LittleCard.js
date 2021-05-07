import React from "react";
import ButtonComments from "../ButtonComments/ButtonComments";
import { Link } from "react-router-dom";
import "./little-card.css";
export default function LittleCard(props) {
  return (
    <div className="container-little-card">
      <Link to={"/focus/" + props.id}>
        <img
          className="container-img-little-card"
          src={props.img}
          alt="no-img"
        />

        <div>{props.title}</div>
        <div>{props.description}</div>
      </Link>
      <ButtonComments slug={props.id} />
    </div>
  );
}
