import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ content, type, onClick, btnStyle, btnSize }) => {
  const STYLES = ["btn-light", "btn-outline"];
  const SIZES = ["btn-medium", "btn-large"];

  // to check if there is no style values the default style is btn-light for a button
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  // to check if there is no size values the default style is btn-medium for a button
  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
  return (
    <Link to="signup">
      <button
        className={`btn ${checkBtnStyle} ${checkBtnSize}`}
        type={type}
        onClick={onClick}
      >
        {content}
      </button>
    </Link>
  );
};

export default Button;
