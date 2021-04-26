import React, {useState, useEffect} from 'react'
// eslint-disable-next-line
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';


import { commerce } from '../../../lib/commerce';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];

// passing the Cart as a prop to Checkout
const Checkout = ({ cart }) => {
  // eslint-disable-next-line
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const classes = useStyles();

  // as soon as someone starts the checkout process, this creates their checkout token
  useEffect(() => {
    // remember we cant use async in useEffect unless its in a new function
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});

        setCheckoutToken(token);
      } catch (error) {

      }
    }

    generateToken();
  }, [cart]);

  const Confirmation = () => (
    <div>
      Confirmation
    </div>
  ); 

  const Form = () => activeStep === 0 
  ? <AddressForm checkoutToken={checkoutToken} /> 
  : <PaymentForm />

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* this is an if statement, so if we are on the last step */}
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  )
}

export default Checkout;
