import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="py-2 px-6 gap-2 border-0 outline-0 flex items-center mb-12 mt-6 shadow-3xl relative bg-white">
      <input
        type="text"
        className="outline-0 border-0 pl-8"
        placeholder="Search for a country..."
      />
      <BsSearch className="absolute" />
    </div>
  );
};

export default Search;
