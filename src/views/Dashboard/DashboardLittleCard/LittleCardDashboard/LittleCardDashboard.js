//NOTE: comprend les boutons modifier/supprimer par carte
import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { TiDelete, TiUpload } from "react-icons/ti";
import { MdPublish } from "react-icons/md";
import { Link } from "react-router-dom";
import "./littlecard-dashboard.css";
export default function LittleCard(props) {
  const [loading,setLoading] = useState(Boolean)
  const history = useHistory();
  const [publish, setPublish] = useState(Boolean);
  // setLoading(false)
  useEffect(() => {
    
    setPublish(props.publish);
  }, [publish]);

  const refreshPage = () => {
    window.location.reload();
  };
  async function handleDelete() {
    console.log("Delete processing ...");
    console.log(props.id);
    const res = await firebase
      .firestore()
      .collection("articles")
      .doc(props.id)
      .delete()
      .then(refreshPage);
    console.log(res);
  }
  async function handlePublish() {
    console.log(`Toggle Publish : ${publish} to ${!publish}`);
    console.log(props.id);
    await firebase
      .firestore()
      .collection("articles")
      .doc(props.id)
      .update({ publish: !publish });

   refreshPage()
  }

  return (
    
    <div className="container-littlecard-dashboard">
      {/* {loading ? <div>LOADING</div> : <div></div>} */}
      <Link id="link-littlecard-dashboard" to={"/focus-post/" + props.id}>
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
          {" "}
          {publish ? (
            <div
              className="littlecard-dashboard-publish"
              onClick={() => {
                handlePublish();
              }}
            >
              <MdPublish />
            </div>
          ) : (
            <div
              className="littlecard-dashboard-publish-off"
              onClick={() => {
                handlePublish();
              }}
            >
              <MdPublish />
            </div>
          )}
          {publish
            ? console.log(`article ${props.id} publié`)
            : console.log(`article ${props.id} non-publié`)}
        </div>
        <div>
          <Link
            id="littlecard-dashboard-update"
            to={"/update-post/" + props.id}
          >
            <TiUpload />
            <span className="tooltip-update">Update Post</span>
          </Link>
        </div>
        <div
          className="littlecard-dashboard-delete"
          onClick={() => {
            handleDelete();
          }}
        >
          <TiDelete />

          <span className="tooltip-delete">Delete Post</span>
        </div>
      </div>
    </div>
  );
}
