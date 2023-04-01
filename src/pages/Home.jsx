import React from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Search from "../components/Search";
import HomeCountry from "../components/HomeCountry";

const Detail = () => {
  return (
    <>
      <header className="w-[90%] mx-auto">
        <Header />
      </header>
      <main className=" bg-VeryLightGray">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between ">
            <Search />
            <Filter />
          </div>
          <HomeCountry />
        </div>
      </main>
    </>
  );
};

export default Detail;
