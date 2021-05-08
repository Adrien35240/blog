import React from "react";
import Comments from "../../components/Comments/Comments";
import "./bigcard.css";
export default function BigCard(props) {
  function formatContent() {
    const text = props.content;
    return (
      <div component={"span"} dangerouslySetInnerHTML={{ __html: text }}></div>
    );
  }
  return (
    <div className="container-big-card">
      <img className="container-img" src={props.img} alt="no-img" />
      <div className="big-card-title">{props.title}</div>
      <div className="big-card-content">{formatContent()}</div>
      <Comments id={props.id} />
    </div>
  );
}
