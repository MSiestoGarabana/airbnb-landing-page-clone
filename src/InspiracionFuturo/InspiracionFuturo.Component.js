import React from "react";
import Button from "../Button/Button.Component";
import clsx from "clsx";

import LocationsCard from "./LocationsCard";
import "./InspiracionFuturo.Component.css";

function InspiraciónFuturo({ className }) {
  const [state, setState] = React.useState(0);

  return (
    <div className={clsx(className, "futurasEscapadasComponent")}>
      <p className="futurasEscapadasComponent__header">
        Inpiración para futuras escapadas
      </p>
      <div>
        <div className="futurasEscapadasComponent__navBar">
          <Button
            className="futurasEscapadas__navBarButton"
            onClick={() => setState(0)}
          >
            Vacaciones en la ciudad
          </Button>

          <Button
            className="futurasEscapadas__navBarButton"
            onClick={() => setState(1)}
          >
            Vacaciones en la playa
          </Button>

          <Button
            className="futurasEscapadas__navBarButton"
            onClick={() => setState(2)}
          >
            Vacaciones con historia
          </Button>

          <Button
            className="futurasEscapadas__navBarButton"
            onClick={() => setState(3)}
          >
            Vacaciones en una isla
          </Button>

          <Button
            className="futurasEscapadas__navBarButton"
            onClick={() => setState(4)}
          >
            Vacaciones en la montaña
          </Button>

          <Button
            className="futurasEscapadas__navBarButton"
            onClick={() => setState(5)}
          >
            Otros destinos populares
          </Button>
        </div>
        <LocationsCard state={state}></LocationsCard>
      </div>
    </div>
  );
}
export default InspiraciónFuturo;
