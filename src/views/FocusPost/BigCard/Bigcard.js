import React from "react";
import "./bigcard.css";
export default function BigCard(props) {
 

  function formatContent() {
    let text = props.content;

    return (
      <div id="big-card-content" component={"span"} dangerouslySetInnerHTML={{ __html: text }}></div>
    );
  }
  return (
    <div className="container-big-card">
      <img className="container-img" src={props.img} alt="no-img" />
      <div className="big-card-title">{props.title}</div>
      <div className="big-card-content">{formatContent()}</div>
      {/* <Comments id={props.id} /> */}
    </div>
  );
}
