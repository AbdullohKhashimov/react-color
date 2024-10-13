import React from "react";
import "../css/input.css";

const Input = (props) => {
  const { colorValue, setColorValue, setHexValue } = props;
  return (
    <div className="input-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="label-title"></label>
        <input
          type="text"
          autoFocus
          placeholder="Add Color name"
          required
          value={colorValue}
          onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(e.target.value);
          }}
          className="item-input"
        />
      </form>
    </div>
  );
};

export default Input;
