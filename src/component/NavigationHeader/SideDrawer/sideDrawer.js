import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sideDrawer.css';

const sideDrawer = props => {
    return(
        <div className={styles.sideDrawer}>
            <img
                style={{cursor: "pointer"}}
                alt="close"
                src="https://www.elevennewyork.com/wp-content/themes/eleven/img/close.png"
                onClick={props.sideNavToggle} />
            <Link to="/courses">Courses</Link>
        </div>
    );
}

export default sideDrawer;