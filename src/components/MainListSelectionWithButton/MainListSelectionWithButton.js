import React, { useEffect, useState } from "react";
import ListCard from "../ListCard/ListCard";

const MainListSelectionWithButton = () => {
  const [allPagesCheck, setAllPagesCheck] = useState(false);
  const [page1Check, setPage1Check] = useState(false);
  const [page2Check, setPage2Check] = useState(false);
  const [page3Check, setPage3Check] = useState(false);
  const [page4Check, setPage4Check] = useState(false);

  // console.log(allPagesCheck);

  useEffect(() => {
    if (allPagesCheck === true) {
      setPage1Check(true);
      setPage2Check(true);
      setPage3Check(true);
      setPage4Check(true);
    }
  }, [allPagesCheck]);

  console.log(page1Check);
  return (
    <div className="bg-white rounded-[6px] shadow-md flex flex-col gap-[10px] p-[10px]">
      <ListCard
        text={"All pages"}
        disabled={false}
        checked={allPagesCheck}
        setChecked={setAllPagesCheck}
        color={"#5087F8"}
        checkboxBorder={"#CDCDCD"}
      />
      <div className="border"></div>
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
    </div>
  );
};

export default MainListSelectionWithButton;
