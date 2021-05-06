//NOTE: comprend les boutons modifier/supprimer par carte
import React, { useState } from "react";
import firebase from "firebase";
import ButtonComments from "../ButtonComments/ButtonComments";
import { Link } from "react-router-dom";


export default function LittleCard(props) {
  const [refresh, setRefresh] = useState();

  const refreshPage = () => {
    window.location.reload();
  };

  async function handleDelete() {
    setRefresh(false);
    console.log(refresh);
    await firebase
      .firestore()
      .collection("articles")
      .doc(props.id)
      .delete()
      .then(() => {
        console.log("Post Delete");
        refreshPage();
      });
  }

  return (
    <div className="container-little-card">
      <div>
        <Link to={"/focus/" + props.id}>
          <img className="container-img"
            src={props.img}
            alt="no-img"
          />
          <div>
            <div>{props.title}</div>
            <div>{props.description}</div>
          </div>
        </Link>
      </div>
      <div>
        <ButtonComments slug={props.id} />
      </div>
      <button>
        <Link to={"/modify-post/" + props.id}>Modifier</Link>
      </button>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
}
