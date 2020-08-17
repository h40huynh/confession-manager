import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Home from "./components/Home/Home";

import Authentication from "./components/Authentication/Authentication";
import Manager from "./components/Manager/Manager";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Authentication" component={Authentication} />
        <Route path="/Manager" component={Manager} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
