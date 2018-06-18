import React from 'react';
import Nav from ('/components/Nav');
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const App = () => (
  <div>
    <Nav />
    <Router>
      <Switch>
        <Route path="/" component={home} />
        <Route path="/saved" component={saved} />
        <Route component={home} />
      </Switch>
    </Router>
  </div>
);

const home = () => {
  <div>
    <Nav />

  </div>
}

const saved = () => {
  <div>
    <Nav />
    
  </div>
}

export default App;


