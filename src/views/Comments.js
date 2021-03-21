import React, { useState ,useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";

function Comments(props) {
  const [articles, setArticles] = useState([]);
  function getArticleFocused() {
    let urlcourante = document.location.href;
    urlcourante = urlcourante.replace(/\/$/, "");
    const queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1);
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
      });
  }

useEffect(() => {
 getArticleFocused();
}, [])

  return (
    <Grid>
      { articles.map((article, index) => (
        <Grid key={index}>
            Commentaires de {article.title}
       </Grid>
     ))}
    </Grid>
  );
}

export default Comments;
