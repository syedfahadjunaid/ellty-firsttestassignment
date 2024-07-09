import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import Checkbox from "../../components/CheckBox/Checkbox";
import ListCard from "../../components/ListCard/ListCard";
import MainListSelectionWithButton from "../../components/MainListSelectionWithButton/MainListSelectionWithButton";

const Home = () => {
  return (
    <div className="Home flex flex-row gap-[1rem]">
      {/* Buttons */}
      <div className="buttonsSection flex flex-col gap-[10px] border-[#9747ff] border-[1px] border-dashed p-[10px] h-fit rounded-[4px]">
        <Buttons buttonName="Done" color="bg-[#FFCE22]" />
        <Buttons buttonName="Done" color="bg-[#FFD84D]" />
        <Buttons buttonName="Done" color="bg-[#FFCE22]" />
      </div>

      {/* Checkboxes */}
      <div className="checkboxSection flex flex-col border-[#9747ff] gap-[10px] border-[1px] border-dashed p-[10px] h-fit rounded-[4px]">
        <Checkbox
          disabled={false}
          checked={false}
          color={"blue"}
          checkboxBorder={"#CDCDCD"}
        />
        <Checkbox
          disabled={false}
          checked={true}
          color={"#BDBDBD"}
          checkboxBorder={"#BDBDBD"}
        />
        <Checkbox
          disabled={false}
          checked={true}
          color={"#5087F8"}
          checkboxBorder={"#BDBDBD"}
        />
        <Checkbox
          disabled={false}
          checked={true}
          color={"#5087F8"}
          checkboxBorder={""}
        />
        <Checkbox
          disabled={false}
          checked={true}
          color={"#2469F6"}
          checkboxBorder={"#BDBDBD"}
        />
        <Checkbox
          disabled={false}
          checked={true}
          color={"#5087F8"}
          checkboxBorder={"#BDBDBD"}
        />
        <Checkbox
          disabled={false}
          checked={true}
          color={"#2469F6"}
          checkboxBorder={"#BDBDBD"}
        />
        <Checkbox
          disabled={false}
          checked={true}
          color={"#BDBDBD"}
          checkboxBorder={"#BDBDBD"}
        />
        <Checkbox
          disabled={false}
          checked={false}
          color={"blue"}
          checkboxBorder={"#BDBDBD"}
        />
      </div>

      {/* List Card */}
      <div className="listCardsSection flex flex-col gap-[20px] border-[#9747ff] border-[1px] border-dashed p-[10px] h-fit rounded-[4px]">
        <ListCard
          text={"All pages"}
          disabled={false}
          checked={false}
          color={"#5087F8"}
          checkboxBorder={"#CDCDCD"}
        />
        <ListCard
          text={"All pages"}
          disabled={false}
          checked={true}
          color={"#BDBDBD"}
          checkboxBorder={"#BDBDBD"}
        />
        <ListCard
          text={"All pages"}
          disabled={false}
          checked={true}
          color={"#BDBDBD"}
          checkboxBorder={"#BDBDBD"}
        />
        <ListCard
          text={"All pages"}
          disabled={false}
          checked={true}
          color={"#5087F8"}
          checkboxBorder={""}
        />
        <ListCard
          text={"All pages"}
          disabled={false}
          checked={true}
          color={"#2469F6"}
          checkboxBorder={"#BDBDBD"}
        />
        <ListCard
          text={"All pages"}
          disabled={false}
          checked={true}
          color={"#5087F8"}
          checkboxBorder={"#BDBDBD"}
        />
        <ListCard
          text={"All pages"}
          disabled={false}
          checked={true}
          color={"#2469F6"}
          checkboxBorder={"#BDBDBD"}
        />
        <ListCard
          text={"All pages"}
          disabled={true}
          checked={true}
          color={"#BDBDBD"}
          checkboxBorder={"#BDBDBD"}
        />
      </div>

      {/* Main List With Button */}
      <div className="mainListWithButton bg-white p-[2rem]">
        <MainListSelectionWithButton />
      </div>
    </div>
  );
};

export default Home;
