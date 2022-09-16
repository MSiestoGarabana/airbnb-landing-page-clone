import React from "react";
import "./Button.Component.css";

function Button({ className, children, ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
export default Button;
