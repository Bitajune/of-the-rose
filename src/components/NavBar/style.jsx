import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  background-color: rgb(233, 183, 182);
  border-bottom: 2px solid rgb(244, 61, 67);
`;

export const NavRow = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  max-height: 150px;
`;
export const NavLeft = styled.div`
  font-family: "Poiret One";
  font-size: 20px;
  width: 33.333%;
`;
export const NavMiddle = styled.div`
  font-family: "Abril Fatface";
  color: rgb(244, 61, 67);
  font-size: 60px;
  width: 33.333%;
  @media (max-width: 950px) {
    p.title {
      font-size: 30px;
    }
  }
`;
export const NavRight = styled.div`
  font-family: "Poiret One";
  font-size: 20px;
  width: 33.333%;
  @media (max-width: 950px) {
    a {
      display: none;
    }
  }
`;
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: black;
  &:hover {
    color: rgb(214, 247, 243);
  }
  &.active {
    border-bottom: 2px solid rgb(244, 61, 67);
  }
  .show > &.active {
    border-bottom: none;
    color: rgb(214, 247, 243);
  }
`;

export const HamburgerContainer = styled.div`
  width: 60px;
  height: 25px;
  position: relative;
  display: none;
  margin-left: auto;
  cursor: pointer;
  @media (max-width: 950px) {
    display: block;
  }
`;
export const HamburgerBar = styled.div`
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: black;
  left: 0;
  /* transform: rotate(0deg); */
  transition: all 0.5s ease-in-out;
  &:nth-child(1) {
    top: 0px;
  }
  &:nth-child(2) {
    top: 6px;
  }
  &:last-child {
    top: 12px;
  }
  .open > & {
    transition: all 1s ease-in-out;
  }
  .open > &:first-child {
    top: 45%;
    transform: rotate(135deg);
    transition: all 0.5s ease-in-out;
  }
  .open > &:nth-child(2) {
    opacity: 0;
    left: -60px;
    transition: all 0.5s ease-in-out;
  }
  .open > &:nth-child(3) {
    transform: rotate(-135deg);
    transition: all 0.5s ease-in-out;
  }
`;
export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  left: -120rem;
  transition: left 0.75s ease-in-out;
  display: flex;
  flex-direction: column;
  &.show {
    left: 0;
  }
  & > a {
    color: white;
  }
`;
