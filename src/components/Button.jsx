import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const Button = () => {
  return (
    <div>
      <button className="py-2 px-6 gap-2 border-0 outline-0 flex items-center mb-12 mt-6 shadow-3xl">
        <span>
          <BsArrowLeft />
        </span>
        <span>Back</span>
      </button>
    </div>
  );
};

export default Button;
