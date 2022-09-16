import React from "react";

import "./HeaderButton.Component.css";

function Headerbutton(props) {
  return <button className={props.className}>{props.content}</button>;
}
export default Headerbutton;
