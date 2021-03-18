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
  },
});

export default function BigCard(BigCardProps) {
  const classes = useStyles();


  function formatContent() {
    const text = (BigCardProps.content)
    return (
      <Typography component={'span'} dangerouslySetInnerHTML={{ __html: text}}>
      </Typography>
    );
     
}


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia image={BigCardProps.img} title="no-img" component="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {BigCardProps.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {formatContent()}
          </Typography>
        </CardContent>
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
