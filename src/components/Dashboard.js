import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button, Input } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import { storage } from "../firebase";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");

  const useStyles = makeStyles((theme) => ({
    input: {
      width: "100%",
      margin: "10px 0px 10px 0px",
    },
  }));

  const classes = useStyles();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
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
    };

    // Add a new document in collection "article" with ID 'title'
    const res = await firebase.firestore().collection("articles").add(data);
    console.log("Set: ", res);
  }


  return (
    <Grid container justify="center">
      {error && <Alert severity="error">{error}</Alert>}
      <Typography variant="h4" gutterBottom style={{ margintTop: "30px" }}>
        Dashboard
      </Typography>

      <form noValidate autoComplete="off">
        <TextField
          required
          id="title"
          label="Titre"
          variant="outlined"
          className={classes.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          required
          id="password"
          label="Description"
          variant="outlined"
          className={classes.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <Input type="file" onChange={handleImageAsFile} />
        <ReactQuill value={content} onChange={handleChange} />
        <Button
          color="primary"
          fullWidth={true}
          variant="contained"
          onClick={() => handleSubmit()}
        >
          Enregister
        </Button>
      </form>
    </Grid>
  );
}
