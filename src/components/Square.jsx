import React, { useState } from "react";
import "../css/square.css";

const Square = (props) => {
  const { colorValue, hexValue, isDarkText } = props;
  return (
    <div
      className="square-container"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <div className="title">
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
      </div>
    </div>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color value",
};

export default Square;
