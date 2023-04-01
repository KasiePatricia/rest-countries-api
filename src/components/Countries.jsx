import React from "react";

const Countries = (props) => {
  return (
    <div>
      <div>
        <img src="https://flagcdn.com/w320/as.png" alt="Countries Map" />
      </div>
      <div>
        <p className="font-bold my-6">Belgium</p>
      </div>
      <div className="pb-3">
        <p>Native Name: {props.native_name}</p>
        <p>Population: {props.population}</p>
        <p>Region : {props.region}</p>
        <p>Subregion: {props.subregion}</p>
        <p>Capital: {props.capital}</p>
      </div>
      <div>
        <p>Top Level Domain: {props.domain}</p>
        <p>Currencies: {props.currencies}</p>
        <p>Language : {props.language}</p>
      </div>
    </div>
  );
};

export default Countries;
