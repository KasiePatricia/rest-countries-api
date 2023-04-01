import React from "react";

const Countries = (props) => {
  return (
    <div className="w-[320px] gap-2 border-0 outline-0 flex flex-col mb-12 mt-6 shadow-3xl">
      <div>
        <img src="https://flagcdn.com/w320/as.png" alt="Countries Map" />
      </div>
      <div className="px-6">
        <p className="font-bold my-6">Belgium</p>

        <div className="pb-3">
          <p>Population: {props.population}</p>
          <p>Region: {props.region}</p>
          <p>Capital : {props.capital}</p>
        </div>
      </div>
    </div>
  );
};

export default Countries;
