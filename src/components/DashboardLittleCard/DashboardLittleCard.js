//NOTE: affiche la liste des littleCard dans le dashboard
import React, { useState, useEffect } from "react";
import LittleCardDashboard from "../LittleCardDashboard/LittleCardDashboard";
import firebase from "firebase/app";
import "./dashboard-littlecard.css"
function DashboardLittleCard(props) {
  const [articles, setArticles] = useState([]);
  

async function getDocuments() {
  await firebase
    .firestore()
    .collection("articles")
    .where("userId", "==", props.userId)
    .get()
    .then((article) => {
      let documents = [];
      article.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setArticles(documents);
    });
}

  useEffect(() => {
 getDocuments();
  }, []);

  function renderArticles() {
    return (
      <div className="container-dashboard-littlecard">
        {articles &&
          articles.map((article, index) => {
            return (
              <div key={index}>
                <LittleCardDashboard
                  title={article.title}
                  description={article.description}
                  img={article.img}
                  slug={article.title}
                  id={article.id}
                  publish={article.publish}
                />
              </div>
            );
          })}
      </div>
    );
  }

  return <div>{renderArticles()}</div>;
}

export default DashboardLittleCard;
