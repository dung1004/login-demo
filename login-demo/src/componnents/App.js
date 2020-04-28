import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./../style/index.css";
import Login from "./Login";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Button variant="contained" color="default">
          <Link to="/home" style={{ color: "black" }}>
            Home
          </Link>
        </Button>
        <Button variant="contained" color="primary">
          <Link to="/login">Login</Link>
        </Button>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
