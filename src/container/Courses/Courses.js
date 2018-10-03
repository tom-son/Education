import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import classes from './Courses.css';
import CourseCards from './courseCards/courseCards';
import Aux from '../../hoc/Aux/aux';
import CourseInfo from './courseInfo/courseInfo';
import coursesJSON from '../../assets/dummyJSON/courses';

class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: coursesJSON
        }
    };


    cardClickHandler = () => {
        console.log("card clicked!");
    }

    render() {
        let courses = null;
        if(this.props.location.pathname === '/courses'){
            courses = (
                <div className={classes.courses}>
                    <h1>Courses</h1>
                    <p className={classes.borderBottom}>Our lessons are built to be simple, fun and easy to watch. With clear graphics and dynamic presenters, we work hard to deliver amazing experiences. Our lessons include heaps of tips and tricks from our team of expert teachers to make sure student responses are in line with examiner’s expectations.</p>
                    <h3>Intensive Courses</h3>
                    <p>Each Codecademy program is designed to upgrade your skills through a rigorous curriculum with personalized support. Level up today!</p>
                    <CourseCards courses={this.state.courses} clickHandler={this.cardClickHandler}/>
                </div>
            );
        }
        
        return (
            <Aux>
                <Switch>
                    <Route exact path="/courses" render={()=>courses} />
                    <Route path="/courses/:courseName" component={CourseInfo} />
                </Switch>
            </Aux>
            
        );
    }
}

export default Courses;