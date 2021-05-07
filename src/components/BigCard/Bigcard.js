import React from "react";
import {Link} from "react-router-dom"
import "./bigcard.css"
export default function BigCard(props) {
  function formatContent() {
    const text = props.content;
    return (
      <div component={"span"} dangerouslySetInnerHTML={{ __html: text }}></div>
    );
  }
  return (
    <div className="container-big-card">
      <div>
        <img className="container-img" src={props.img} alt="no-img" />
        <div>
          <div className="big-card-title">{props.title}</div>
          <div className="big-card-content">{formatContent()}</div>
        </div>
      </div>
      <Link id="button-comment" to={"/comments/" + props.id}>
        Commentaires
      </Link>
    </div>
  );
}
