import React from 'react';
import classes from './checkoutInput.css';

const checkoutInput = props => {

    const inputStyles = `${classes.input} ${props.wasTouched && props.isValid === false ? classes.red : null}`;
    const errorTextStyles = `${classes.errorMessage} ${props.isValid === false && props.wasTouched ? classes.error : null} ${!props.isValid && props.wasTouched ? null : classes.hide}`;

    let input = null;
    switch(props.type) {
        case "text":
            input = <input className={inputStyles} id={props.id} type="text" value={props.value} onChange={props.valueHandler} /> ;
            break;
        case "number":
        
            input = <input className={inputStyles} id={props.id} maxLength={props.length} type="number" value={props.value} onChange={props.valueHandler} /> ;
            break;
        case "expiry":
            input = (
                <div>
                    <input className={inputStyles} id="month" name={props.id} maxLength="2" placeholder="MM" value={props.value.month} onChange={props.valueHandler} style={{width: "50px"}} type="number" /> / <input id="year" className={inputStyles} name={props.id} maxLength={props.length} placeholder="YY" value={props.value.year} onChange={props.valueHandler} style={{width: "50px"}} type="number" />
                </div>
            );
            break;
        default:
            console.warn("checkoutInput.js props.type no match in switch statement");
            break;
    }

   

    return(
        <div className={classes.inputWrapper}>
            <label htmlFor={props.id} >{props.label}</label>
            {input}
            <p className={errorTextStyles}>{props.errorMessage}</p>
        </div>
        
    );
};

export default checkoutInput;