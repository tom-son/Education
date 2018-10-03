import React from 'react';
import classes from './courseCards.css';
import CourseCard from './courseCard/courseCard';

const courseCards = props => {

    const cards = props.courses.map(course => {
        return <CourseCard 
            key={course.topic} 
            topic={course.topic} 
            description={course.description} 
            src={course.src}
            courseQuantity={course.courseQuantity}
            courseLength={course.courseLength}
            clickHandler={props.clickHandler}/>
    });


    return (
        <div className={classes.cards}>
            {cards}
        </div>
        
    );
};

export default courseCards;