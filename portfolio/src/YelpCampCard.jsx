import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function YelpCampCard() {
  return (
    <Card sx={{ maxWidth: 300, maxHeight:345, margin: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="../images/YelpCampThumb.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Yelp Camp
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Full-stack web application that allows users to view, create, and review campgrounds. It includes user authentication, campground creation, and comment functionality. 
        </Typography>
      </CardContent>
      <CardActions>
       <a href="https://github.com/luizscheidt/Beakem/tree/master/Beakem3.0">
       <Button size="small">
          Code
        </Button>
       </a>

      <a href="https://yelp-camp-zy97.onrender.com/">
        <Button size="small">Open site</Button>
      </a>
      </CardActions>
    </Card>
  );
}