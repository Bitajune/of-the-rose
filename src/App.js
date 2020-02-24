import React from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import Chat from "./components/Chat";

import "./App.css";

function App() {
  return (
    <div>
      <Home />
      <Login />
      <Signup />
      <Todo />
      <Chat />
    </div>
  );
}

export default App;
