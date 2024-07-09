import React from "react";
import Checkboxes from "../CheckBox/Checkbox";

const ListCard = ({ disabled, checked, color, checkboxBorder, text }) => {
  return (
    <div className="listCard flex items-center justify-between w-[370px] h-[42px] pt-[8px] pb-[8px] pl-[22px] pr-[15px] bg-white">
      <p>{text}</p>
      <Checkboxes
        disabled={disabled}
        checked={checked}
        color={color}
        checkboxBorder={checkboxBorder}
      />
    </div>
  );
};

export default ListCard;
