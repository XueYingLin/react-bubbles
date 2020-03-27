import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

// Build a PrivateRoute component and use it to protect a route that renders the BubblesPage component
// It checks if the user is authenticated, 
// if they are, it renders the "component" prop. 
// If not, it redirects the user to /login.

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
      {...rest}
      render = { props => 
        localStorage.getItem('token') ? (
            <Component {...props} />
        ) : (
            <Redirect to='/login' />
        )
        }
    />
)

export default PrivateRoute;