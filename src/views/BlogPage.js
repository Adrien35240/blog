import React, { useState, useEffect } from "react";
import LittleCard from "../components/LittleCard/LittleCard";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";

function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [urlImg, setUrlImg] = useState();

  //NOTE: Recupere le lien d'une image sur firebase

  useEffect(() => {
    firebase
      .firestore()
      .collection("articles")
      .get()
      .then((article) => {
        let documents = [];
        article.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setArticles(documents);
      });
  }, []);

  function renderArticles() {
    return (
      <Grid container justify="center" spacing={2}>
        {articles &&
          articles.map((article, index) => {
           {/* getImage(article.img) */}
            return (
              <Grid key={index} item xs={12} sm={3}>
                <LittleCard
                  title={article.title}
                  description={article.description}
                  img={article.img}
                  slug={article.title}
                />
              </Grid>
            );
          })}
      </Grid>
    );
  }

  return <div>{renderArticles()}</div>;
}

export default BlogPage;
