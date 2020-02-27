import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

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
    <Router>
      <NavContainer className="nav" color={"rosybrown"}>
        <NavRow>
          <NavLeft>
            <Link exact to={`/home`}>
              <img
                className="nav-img"
                src="https://i.imgur.com/X40XEjH.png"
              ></img>
            </Link>
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
    </Router>
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

export default NavBar;
