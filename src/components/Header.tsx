import React from "react";

type props = { text: string };

const Header = ({ text }: props) => {
  return (
    <header>
      <h1 style={{ color: "#111" }}>{text}</h1>
    </header>
  );
};

export default Header;
