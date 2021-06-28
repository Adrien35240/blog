import React from "react";
import img1 from "../assets/work/img1.png";
import img2 from "../assets/work/img2.png"
import "./blog-work.css";
function BlogWork() {
  return (
    <div id="container-caroussel-work-blog">
      <div>
        <img id="img1-caroussel" src={img1} alt="img1"></img>
        <img id="img2-caroussel" src={img2} alt="img2"></img>
      </div>
    </div>
  );
}

export default BlogWork;
