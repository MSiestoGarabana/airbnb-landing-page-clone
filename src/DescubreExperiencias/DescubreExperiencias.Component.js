import React from "react";
import DescubreExperienciasCard from "./DescubreExperiencias.Card.Component";
import clsx from "clsx";
import "./DescubreExperiencias.Component.css";

function DescubreExperiencias({ className }) {
  return (
    <div className={clsx(className, "descubreExperienciasComponent")}>
      <p>Descubre las experiencias en Airbnb</p>
      <div className="descubreExperienciasCardComponent">
        <DescubreExperienciasCard id="leftCard" buttonText="Experiencias">
          Actividades para tu viaje
        </DescubreExperienciasCard>
        <DescubreExperienciasCard
          id="rigthCard"
          buttonText="Experiencias Online"
        >
          Actividades desde casa
        </DescubreExperienciasCard>
      </div>
    </div>
  );
}
export default DescubreExperiencias;
