import React, { Component } from 'react'
import classes from './Checkout.css';
import CheckoutForm from '../../component/CheckoutForm/checkoutForm';

class Cart extends Component {

    state = {
        minimiseCart: false,
        form: {
            fname: {
                name: "First Name",
                value: "",
                type: "text",
                wasTouched: false,
                validationRules: {
                    isRequired: true,
                    minLength: 1,
                    maxLength: 15,
                }, 
                errorMessage: "Must be between 1 - 15 letters",
                isValid: false
            },
            lName: {
                name: "Last Name",
                value: "",
                type: "text",
                wasTouched: false,
                validationRules: {
                    isRequired: true,
                    minLength: 1,
                    maxLength: 15,
                }, 
                errorMessage: "Must be between 1 - 15 letters",
                isValid: false
            },
            creditNum: {
                name: "Credit Card Number",
                value: "",
                type: "number",
                wasTouched: false,
                validationRules: {
                    isRequired: true,
                    length: 15
                }, 
                errorMessage: "Must be 15 numbers",
                isValid: false
            },
            // NOTE: !!!
            // how to easily allow validHandler to validate expiry?
            // as for now to test submit form isValid will be set to true
            expiry: {
                name: "Expiry",
                value: {
                    month: "",
                    year: ""
                },
                type: "expiry",
                wasTouched: false,
                validationRules: {
                    isRequired: true,
                    length: 2
                }, 
                errorMessage: "Must have 2 numbers each",
                isValid: true
            },
            ccv: {
                name: "CCV/Security Code",
                value: "",
                type: "number",
                wasTouched: false,
                validationRules: {
                    isRequired: true, 
                    length: 3
                }, 
                errorMessage: "Must have 3 numbers",
                isValid: false
            },
            school: {
                name: "School",
                value: "",
                type: "text",
                wasTouched: false,
                validationRules: {
                }, 
                errorMessage: "Error",
                isValid: false
            },
            postcode: {
                name: "Postcode",
                value: "",
                type: "number",
                wasTouched: false,
                validationRules: {
                    isRequired: true,
                    length: 4
                }, 
                errorMessage: "Must contain 4 numbers",
                isValid: false
            }
        }
    }

    showCartToggle = () => {
        this.setState({
            minimiseCart: !this.state.minimiseCart
        });

        console.log(this.state.minimiseCart);
    }

    valueHandler = ({target: {id, name, value}}) => {
        const form = this.state.form;
        switch(name) {
            case "expiry":
                this.setState({
                    form: {
                        ...form,
                        [name]: {
                            ...form[name],
                            value: {
                                ...form[name].value,
                                [id]: value,
                                wasTouched: true,
                                isValid: this.validate(value, form[name].validationRules)
                            }
                        }
                    }
                });
                break;
            default:
                this.setState({
                    form: {
                        ...form,
                        [id]: {
                            ...form[id],
                            value: value,
                            wasTouched: true,
                            isValid: this.validate(value, form[id].validationRules)
                        }
                    }
                });
                break;
        }

        console.log(this.state.form, value);

    }

    validate = (value, rules) => {
        if(rules.minLength && value.length < rules.minLength) {
            return false;
        }
        if(rules.maxLength && value.length > rules.maxLength) {
            return false;
        }
        if(rules.length && value.length !== rules.length) {
            return false;
        }
        return true;
    }

    checkFormValidity = () => {
        let isFormValid = true;
        for(let inputElement in this.state.form) {
            const form = this.state.form;
            
            if(!form[inputElement].isValid) {
                isFormValid = false;
                break;
            }
        }

        return isFormValid;
    }

    formOnClick = (e) => {
        e.preventDefault();
        const isFormValid = this.checkFormValidity();
        console.log(this.state.form);
        console.log(isFormValid);
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
                    <CheckoutForm form={this.state.form} valueHandler={this.valueHandler} formOnClick={this.formOnClick}/>
                </div>
            </div>
        );
    }
}

export default Cart;