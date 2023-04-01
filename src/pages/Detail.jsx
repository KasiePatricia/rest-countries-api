import React from "react";
import BorderButton from "../components/BorderButton";
import BorderCountry from "../components/BorderCountry";
import Button from "../components/Button";
import Countries from "../components/Countries";
import Header from "../components/Header";

const MainPage = () => {
  return (
    <>
      <header className="w-[90%] mx-auto">
        <Header />
      </header>
      <main className="w-[90%] mx-auto">
        <Button />
        <Countries />
        <BorderCountry />
        <BorderButton />
      </main>
    </>
  );
};

export default MainPage;
