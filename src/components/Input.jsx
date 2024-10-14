import React from "react";
import "../css/input.css";
import colorNames from "colornames";

const Input = (props) => {
  const { colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText } =
    props;
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
            setHexValue(colorNames(e.target.value));
          }}
          className="item-input"
        />
        <button
          type="button"
          className="toggle-btn"
          onClick={() => setIsDarkText(!isDarkText)}
        >
          Toggle Text Color
        </button>
      </form>
    </div>
  );
};

export default Input;
