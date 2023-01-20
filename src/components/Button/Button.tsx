import PropTypes from "prop-types";
import React from "react";

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
