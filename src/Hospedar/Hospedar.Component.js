import React from "react";
import Button from "../Button/Button.Component";
import clsx from "clsx";
import backgroundImage from "../Images/IMGDudasHospedar.jpg";
import "./Hospedar.Component.css";

function Hospedar({ className }) {
  return (
    <div
      className={clsx(className, "HospedarComponent")}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="HospedarComponent__textbuttonContainer">
        <p className="hospedar__text">¿Dudas sobre cómo hospedar?</p>
        <Button className="hospedar__button">
          Pregunta a un Super Anfitrión
        </Button>
      </div>
    </div>
  );
}
export default Hospedar;
