import React, { useState,useEffect } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { storage } from "../services/database/firebase";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "../css/create-post.css";
export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory();
  const [imageAsFile, setImageAsFile] = useState("");

  const configQuill = {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["code-block"],
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
    },
    placeholder: "Compose un article épic",
    theme: "snow", // or 'bubble'
  };

  function createQuill() {
    new Quill("#editor-container", configQuill);
  }
  

  useEffect(() => {
   setTimeout(createQuill, 500, configQuill);
  }, [])

  function handleChange(e) {
    setContent(e);
    console.log(e);
  }

  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  function pushImg(imageAsFile) {
    storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
  }

  async function handleSubmit() {
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    await pushImg(imageAsFile);

    const data = {
      title: title,
      description: description,
      content: content,
      img: await storage.ref("images").child(imageAsFile.name).getDownloadURL(),
      user: currentUser.email,
      userId: currentUser.uid,
      date: firebase.firestore.Timestamp.now().toDate(),
    };

    // Add a new document in collection "article" with ID 'title'
    const res = await firebase.firestore().collection("articles").add(data);

    console.log("Set: ", res);
    history.push("/dashboard");
  }

  return (
    <div className="container-create-post">
      <div className="create-post-title">Créer un post</div>

      <input
        required
        placeholder="Titre du post"
        id="title"
        label="Titre"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        required
        placeholder="Description"
        id="password"
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label for="file-post">Choisir une image de présentation</label>
      <input required id="file-post" type="file" onChange={handleImageAsFile} />
      <div id="editor-container"></div>
      <div className="button-create" onClick={() => handleSubmit()}>
        Créer
      </div>
    </div>
  );
}
