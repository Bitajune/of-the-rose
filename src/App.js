import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import firebase from "./components/Firebase/firebase";
import { loggedOut, loggedIn } from "./const/routes";

import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PasswordForm from "./components/PasswordForget";
import Home from "./components/Home";
import Bloom from "./components/Bloom";
import Events from "./components/Events";
import Drink from "./components/Drink";

import "./App.css";

class App extends Component {
  state = {
    currentUser: {},
    isLoggedIn: false
  };

  doSetCurrentUser = currentUser => {
    console.log(currentUser, "current user");
    this.setState({
      currentUser,
      isLoggedIn: true
    });
  };

  render() {
    const { isLoggedIn, currentUser } = this.state;
    return (
      <div>
        <NavBar
          isLoggedIn={isLoggedIn}
          loggedIn={loggedIn}
          loggedOut={loggedOut}
          currentUser={currentUser}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/login"
            render={() => <Login doSetCurrentUser={this.doSetCurrentUser} />}
          />
          <Route
            exact
            path="/signup"
            render={() => <Signup doSetCurrentUser={this.doSetCurrentUser} />}
          />
          <Route exaxt path="/password-forget" component={PasswordForm} />
          <Route exact path="/bloom" component={Bloom} />
          <Route exact path="/drink" component={Drink} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </div>
    );
  }
}

export default App;
