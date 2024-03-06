import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BeakemCard() {
  return (
    <Card sx={{ maxWidth: 300, maxHeight:345, margin: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="../images/Beakem.png"
        title="Beakem"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Beakem
        </Typography>
        <Typography variant="body2" color="text.secondary">
            The plataform where you can register your favorite albums and artists and git them a rating.
        </Typography>
      </CardContent>
      <CardActions>
       <a href="https://github.com/luizscheidt/Yelp-Camp">
       <Button size="small">
          Code
        </Button>
       </a>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}