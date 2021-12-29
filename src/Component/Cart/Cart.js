import React from "react";
import "./Cart.css";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Cart = (props) => {
  // const cart = props.cart;

  return (
    <Container>
      <Grid xs={12} sm={6}>
        <Card>
          <CardMedia image="https://avatars.githubusercontent.com/u/24898559?v=4" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
              distinctio!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              tempore!
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              -
            </Button>
            <Button variant="outlined" size="small">
              +
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default Cart;
