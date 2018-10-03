import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Courses from './container/Courses/Courses';
import Checkout from './container/Checkout/Checkout';
import './assets/css/fonts.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/courses' component={Courses} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
          
        </Layout>
      </BrowserRouter>
      
    );
  }
}

export default App;
