import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Filter = () => {
  return (
    <div>
      <div className="w-[50%] md:w-full py-2 px-6 border-0 outline-0 flex items-center justify-between mb-12 mt-6 shadow-3xl">
        <p>Filter</p>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Filter;
