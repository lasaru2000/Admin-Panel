import "./PhotoList.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import foodImg1 from "../../../src/2.jpg";
import foodImg2 from "../../../src/3.jpg";
import foodImg3 from "../../../src/4.jpg";
import foodImg4 from "../../../src/1.jpg";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function photoList() {
  return (
    <div className="card" >
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {foodImg1}
          alt="burger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Burger
          </Typography>
          <h1>$23</h1>
          <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={foodImg2}
          alt="Parta"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Parata
          </Typography>
          <h1>$18</h1>
          <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={foodImg3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Dhal Curry
          </Typography>
          <h1>$20</h1>
          <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
          Dhal curry recipe is an authentic Sri Lankan recipe and can be cooked under 30 minutes.

Also known as “parippu” in Sinhalese
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {foodImg4}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            French Fries
          </Typography>
          <h1>$23</h1>
          <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
          French fries, chips, finger chips, French-fried potatoes, or simply fries are batonnet or allumette-cut deep-fried potatoes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    
  )
}
