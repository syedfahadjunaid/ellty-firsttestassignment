import React from "react";
import "./Buttons.css";

const Buttons = ({ color, buttonName }) => {
  return (
    <button className={`${color} buttonStyle btnText`}>{buttonName}</button>
  );
};

export default Buttons;
