import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigationHeader.css';
import NavBurger from './NavBurger/navBurger';


const header = (props) => { 
    return (
        <div className={styles.header}>
            <img className={styles.navLogo} alt="atomi logo" src="https://getatomi.com/img/icons/svg/hsc-atomi-website.svg"/>
            
            <nav className={styles.nav}>
                <Link to="/courses">Courses</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/signin">Sign in</Link>
                
            </nav>

            <NavBurger sideNavToggle={props.sideNavToggle}/>
        </div>
    );
}

export default header;