import React from "react";
import clsx from "clsx";
import backgroundImage from "../Images/IMGTarjetaActualizacion.jpg";
import "./TarjetaActualización.Component.css";

function TarjetaActualización({ className }) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={clsx(className, "component__tarjetaActualizacion")}
    >
      <div className="tarjetaActualizacion__textcontainer">
        <p className="tarjetaActualizacion__text--1">
          Los viajes están a punto de reinventarse
        </p>
        <p className="tarjetaActualizacion__text--2">
          Descubre todas las novedades el 11 de mayo a las 9:00 EDT (15:00 en
          España)
        </p>
      </div>
    </div>
  );
}
export default TarjetaActualización;
