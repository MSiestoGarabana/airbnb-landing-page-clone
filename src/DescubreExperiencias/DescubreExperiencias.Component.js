import React from "react";
import DescubreExperienciasCard from "./DescubreExperiencias.Card.Component";
import clsx from "clsx";
import "./DescubreExperiencias.Component.css";

function DescubreExperiencias({ className }) {
  return (
    <div className={clsx(className, "component__descubreExperiencias")}>
      <p>Descubre las experiencias en Airbnb</p>
      <div className="card__container--descubreExperiencias">
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
