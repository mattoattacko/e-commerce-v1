import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleEmptyCart, handleUpdateCartQty, handleRemoveFromCart }) => {
  /* so if our cart's array of items is anything other than 0, it will return false */

  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">No Items in Cart
      <Link to='/' className={classes.link}>Let's Add Something</Link>!
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {/* For each item we want to show a grid */}
        {cart.line_items.map((item) => (
          <Grid item xs={12} s={4} m={2} key={item.id}>
            {/* We are looping through all the items, and for each one we are passing data for that specific item */}
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty Cart</Button>
          <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout!</Button>

        </div>
      </div>
    </>
  );

  if(!cart.line_items) return 'Loading...';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h3' gutterBottom>Shopping Cart</Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart;
