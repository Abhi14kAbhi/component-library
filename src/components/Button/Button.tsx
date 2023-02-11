import React, { ReactNode } from "react";

interface ButtonProps {
  label: string;
  size: string;
  disabled: string;
  // onClick: () => {};
  variant: string;
  children: ReactNode | string;
  leftAdornmentIcon: ReactNode;
  rightAdormentIcon: ReactNode;
  edge: string;
  style: Object;
}

const Button = (props: ButtonProps) => {
  const {
    label,
    size,
    children,
    disabled,
    edge,
    leftAdornmentIcon,
    rightAdormentIcon,
    style,
    variant,
  } = props;

  return (
    <div className="flex" onClick={() => console.log("herere")}>
      {leftAdornmentIcon ? <div>{leftAdornmentIcon}</div> : <div />}
      <div>{children || label}</div>
      {rightAdormentIcon ? <div>{rightAdormentIcon}</div> : <div />}
    </div>
  );
};

export default Button;
