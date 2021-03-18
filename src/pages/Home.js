import React, { useState, useEffect } from "react";
import LittleCard from "../components/LittleCard";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
  },
}));
function Home() {
  const [articles, setArticles] = useState([]);
  const classes = useStyles();

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
      <Grid container justify='center' spacing={2}>
        {articles &&
          articles.map((article, index) => (
            <Grid key={index} item xs={12} sm={3}>
              <LittleCard
                title={article.title}
                description={article.description}
                img="/empty-card.jpeg"
                slug={article.title}
              />
            </Grid>
          ))}
      </Grid>
    );
  }

  return <div>{renderArticles()}</div>;
}

export default Home;
