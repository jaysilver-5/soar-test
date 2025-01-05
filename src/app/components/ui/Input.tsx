import React, { FC, ChangeEvent } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isFull?: boolean;
  formSubmitted?: boolean; // New prop to track form submission
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  id,
  onChange,
  isFull,
  formSubmitted,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={id === "password" ? "password" : "text"}
        placeholder={placeholder}
        className={`border text-black mt-2 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
          !isFull && formSubmitted ? "border-red-500" : "border-gray-300"
        }`}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
