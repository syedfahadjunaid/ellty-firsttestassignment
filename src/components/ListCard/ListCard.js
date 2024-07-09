import React from "react";
import Checkboxes from "../CheckBox/Checkbox";
import "./ListCard.css";

const ListCard = ({
  disabled,
  checked,
  color,
  checkboxBorder,
  text,
  setChecked,
  onClick,
}) => {
  const handleClick = () => {
    if (setChecked) {
      setChecked(!checked);
    }
  };

  return (
    <div
      className="listCard flex items-center justify-between w-[370px] h-[42px] pt-[8px] pb-[8px] pl-[22px] pr-[15px] bg-white cursor-pointer"
      onClick={handleClick}
    >
      <p>{text}</p>
      <Checkboxes
        disabled={disabled}
        checked={checked}
        setChecked={setChecked}
        color={color}
        checkboxBorder={checkboxBorder}
      />
    </div>
  );
};

export default ListCard;
