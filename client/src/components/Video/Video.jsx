import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Video.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
        <div
          // component="video"
          // height="180"
        >
          <video width="330" height="180" controls poster="https://387b72ivq1z3mni0n261y7l1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/app-store-video.jpg">
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
          </video>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Artist Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Winner of the FootLoose Contest.
          </Typography>
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
