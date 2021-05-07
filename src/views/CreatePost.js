import React, { useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { storage } from "../services/database/firebase";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory();
  const [imageAsFile, setImageAsFile] = useState("");

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
    <div>
      <div>Créer un post</div>

      <input
        id="title"
        label="Titre"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        id="password"
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" onChange={handleImageAsFile} />
      <ReactQuill value={content} onChange={handleChange} />
      <button onClick={() => handleSubmit()}>Créer</button>
    </div>
  );
}
