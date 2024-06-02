"use client"
import React from "react";
import { CustomButtonProps } from "@/types";


const CustomButton = ({
  title,
  type = "button",
  disabled = false,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">
        {title}
      </span>
    </button>
  );
};

export default CustomButton;
