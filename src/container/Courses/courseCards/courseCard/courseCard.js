import React from 'react';
import classes from './courseCard.css';

import { withRouter, Link } from 'react-router-dom';

const courseCard = props => {
    
    const cardPath = encodeURI(props.topic);
    return (
        <Link 
            to={`${props.location.pathname}/${cardPath}`}
            className={classes.card}>
            
            <img className={classes.courseImg} alt="Course" src={props.src}/>
            <div className={classes.courseInner}>
                <h3>{props.topic}</h3>
                <p>{props.description}</p>
                <div className={classes.courseReview}>
                    <img alt="Course Videos" src={require('../../../../assets/icons/video-vintage.svg')} />
                    <span style={{paddingLeft: "5px"}}>{props.courseQuantity}</span>
                    <img style={{paddingLeft: "15px"}} alt="Course Time" src={require('../../../../assets/icons/timelapse.svg')} />
                    <span style={{paddingLeft: "5px"}}>{props.courseLength}</span>
                </div>
            </div>    
        </Link>
        
    );
};

export default withRouter(courseCard);