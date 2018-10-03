import React from 'react';
import { Link } from 'react-router-dom';
import classes from './courseInfo.css';
const courseInfo = props => {
    
    return (
        <div>
            <div style={{height: "80vh", margin: "auto", display: "flex", justifyContent: "center"}}>
                <div className={classes.landing}><div className={classes.overlay}></div></div>
                <div className={classes.landingInfo}>
                    <h1>Physics</h1>
                    <p>The ultimate video guide to help you learn, practice and revise the Physics course.</p>
                    <Link to={`/checkout/${props.match.params.courseName}`}><span className={classes.link}>Enroll Now</span></Link>
                </div>
            </div>
            
            <div className={classes.infoContainer}>
                <div className={classes.courseIntro}>
                    <h2 style={{margin: "0px", color: "#484848"}}>What you'll learn in</h2>
                    <h1 style={{margin: "0px", color: "#484848"}}>Physics</h1>
                    <p>We’ll simplify the content for you and show you exactly the physics you'll need to be able to explain, calculate or evaluate in your HSC exam.</p>
                    
                </div>
            </div>
                
        </div>
            

    );
};

export default courseInfo;