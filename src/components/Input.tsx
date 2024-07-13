import React, { ChangeEvent } from "react";

type props = { handleText: (value: string) => void };

const Input = ({ handleText }: props) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleText(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="아무거나 입력"
        style={{
          padding: "10px 15px",
          borderRadius: "12px",
          outline: "none",
          border: "none",
          boxShadow: "0 0 10px -3px",
        }}
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;
