import React, { useState } from "react";
import Firebase from "../Firebase/firebase";
import { NavLink } from "react-router-dom";
import { loggedOut, loggedIn } from "../../const/routes";

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

const NavBar = ({ isLoggedIn, doSetCurrentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const logoutUser = async () => {
    try {
      await Firebase.doSignOut();
      doSetCurrentUser({}, false);
    } catch (error) {
      console.log(error);
    }
  };
  window.onresize = () => window.innerWidth > 900 && isOpen && setIsOpen(false);

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
          {isLoggedIn ? (
            <>
              {loggedIn.map(route => (
                <Link exact to={`/${route}`}>
                  {route}
                </Link>
              ))}
              <NavLink
                className="logoutBtn"
                to="/login"
                children="Logout"
                onClick={logoutUser}
                style={{ cursor: "pointer", margin: "0px 10px 0px 10px" }}
              />
            </>
          ) : (
            loggedOut.map(route => (
              <Link exact to={`/${route}`}>
                {route}
              </Link>
            ))
          )}
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </NavRight>
      </NavRow>
      <Overlay className={isOpen ? "show" : "hide"}>
        {loggedOut.map(route => (
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

export default NavBar;
