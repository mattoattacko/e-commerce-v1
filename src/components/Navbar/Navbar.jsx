import React from 'react';
// eslint-disable-next-line
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'; 

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ( {totalItems} ) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
            <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
            Petrolnaut
          </Typography>
          <div className={classes.grow} />
          {/* only if we are currently on the home route should we show the button, if not we don't show anything */}
          {location.pathname ==='/' && (
          <div className={classes.button} >
            <IconButton component={Link} to='/cart' aria-label='Show Cart Items' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div> )}
        </Toolbar>

      </AppBar>
    </>
  )
}

export default Navbar;
