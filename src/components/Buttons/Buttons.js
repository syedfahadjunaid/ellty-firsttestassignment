import React from "react";
import "./Buttons.css";

const Buttons = ({ color, buttonName, onClick }) => {
  return (
    <button className={`${color} buttonStyle btnText`} onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Buttons;
