import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import NavBar from "./components/NavBar";

import Home from "./components/Home";

import Authentication from "./components/Authentication";
import Confession from "./components/Confession";
import Copytofacebook from "./components/Copytofacebook";

import { PrivateRoute } from "./components/PrivateRoute";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Authentication" component={Authentication} />
          <PrivateRoute path="/Confession" component={Confession} />
          <PrivateRoute path="/Copytofacebook" component={Copytofacebook} />
        </Switch>
      </React.Fragment>
    </Provider>
  );
};

export default App;
