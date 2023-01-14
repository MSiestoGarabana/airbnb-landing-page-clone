import React from "react";
import Button from "../Button/Button.Component";
import clsx from "clsx";
import "./TarjetaRegalo.Component.css";
import backgroundImage from "../Images/IMGTarjetaRegalo.jpg";

function TarjetaRegalo({ className }) {
  return (
    <div
      className={clsx(className, "tarjetaRegalo__component")}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "rigth",
      }}
    >
      <div className="tarjetaRegalo__Textcontainer">
        <p>Compra tarjetas regalo en Airbnb</p>
        <Button className="tarjetaRegalo__button">Más Información</Button>
      </div>
    </div>
  );
}
export default TarjetaRegalo;
