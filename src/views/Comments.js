import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";

function Comments() {
  const [articles, setArticles] = useState([]);
  let urlcourante = document.location.href;
  urlcourante = urlcourante.replace(/\/$/, "");
  const queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1);

  useEffect(() => {
    // console.log(queue_url);
    firebase
      .firestore()
      .collection("articles")
      .where("title", "==", queue_url)
      .get()
      .then((focus) => {
        let documents = [];
        focus.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
           setArticles(documents);
           console.log("articles: " ,articles)
      });
  }, []);
     
     return (
          <>
               Commentaires : {queue_url}
          </>
     )
}
export default Comments;
