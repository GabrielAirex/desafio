import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardProduct(props) {

  function onclick(){
    console.log("clicado")
    props.add(props.product)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.product['image_product']}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product['title_product']}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.product.describe_product}
        </Typography>
      </CardContent>
      <CardActions className='justify-between	'>
        <Button  size="large" variant="outlined" >{props.product['price_product']} $</Button>
        <Button variant="contained" size="large" onClick={onclick}>Adicionar ao carrinho</Button>
      </CardActions>
    </Card>
  );
}