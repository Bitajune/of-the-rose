import React, { useState } from "react";
// import { Route } from "react-router-dom";

import {
  NavContainer,
  NavRow,
  NavRight,
  NavMiddle,
  NavLeft,
  Link,
  HamburgerContainer,
  HamburgerBar,
  Overlay
} from "./style";

const NavBar = ({ routes = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  window.onresize = () => window.innerWidth > 900 && isOpen && setIsOpen(false);
  console.log(NavContainer);
  return (
    <NavContainer className="nav" color={"rosybrown"}>
      <NavRow>
        <NavLeft>
          <Link exact to={`/home`}>
            <img
              className="nav-img"
              src="https://i.imgur.com/X40XEjH.png"
              alt=""
            ></img>
          </Link>
          <p>Home</p>
        </NavLeft>
        <NavMiddle>
          <p className="title">Of The Rose</p>
        </NavMiddle>
        <NavRight>
          {routes.map(route => (
            <Link exact to={`/${route}`}>
              {route}
            </Link>
          ))}
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </NavRight>
      </NavRow>
      <Overlay className={isOpen ? "show" : "hide"}>
        {routes.map(route => (
          <Link exact to={`/${route}`}>
            {route}
          </Link>
        ))}
      </Overlay>
    </NavContainer>
  );
};

const Hamburger = ({ setIsOpen, isOpen }) => (
  <HamburgerContainer
    className={isOpen ? "open" : "closed"}
    onClick={() => setIsOpen(!isOpen)}
  >
    <HamburgerBar></HamburgerBar>
    <HamburgerBar></HamburgerBar>
    <HamburgerBar></HamburgerBar>
  </HamburgerContainer>
);

// const LoggedIn = () => <div>LoggedIn</div>;
// const LoggedOut = () => <div>LoggedOut</div>;

export default NavBar;
