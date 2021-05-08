import firebase from "firebase/app";
import "firebase/firestore";
import React, { useEffect, useState } from "react";

function ModifyPost() {
  let urlcourante = document.location.href;
  const queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1);
  const [res, setRes] = useState([]);
  const getArticle = async () => {
    const res = await firebase
      .firestore()
      .collection("articles")
      .doc(queue_url)
      .get();
  };

  useEffect(() => {
    setRes(getArticle());
    console.log(res.title);
  }, []);

  return <div>modifier le post</div>;
}

export default ModifyPost;
