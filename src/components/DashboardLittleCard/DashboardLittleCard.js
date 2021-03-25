//NOTE: affiche la liste des littleCard dans le dashboard
import React, { useState, useEffect } from "react";
import LittleCardDashboard from "../LittleCardDashboard/LittleCardDashboard";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";

function DashboardLittleCard(props) {
  const [articles, setArticles] = useState([]);
  const [urlImg, setUrlImg] = useState();

  //NOTE: Recupere le lien d'une image sur firebase

  useEffect(() => {
    firebase
      .firestore()
      .collection("articles").where('userId',"==",props.userId)
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
            return (
              <Grid key={index} item xs={12} sm={3}>
                <LittleCardDashboard
                  title={article.title}
                  description={article.description}
                  img={article.img}
                  slug={article.title}
                  id={article.id}
                />
              </Grid>
            );
          })}
      </Grid>
    );
  }

  return <div>{renderArticles()}</div>;
}

export default DashboardLittleCard;
