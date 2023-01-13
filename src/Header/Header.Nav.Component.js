import Headerbutton from "./HeaderButton.Component";
import headerLogo from "../Logos/header__logo.png";
import worldIcon from "../Logos/worldIcon__header.png";
import userIcon from "../Logos/userIcon__header.png";
import menuIcon from "../Logos/menuIcon__header.png";
import getClassName from "./getClassName.js";
import React from "react";

function NavComponent() {
  //"header__nav" : "header__nav--down"
  //"header__nav--logo : header__nav--logoDown"
  //"header__nav--midbuttonsContainer : header__nac--midbuttonsContainerDown"
  //"header__nav--rigthbuttonsContainer : header__nav--rigthbuttonsContainerDown"
  return (
    <div className={getClassName("nav")}>
      <img
        src={headerLogo}
        alt="airbnb-Logo"
        className={getClassName("logo")}
      ></img>
      <div className={getClassName("midButtons")}>
        <Headerbutton
          content="Alojamientos"
          className="nav-component__button--middle"
        />
        <Headerbutton
          content="Experiencias"
          className="nav-component__button--middle"
        />
        <Headerbutton
          content="Experiencias Online"
          className="nav-component__button--middle"
        />
      </div>
      <div className={getClassName("rigthButtons")}>
        <Headerbutton
          content="Hazte anfitrión"
          className="nav-component__button--rigth"
        />
        <button className="nav-component__worldButton">
          <img
            className="nav-component__worldButton--img"
            src={worldIcon}
            alt="img"
          />
        </button>
        <button className="nav-component__hamburguer">
          <img
            className="nav-component__hamburguer--menuIcon"
            alt="img"
            src={menuIcon}
          />
          <img
            className="nav-component__hamburguer--userIcon"
            alt="img"
            src={userIcon}
          />
        </button>
      </div>
    </div>
  );
}
export default NavComponent;
