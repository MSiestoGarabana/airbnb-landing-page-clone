import React from "react";
import locationsList from "./LocationsList";
function LocationsCard({ state }) {
  let data = locationsList[state].data;
  return (
    <div className="futurasEscapadas__locationCard">
      {data.map((location) => (
        <div
          className="futurasEscapadas__locationCard-Container"
          key={location.city}
        >
          <p className="futurasEscapadas__locationCard-Container--city">
            {location.city}
          </p>
          <p className="futurasEscapadas__locationCard-Container--country">
            {location.country}
          </p>
        </div>
      ))}
    </div>
  );
}
export default LocationsCard;
