import React from 'react';

import styles from './navBurger.css';

const navBurger = props => {
    return (
        <div
            className={styles.navBurger}
            onClick={props.sideNavToggle} >

            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
    );
}

export default navBurger;