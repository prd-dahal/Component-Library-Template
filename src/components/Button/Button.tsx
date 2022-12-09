/** @jsxImportSource theme-ui */
import * as React from "react";
import { MouseEventHandler } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export interface ButtonProps {
  label?: string;
  color?: string;
  fontFamily?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  return (
    <ChakraButton
      onClick={props.onClick}
      sx={{ color: props.color, fontFamily: props.fontFamily }}
    >
      {props.label}
    </ChakraButton>
  );
};
export default Button;
