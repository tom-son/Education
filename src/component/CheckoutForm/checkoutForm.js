import React from 'react';
import classes from './checkoutForm.css';
import CheckoutInput from './checkoutInput/checkoutInput';

const checkoutForm = props => {

    // console.log(props.form);
    const checkoutForm = [];

    for (let input in props.form) {
        const form = props.form;
        checkoutForm.push( 
            <div 
                key={input} 
                className={classes.input}>
                <CheckoutInput 
                    id={input} 
                    label={form[input].name} 
                    type={form[input].type}
                    value={form[input].value}
                    valueHandler={props.valueHandler}
                    wasTouched={form[input].wasTouched}
                    isValid={form[input].isValid}
                    errorMessage={form[input].errorMessage}
                    length={form[input].validationRules.length} />
            </div>
        );
            
    }


    return (
            <form className={classes.form}>

                {checkoutForm}
                
                <button onClick={props.formOnClick}>Complete payment</button>
            </form>

        
    );
};

export default checkoutForm;