import React, { useState, useEffect } from "react";
import LittleCard from "../components/LittleCard";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";

function Home() {
  const [articles, setArticles] = useState([]); // good

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
      <Grid item xs={12} md={4}>
        {articles &&
          articles.map((article, index) => (
            <LittleCard
              key={index}
              title={article.title}
              description={article.description}
              img="/empty-card.jpeg"
              slug="reptile"
            />
          ))}
      </Grid>
    );
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      {renderArticles()}
    </Grid>
  );
}

export default Home;
