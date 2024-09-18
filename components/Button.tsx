import React from "react";
import { ButtonProps } from "@/types";

export const Button: React.FC<ButtonProps> = ({text, onClick, icon}) => {
  return (
    <div
      className="dark:text-white relative flex items-center rounded-full p-2 w-[200px] overflow-hidden border border-solid border-gray-400 group text-gray-500 hover:text-white cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute -z-10 bg-primary h-10 w-[200px] right-[-200px] transition-all duration-500 ease-in-out group-hover:right-0" />
      <p className="relative left-4 font-bold">{text}</p>
      <div className="absolute right-0 h-10 w-10 rounded-full bg-primary text-white p-2 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};
