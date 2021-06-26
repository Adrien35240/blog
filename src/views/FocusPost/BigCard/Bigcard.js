import React from "react";
import "./bigcard.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function BigCard(props) {
  function formatContent() {
    const text = props.content;
     return (
       text
     );
  }
  return (
    <div className="container-big-card">
      <img className="container-img" src={props.img} alt="no-img" />
      <div className="big-card-title">{props.title}</div>
      <div className="big-card-content">
      <SyntaxHighlighter language="javascript" style={docco}>
        {formatContent()}
      </SyntaxHighlighter></div>
      {/* <Comments id={props.id} /> */}
    </div>
  );
}
