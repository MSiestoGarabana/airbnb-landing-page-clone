import React from "react";
import Button from "../Button/Button.Component";
import clsx from "clsx";
import locationsList from "./LocationsList.js";
import LocationsCard from "./LocationsCard";
import "./InspiracionFuturo.Component.css";

function InspiraciónFuturo({ className }) {
  const [state, setState] = React.useState(0);
  let data = locationsList[state].data;

  return (
    <div className={clsx(className, "inspiracionFuturasEscapadas__container")}>
      <p className="InspiraciónFuturasEscapadas__header">
        Inpiración para futuras escapadas
      </p>
      <div>
        <div className="InspiraciónFuturasEscapadas__buttons--container">
          <Button
            className="InspiraciónFuturo__buttons--button"
            onClick={() => setState(0)}
          >
            Vacaciones en la ciudad
          </Button>

          <Button
            className="InspiraciónFuturo__buttons--button"
            onClick={() => setState(1)}
          >
            Vacaciones en la playa
          </Button>

          <Button
            className="InspiraciónFuturo__buttons--button"
            onClick={() => setState(2)}
          >
            Vacaciones con historia
          </Button>

          <Button
            className="InspiraciónFuturo__buttons--button"
            onClick={() => setState(3)}
          >
            Vacaciones en una isla
          </Button>

          <Button
            className="InspiraciónFuturo__buttons--button"
            onClick={() => setState(4)}
          >
            Vacaciones en la montaña
          </Button>

          <Button
            className="InspiraciónFuturo__buttons--button"
            onClick={() => setState(5)}
          >
            Otros destinos populares
          </Button>
        </div>
        <LocationsCard data={data} className="component"></LocationsCard>
      </div>
    </div>
  );
}
export default InspiraciónFuturo;
