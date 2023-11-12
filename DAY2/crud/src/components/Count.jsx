import React from "react";
import Button from "./Button";
import { useState } from "react";

const Count = ({ name = "" }) => {
  const [count, setCount] = useState(0);
  const [enable, setEnable] = useState(false);

  const handleCountPlus = () => {
    setEnable(true);
    setCount((prev) => prev + 1);
  };
  const handleCountMinus = () => {
    setCount((prev) => prev - 1);
    if (count <= 1) {
      setCount(0);
      setEnable(false);
    }
  };

  const handleReset = () => {
    setCount(0);
    setEnable(false);
  };
  return (
    <article className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold text-pink-500 ">{name}</h1>
      <div className="flex flex-row justify-center items-center gap-4">
        <Button button="+" onClick={handleCountPlus} />
        <h1 className="text-pink-500 font-bold">{count}</h1>
        <Button button="-" onClick={handleCountMinus} />
      </div>
      {!enable ? null : <Button button="Reset" onClick={handleReset} />}
    </article>
  );
};

export default Count;
