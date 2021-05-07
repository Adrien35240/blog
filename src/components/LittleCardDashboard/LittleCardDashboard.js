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
        refreshPage();
        console.log("Post Delete");
      });
  }

  return (
    <div>
      <div>
        <div>
          <Link to={"/focus/" + props.id}>
            <img
              className="container-img-little-card"
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
      </div>
      <button
        onClick={() => {
          console.log("click");
          handleDelete();
        }}
      >
        Supprimer
      </button>
    </div>
  );
}
