import React, { useState } from "react";
import "../css/square.css";

const Square = (props) => {
  const { colorValue, hexValue } = props;
  return (
    <div className="square-container">
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
