import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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

export default function LittleCard(LittleCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={"/focus/" + LittleCardProps.slug}>
          <CardMedia
            image={LittleCardProps.img}
            title="no-img"
            height="140"
            component="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {LittleCardProps.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {LittleCardProps.description}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Link to={"/comments"}>
          <Button size="small" color="primary">
            Commentaires
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
