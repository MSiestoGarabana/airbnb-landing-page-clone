import { React } from "react";
import clsx from "clsx";
import NavComponent from "./Header.Nav.Component";
import InputComponent from "./Header.Input.Component";

import "./Header.Component.css";

function Header({ className }) {
  return (
    <div className={clsx(className, "container__header")}>
      <NavComponent className="header__navComponent" />
      <div className="container__input">
        <InputComponent className="header__inputComponent" />
      </div>
    </div>
  );
}
export default Header;
