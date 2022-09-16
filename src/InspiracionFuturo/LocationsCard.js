import React from "react";
function LocationsCard({ data, className }) {
  return (
    <div className="locationCard__Container">
      {data.map((location) => (
        <div className="cityCountry__Container" key={location.city}>
          <p className="city">{location.city}</p>
          <p className="country">{location.country}</p>
        </div>
      ))}
    </div>
  );
}
export default LocationsCard;
