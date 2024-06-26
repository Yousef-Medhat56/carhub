'use client';
import React from 'react';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
Image;

const CustomButton = ({
  title,
  type = 'button',
  disabled = false,
  containerStyles,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
