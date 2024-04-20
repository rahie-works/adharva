import React from "react";
import { Link } from "react-router-dom";

// styles
import "./Button.css";

// constants
import { STYLES, SIZES } from "./constants";

export default function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  routeTo,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to={routeTo} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}
