import React from "react";
import { Route, Switch } from "react-router-dom";
import firebase from "./components/Firebase/firebase";
import { routes } from "./const/routes";

import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PasswordForm from "./components/PasswordForget";
import Home from "./components/Home";
import Bloom from "./components/Bloom";
import Events from "./components/Events";
import Drink from "./components/Drink";

import "./App.css";

function App() {
  const user = firebase.auth.currentUser;
  console.log(user);
  return (
    <div className="App">
      <NavBar routes={routes} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/bloom" component={Bloom} />
        <Route exact path="/drink" component={Drink} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exaxt path="/password-forget" component={PasswordForm} />
      </Switch>
    </div>
  );
}

export default App;
