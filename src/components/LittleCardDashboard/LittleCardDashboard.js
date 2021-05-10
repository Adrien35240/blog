//NOTE: comprend les boutons modifier/supprimer par carte
import React, { useState } from "react";
import firebase from "firebase/app";
import { TiDelete, TiUpload } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./littlecard-dashboard.css";
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
      .then(refreshPage);
    console.log(res);
  }

  return (
    <div className="container-littlecard-dashboard">
      <Link id="link-littlecard-dashboard" to={"/focus/" + props.id}>
        <img
          className="container-img-little-card"
          src={props.img}
          alt="no-img"
        />
        <div className="title-littlecard-dashboard">{props.title}</div>
        <div className="description-little-card">{props.description}</div>
      </Link>{" "}
      <div className="container-button-littlecard-dashboard">
        <div>
          <Link
            id="littlecard-dashboard-update"
            to={"/modify-post/" + props.id}
          >
            <TiUpload />
          </Link>
        </div>
        <div
          className="littlecard-dashboard-delete"
          onClick={() => {
            handleDelete();
          }}
        >
          <TiDelete />
        </div>
      </div>
    </div>
  );
}
