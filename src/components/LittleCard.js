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

const LittleCardProps = {
  title: "",
  description: "",
  img: "",
  slug: "",
};

export default function LittleCard(LittleCardProps) {
  const classes = useStyles();

  return (
    
      <Card className={classes.root}>
        <CardActionArea>
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
        </CardActionArea>
        <CardActions>
          <Link to={"/blog/" + LittleCardProps.slug}>
            <Button size="small" color="primary">
             Learn more
            </Button>
          </Link>
        </CardActions>
      </Card>
   
  );
}
