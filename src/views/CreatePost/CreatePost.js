import React, { useState } from "react";
import { useAuth } from "../../services/security/contexts/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { storage } from "../../services/database/firebase";
import Quill from "quill";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./create-post.css";
import imageCompression from "browser-image-compression";
import ImageCompress from "quill-image-compress";
 import hljs from "highlight.js";


export default function Dashboard() {
   hljs.configure({
     useBR: false,
     languages: ["javascript", "java", "html", "xml", "sql", "typescript"],
   });
  Quill.register("modules/imageCompress", ImageCompress);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory();
  const [imgLink, setImgLink] = useState("");
  const modules = {
     syntax:true,
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
      ["link", "image", "video","code-block"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
    imageCompress: {
      quality: 0.7, // default
      maxWidth: 1000, // default
      maxHeight: 1000, // default
      imageType: "image/jpeg", // default
      debug: true, // default
    },
  };
  function handleChange(e) {
    setContent(e);
    console.log(e);
  }

  async function handleSubmit() {
    console.log("start of upload");
    console.log("imgLink = ", imgLink);
    const data = {
      description: description,
      content: content,
      img: imgLink,
      user: currentUser.email,
      userId: currentUser.uid,
      date: firebase.firestore.Timestamp.now().toDate(),
      publish: false,
    };

    // Add a new document in collection "article" with ID 'title'
    const res = await firebase.firestore().collection("articles").add(data);

    console.log("Set: ", res);
    history.push("/dashboard");
  }
  //NOTE:Compress image

  function handleImageAsFile(e) {
    handleImageUpload(e);

    async function handleImageUpload(e) {
      const imageFile = e.target.files[0];
      console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
      console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

      const options = {
        maxSizeMB: 0.1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      try {
        const compressedFile = await imageCompression(imageFile, options);
        console.log(
          "compressedFile instanceof Blob",
          compressedFile instanceof Blob
        ); // true
        console.log(
          `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
        ); // smaller than maxSizeMB
        await storage.ref(`/images/${compressedFile.name}`).put(compressedFile);
        try {
          const request = await storage
            .ref("images")
            .child(compressedFile.name)
            .getDownloadURL();
          console.log("transmission ok => request = ", request);
          setImgLink(request);
        } catch (error) {
          console.log("getUrl error :", error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="container-create-post">
      <div className="create-post-title">Créer un post</div>

      <textarea
        required
        placeholder="Description - Limiter à 120 charactères"
        id="password"
        label="Description"
        variant="outlined"
        maxLength="120"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="file-post">Choisir une image de présentation</label>
      <input required id="file-post" type="file" onChange={handleImageAsFile} />
      <ReactQuill id="container-quill-editor" value={content} onChange={handleChange} modules={modules} />
      <div className="button-create" onClick={() => handleSubmit()}>
        Créer
      </div>
    </div>
  );
}
