import React, { useEffect, useState } from "react";
import ListCard from "../ListCard/ListCard";
import Buttons from "../Buttons/Buttons";

const MainListSelectionWithButton = () => {
  const [allPagesCheck, setAllPagesCheck] = useState(false);
  const [page1Check, setPage1Check] = useState(false);
  const [page2Check, setPage2Check] = useState(false);
  const [page3Check, setPage3Check] = useState(false);
  const [page4Check, setPage4Check] = useState(false);

  useEffect(() => {
    if (allPagesCheck === true) {
      setPage1Check(true);
      setPage2Check(true);
      setPage3Check(true);
      setPage4Check(true);
    } else if (allPagesCheck === false) {
      setPage1Check(false);
      setPage2Check(false);
      setPage3Check(false);
      setPage4Check(false);
    }
  }, [allPagesCheck]);

  const handleClick = () => {
    setAllPagesCheck(false);
  };

  return (
    <div className="bg-white rounded-[6px] shadow-md flex flex-col items-center gap-[10px] p-[10px]">
      <ListCard
        text={"All pages"}
        disabled={false}
        checked={allPagesCheck}
        setChecked={setAllPagesCheck}
        color={"#5087F8"}
        checkboxBorder={"#CDCDCD"}
      />
      <div className="border w-full"></div>
      <ListCard
        text={"Page 1"}
        disabled={false}
        checked={page1Check}
        setChecked={setPage1Check}
        color={"#5087F8"}
        checkboxBorder={"#CDCDCD"}
      />
      <ListCard
        text={"Page 2"}
        disabled={false}
        checked={page2Check}
        setChecked={setPage2Check}
        color={"#5087F8"}
        checkboxBorder={"#CDCDCD"}
      />
      <ListCard
        text={"Page 3"}
        disabled={false}
        checked={page3Check}
        setChecked={setPage3Check}
        color={"#5087F8"}
        checkboxBorder={"#CDCDCD"}
      />
      <ListCard
        text={"Page 4"}
        disabled={false}
        checked={page4Check}
        setChecked={setPage4Check}
        color={"#5087F8"}
        checkboxBorder={"#CDCDCD"}
      />
      <button className="flex flex-col items-center gap-[10px] border-t py-[20px] w-full cursor-default active:border-t-[3px]">
        <Buttons
          buttonName="Done"
          color="hover:bg-[#FFD84D] bg-[#FFCE22] active:bg-[#FFCE22]"
          onClick={handleClick}
        />
      </button>
    </div>
  );
};

export default MainListSelectionWithButton;
