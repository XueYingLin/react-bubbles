import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
// import ColorList from './components/ColorList';
import "./styles.scss";
import BubblePage from "./components/BubblePage";


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Route exact path="/" component={Login} /> */}
        <section className="link">
          <Link to="/login">Login</Link>
          <br />
          <Link to="/protected">Protected Page</Link>
        </section>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <PrivateRoute exact path="/protected" component={BubblePage} />
          <Route path="login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
