import React, { Component } from 'react'
import classes from './Checkout.css';
import CheckoutForm from '../../component/CheckoutForm/checkoutForm';

class Cart extends Component {

    state = {
        minimiseCart: false
    }

    showCartToggle = () => {
        this.setState({
            minimiseCart: !this.state.minimiseCart
        });

        console.log(this.state.minimiseCart);
    }

    render() {

        const cartStyles = `${classes.cart} ${this.state.minimiseCart ? classes.minimise: null}`;
        const formStyles = `${classes.form} ${this.state.minimiseCart ? null : classes.hidden}`;

        return (
            <div className={classes.checkoutContainer}>
                <div className={cartStyles}>
                    <div className={classes.cartWrapper}>
                        <h1>Physics</h1>
                        <ul>
                            <li>Thoughtful, clear and concise explanations of the concepts and practical experiments in the course</li>
                            <li>Taught with the perfect mix of theory and practical exam application</li>
                            <li>Learn how questions will likely be asked and the depth of knowledge required</li>
                        </ul>

                        Course Price: $99
                        Course Total: $99
                        <button className={classes.paymentButton} onClick={this.showCartToggle}>Continue to payment</button>
                    </div>
                    
                </div>
                <div className={formStyles}>
                    <CheckoutForm />
                </div>
            </div>
        );
    }
}

export default Cart;