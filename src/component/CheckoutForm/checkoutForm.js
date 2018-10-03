import React from 'react';
import classes from './checkoutForm.css';
import CheckoutInput from './checkoutInput/checkoutInput';

const checkoutForm = props => {
    return (
        <form classes={classes.form}>
            <CheckoutInput label="First Name" type="input" />
            <CheckoutInput label="Last Name" type="input" />
            <label>Last Name</label>
            <input type="text"/>
        </form>
    );
};

export default checkoutForm;