import React from "react";
import Buttons from "../../components/Buttons/Buttons";

const Home = () => {
  return (
    <div className="Home">
      <div className="buttonsComponent flex flex-col gap-[10px] border-[#9747ff] border-[1px] border-dashed p-[10px]">
        <Buttons buttonName="Done" color="bg-[#FFCE22]" />
        <Buttons buttonName="Done" color="bg-[#FFD84D]" />
        <Buttons buttonName="Done" color="bg-[#FFCE22]" />
      </div>
    </div>
  );
};

export default Home;
