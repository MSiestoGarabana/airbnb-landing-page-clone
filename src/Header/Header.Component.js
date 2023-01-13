import { React } from "react";

import NavComponent from "./Header.Nav.Component";
import InputComponent from "./Header.Input.Component";

import "./Header.Component.css";

function Header() {
  return (
    <div className="header__container">
      <NavComponent className="header__navComponent" />
      <div className="container__input">
        <InputComponent className="header__inputComponent" />
      </div>
    </div>
  );
}
export default Header;
