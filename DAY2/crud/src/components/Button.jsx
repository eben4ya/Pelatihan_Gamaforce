import React from "react";

const Button = ({ button = "", onClick = "", className="" }) => {
  return (
    <button
      onClick={onClick}
      className={`${className }bg-pink-500 text-white py-2 px-4 rounded-full font-bold`}
    >
      {button}
    </button>
  );
};

export default Button;
