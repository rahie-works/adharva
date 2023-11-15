import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { CONNECT_BUTTON_NAME, ROUTE_TO_CONNECT } from './constants';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonName
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const routeTo = buttonName === CONNECT_BUTTON_NAME ? ROUTE_TO_CONNECT : '/';
  return (
    <Link to={routeTo} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};