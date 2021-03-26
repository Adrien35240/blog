//NOTE: comprend les boutons modifier/supprimer par carte
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import ButtonComments from "../ButtonComments/ButtonComments";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    "& a": {
      textDecoration: "none",
    },
  },
});

export default function LittleCard(props) {
  const classes = useStyles();
  const [refresh, setRefresh] = useState();

  const refreshPage = ()=>{
     window.location.reload();
  }


  async function handleDelete() {
    setRefresh(false);
    console.log(refresh);
    await firebase
      .firestore()
      .collection("articles")
      .doc(props.id)
      .delete()
      .then(() => {
        console.log("Post Delete")
        refreshPage()
      });
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={"/focus/" + props.id}>
          <CardMedia
            image={props.img}
            title="no-img"
            height="70"
            component="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </Link>{" "}
      </CardActionArea>
      <CardActions>
        <ButtonComments slug={props.id} />
      </CardActions>
      <Button ><Link to={"/modify-post/" + props.id}>Modifier</Link></Button>
      <Button onClick={handleDelete}>Supprimer</Button>
    </Card>
  );
}
