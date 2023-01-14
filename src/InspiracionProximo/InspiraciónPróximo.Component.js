import React from "react";
import InspiraciónCard from "./InspiraciónPróximo.Card.Component";
import clsx from "clsx";
import "./InspiraciónPróximo.Component.css";

function ProximosViajes({ className }) {
  return (
    <div className={clsx(className)}>
      <div className="header__proximosViajes">
        <h1>Inpiración para tu próximo viaje</h1>
      </div>

      <div className="card__container--inspiracionCard">
        <InspiraciónCard
          className="Card__Madrid"
          title="Madrid"
          subtitle="A 415 kilómetros"
        />
        <InspiraciónCard
          className="Card__NewYork"
          title="NewYork"
          subtitle="A 341 kilómetros"
        />
        <InspiraciónCard
          className="Card__Paris"
          title="Paris"
          subtitle="A 463 kilómetros"
        />
        <InspiraciónCard
          className="Card__Boston"
          title="Boston"
          subtitle="A 466 kilómetros"
        />
      </div>
    </div>
  );
}
export default ProximosViajes;
