import React, { useEffect, useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import { storage } from "../services/database/firebase";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../css/update-post.css";

function ModifyPost() {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory();
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsFileUpdate, setImageAsFileUpdate] = useState("");
  const [imageUpdate, setImageUpdate] = useState("0");
  let urlcourante = document.location.href;
  const queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1);
  let imgLink;
  const [res, setRes] = useState([]);
  const getArticle = async () => {
    const res = await firebase
      .firestore()
      .collection("articles")
      .doc(queue_url)
      .get();
    if (!res.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", res.data());
      setDescription(res.data().description);
      setContent(res.data().content);
      setImageAsFile(res.data().img);
    }
  };

  useEffect(() => {
    setRes(getArticle());
  }, []);
  function handleChange(e) {
    setContent(e);
    console.log(e);
  }

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    console.log("input file : ", e);
    setImageAsFileUpdate((imageFile) => image);
    setImageUpdate("1");
  };

  function pushImg(imageAsFile) {}

  async function handleSubmit() {
    console.log("start of upload");
    // async magic goes here...
    if (imageUpdate === "0") {
      console.log("imageAsFile :", imageAsFile);
      imgLink = imageAsFile;
    } else {
      await pushImg(imageAsFileUpdate);
      imgLink = await storage
        .ref("images")
        .child(imageAsFileUpdate.name)
        .getDownloadURL();
    }

    const data = {
      description: description,
      content: content,
      img: imgLink,
      user: currentUser.email,
      userId: currentUser.uid,
      date: firebase.firestore.Timestamp.now().toDate(),
    };

    // Add a new document in collection "article" with ID 'title'
    const res = await firebase
      .firestore()
      .collection("articles")
      .doc(queue_url)
      .update(data);

    console.log("Set: ", res);
    history.push("/dashboard");
  }
  return (
    <div className="container-update-post">
      <div className="update-post-title">Modifier le post</div>

     
      <textarea
        required
        maxLength="120"
        placeholder="Description - Limiter à 120 charactères"
        id="password"
        label="Description"
        variant="outlined"
        value={description || "Données absentes"}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="file-post">Changer l'image de présentation ?</label>
      <input id="file-post" type="file" onChange={handleImageAsFile} />
      <ReactQuill value={content} onChange={handleChange} modules={modules} />
      <div className="button-update" onClick={() => handleSubmit()}>
        Enregistrer
      </div>
    </div>
  );
}

export default ModifyPost;
