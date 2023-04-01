import React from "react";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between py-8">
      <h1 className="font-bold">What in the world?</h1>
      <div className="flex items-center gap-3">
        <BsMoon />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
