import React from "react";
import ButtonComments from "../ButtonComments/ButtonComments"
import { Link } from "react-router-dom";

export default function LittleCard(props) {

  return (
    <div className="container-little-card">
      <div>
        <Link to={"/focus/" + props.id}>
          <img className="container-img" src={props.img} alt="no-img" />
          <div className="container-card-content">
            <div>{props.title}</div>
            <div>{props.description}</div>
          </div>
        </Link>
      </div>
      <div>
        <ButtonComments slug={props.id} />
      </div>
    </div>
  );
}
