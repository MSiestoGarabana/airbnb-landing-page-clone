import React from "react";

import IMGMadrid from "../Images/IMGInspiración__Madrid.jpg";
import IMGNewYork from "../Images/IMGInspiración__NewYork.jpg";
import IMGParis from "../Images/IMGInspiración__Paris.jpg";
import IMGBoston from "../Images/IMGInspiración__Boston.jpg";

import "./InspiraciónPróximo.Component.css";

//titles are "Madrid" "NewYork" "Paris" "Boston"
function getBackgroundImage(title) {
  switch (title) {
    case "Madrid":
      return IMGMadrid;

    case "NewYork":
      return IMGNewYork;

    case "Paris":
      return IMGParis;

    case "Boston":
      return IMGBoston;
    default:
      console.log("no IMG found");
  }
}
function getBackgroundColor(title) {
  switch (title) {
    case "Madrid":
      return "rgb(219, 26, 96)";

    case "NewYork":
      return "rgb(216, 56, 115)";

    case "Paris":
      return "rgb(239, 80, 56)";

    case "Boston":
      return "rgb(213, 44, 146)";
    default:
      console.log(
        "have u removed anything important up in the switch declaration?"
      );
  }
}
function InspiraciónCard(props) {
  const backgroundImage = getBackgroundImage(props.title);
  const backgroundColor = getBackgroundColor(props.title);

  return (
    <button
      className="InspiraciónCard__mainButton"
      style={{
        backgroundColor: { backgroundColor },
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "0cm -7cm",
        backgroundSize: "cover",
      }}
    >
      <div
        className="title__background"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="title__container">
          <p className="title">{props.title}</p>
          <p className="subtitle">{props.subtitle}</p>
        </div>
      </div>
    </button>
  );
}
export default InspiraciónCard;
