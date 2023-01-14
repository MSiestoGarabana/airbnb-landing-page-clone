import React from "react";
import Button from "../Button/Button.Component";
import "./DescubreExperiencias.Card.Component.css";

import backgroundImageLeft from "../Images/IMGExperienciasLeft.jpg";
import backgroundImageRigth from "../Images/IMGExperienciasRigth.jpg";
import "../Button/Button.Component.css";

function DescubreExperienciasCard({ children, ...props }) {
  const backgroundImage =
    props.id === "leftCard" ? backgroundImageLeft : backgroundImageRigth;
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="descubreExperienciasCard"
    >
      <div className="descubreExperienciasCard__textbuttonContainer">
        <p className="descubreExperienciasCard__text">{children}</p>
        <Button className="descubreExperienciasCard__button">
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
}
export default DescubreExperienciasCard;
