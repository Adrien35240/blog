import React from "react";
import ButtonComments from "../ButtonComments/ButtonComments";

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
          <div gutterBottom variant="h5" component="h2">
            {props.title}
          </div>
          <div variant="body2" color="textSecondary" component="p">
            {formatContent()}
          </div>
        </div>
      </div>
      <div>
        <ButtonComments slug={props.id} />
      </div>
    </div>
  );
}
