import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";

function Comments() {
  const [articles, setArticles] = useState([]);
  let urlcourante = document.location.href;
  const queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1);

  useEffect(() => {
    console.log("Comment queue_url => :", queue_url);
    firebase
      .firestore()
      .collection("comments")
      .where("idPost", "==", queue_url) //NOTE: recupere l'id du document et le compare
      .get()
      .then((focus) => {
        let documents = [];
        focus.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setArticles(documents);
      });
  }, []);

  return (
    <>
      {articles &&
        articles.map((article, index) => {
          return (
            <Grid key={index}>
              Commentaires : {article.comment} ecrit par {article.userPseudo}
            </Grid>
          );
        })}
    </>
  );
}
export default Comments;
