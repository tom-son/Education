import React from 'react';
import classes from './checkoutInput.css';

const checkoutInput = props => {

    let input = null;
    switch(props.type) {
        case "input":
            input = <input className={classes.input} type="text" />;
            break;

        default:
            console.log("checkoutInput.js props.type no match in switch statement");
            break;
    }

    return(
        <div>
            <label>{props.label}</label>
            {input}
        </div>
        
    );
};

export default checkoutInput;