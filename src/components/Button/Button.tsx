/** @jsxImportSource theme-ui */
import * as React from "react";
import { MouseEventHandler } from "react";

export interface ButtonProps {
  label?: string;
  color?: string;
  fontFamily?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      sx={{ color: props.color, fontFamily: props.fontFamily }}
    >
      {props.label}
    </button>
  );
};
export default Button;
