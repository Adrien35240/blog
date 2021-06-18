import React, { useState, useEffect } from "react";
import LittleCard from "./LittleCard/LittleCard";
import firebase from "firebase/app";
import "firebase/app";
import "./post-container.css";
// import CommentsLink from "./LittleCard/components/CommentsLink";
function PostContainer() {
 const [articles, setArticles] = useState([]);

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
      <div className="container-post-page">
        <div>{/* <Presentation /> */}</div>
        <div className="container-articles">
          {articles &&
            articles.map((article, index) => {
              return (
                <div key={index}>
                  {article.publish ? (
                    <LittleCard
                      title={article.title}
                      description={article.description}
                      img={article.img}
                      slug={article.title}
                      id={article.id}
                      pseudo={article.pseudo}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return <div>{renderArticles()}</div>;
}

export default PostContainer;
