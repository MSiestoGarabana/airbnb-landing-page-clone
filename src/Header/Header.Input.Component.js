import React from "react";
import "./Header.Input.Component.css";
import searchIcon from "../Logos/searchIcon__header.png";

import "../fonts/fonts.css";

function HeaderInputTemplate(props) {
  return (
    <div
      className="header__search--column"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
      }}
    >
      <button
        style={{ fontFamily: "medium" }}
        className="search__column--input"
      >
        {props.upButton}
      </button>
      <input
        style={{ fontFamily: "light" }}
        className="search__input"
        type="text"
        placeholder={props.inputText}
      ></input>
    </div>
  );
}
function InputComponent() {
  return (
    <div className="header__search">
      <HeaderInputTemplate
        upButton="Destino"
        inputText="¿Adónde quieres viajar?"
      />
      <HeaderInputTemplate upButton="Llegada" inputText="¿Cuándo?" />
      <HeaderInputTemplate upButton="Salida" inputText="¿Cuándo?" />
      <HeaderInputTemplate upButton="Viajeros" inputText="¿Cuántos?" />
      <button className="searchButton">
        <img className="searchImg" alt="img" src={searchIcon}></img>
      </button>
    </div>
  );
}
export default InputComponent;
