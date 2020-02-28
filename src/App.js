import React from "react";
import { Route, Switch } from "react-router-dom";
import firebase from "./components/Firebase/firebase";

import "./App.css";
import NavBar from "./components/NavBar";
import { routes } from "./const/routes";

import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Map from "./components/Map";
import MeetUp from "./components/MeetUp";
import Chat from "./components/Chat";
import Todo from "./components/Todo";
import PasswordForm from "./components/PasswordForget";

function App() {
  const user = firebase.auth.currentUser;
  console.log(user);
  return (
    <div className="App">
      <NavBar routes={routes} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/meetup" component={MeetUp} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exaxt path="/password-forget" component={PasswordForm} />
      </Switch>
    </div>
  );
}

export default App;
