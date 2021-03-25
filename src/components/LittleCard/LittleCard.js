import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonComments from "../ButtonComments/ButtonComments"
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
        <ButtonComments slug={props.id}/>
      </CardActions>
    </Card>
  );
}
