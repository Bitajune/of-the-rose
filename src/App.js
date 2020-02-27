import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { routes } from "./const/routes";

// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Map from "./components/Map";
// import MeetUp from "./components/MeetUp";
// import Chat from "./components/Chat";
// import Todo from "./components/Todo";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar routes={routes} />
        <Switch>
          <Route exact path="/" render={() => <div>Root</div>} />
          {routes.map(route => (
            <Route exact path={`/${route}`} render={() => <div>{route}</div>} />
          ))}
        </Switch>
        hello
      </div>
    </Router>
  );
}

export default App;
