import firebase from "firebase";

module.exports.getPosts = async () => {
    await firebase
        .firestore()
        .collection("articles")
        .get()
        .then((article) => {
            let documents = [];
            article.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id});
            });
        });
};

