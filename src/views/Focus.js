import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import BigCard from "../components/BigCard/Bigcard"
import firebase from "firebase";
function Focus() {
  const [articles, setArticles] = useState([]);

  function getArticleFocused() {
    let urlcourante = document.location.href;
    const queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1);
    console.log(queue_url);
    firebase
      .firestore()
      .collection("articles")
      .where(firebase.firestore.FieldPath.documentId(), "==", queue_url) //NOTE: recupere l'id du document et le compare
      .get()
      .then((focus) => {
        let documents = [];
        focus.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setArticles(documents);
      });
  }

  useEffect(() => {
    getArticleFocused();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      {articles &&
        articles.map((article, index) => (
          <Grid key={index} item xs={10}>
            <BigCard
              title={article.title}
              content={article.content}
              img={article.img}
              slug={article.title}
              id={article.id}
            />
          </Grid>
        ))}
    </Grid>
  );
}

export default Focus;
