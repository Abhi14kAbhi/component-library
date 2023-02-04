import React from "react";

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="p-11">
      <button>{props.label}</button>
    </div>
  );
};

export default Button;
