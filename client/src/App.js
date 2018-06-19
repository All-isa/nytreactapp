import React from 'react';
import Nav from './components/Nav';
import './App.css';
import Articles from './pages/article';
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
      {/* <Switch>
        <Route exact path="/" component={Saved} />
        <Route exact path="/articles" component={Saved} />
        <Route exact path="/articles/:id" component={Saved} />
        <Route exact path="/nyt" component={Results} />
        <Route exact path="/nyt/:query" component={Results} />
      </Switch> */}
    </Router>
  </div>
);

export default App;


