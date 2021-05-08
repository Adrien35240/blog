//NOTE: comprend les boutons modifier/supprimer par carte
import React, { useState } from "react";
import firebase from "firebase/app";
import ButtonComments from "../ButtonComments/ButtonComments";
import { Link } from "react-router-dom";

export default function LittleCard(props) {
   const [refresh, setRefresh] = useState();
   const refreshPage = () => {
    window.location.reload();
   };
  async function handleDelete() {
    console.log("Delete processing ...");
     setRefresh(false);
    console.log(props.id);
    const res = await firebase
      .firestore()
      .collection("articles")
      .doc(props.id)
      .delete()
      .then(refreshPage)
    console.log(res);
  }

  return (
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
        
        <div>
          <ButtonComments slug={props.id} />
        </div>
        
          <Link to={"/modify-post/" + props.id}>Modifier</Link>
        
      </div>
      <div
        onClick={() => {
          handleDelete();
        }}
      >
        Supprimer
      </div>
    </div>
  );
}
