import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class MapView extends Component {
  render() {
    return (
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="600"
            image="https://via.placeholder.com/900x700.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              PLACEHOLDER
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default MapView;
