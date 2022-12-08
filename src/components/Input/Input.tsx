/** @jsxImportSource theme-ui */
import * as React from "react";
import { ChangeEventHandler } from "react";

export interface InputProps {
  label?: string;
  disabled?: boolean;
  fontFamily?: string;
  placeholder?: string;
  paddding?: string;
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <label htmlFor={props.id ? props.id : "text"}>{props.label}</label>
      <input
        type="text"
        id={props.id ? props.id : "text"}
        disabled={props.disabled}
        placeholder={props.placeholder}
        sx={{ padding: !props.paddding && "4px", display: "block" }}
      ></input>
      ;
    </div>
  );
};
export default Input;
