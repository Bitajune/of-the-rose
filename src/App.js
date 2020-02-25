import React from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Map from "./components/Map";
import MeetUp from "./components/MeetUp";
import Reminder from "./components/Reminder";
import Chat from "./components/Chat";
import Todo from "./components/Todo";

import "./App.css";

function App() {
  return (
    <div>
      <Home />
      <Login />
      <Signup />
      <Map />
      <MeetUp />
      <Reminder />
      <Chat />
      <Todo />
    </div>
  );
}

export default App;
