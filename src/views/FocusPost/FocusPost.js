import React, { useEffect, useState } from "react";
import BigCard from "../../components/BigCard/Bigcard";
import firebase from "firebase/app";
import "./focus-post.css";
function FocusPost() {
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
    <div className="container-focus-article">
      {articles &&
        articles.map((article, index) => (
          <div key={index}>
            <BigCard
              title={article.title}
              content={article.content}
              img={article.img}
              slug={article.title}
              id={article.id}
            />
          </div>
        ))}
    </div>
  );
}

export default FocusPost;
