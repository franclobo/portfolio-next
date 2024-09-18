import React from 'react'
import { Figures } from "@/types";

export const FiguresComponent:React.FC<Figures> = ({title, number}) => {
  return (
    <div className="dark:text-white flex flex-col items-start p-8 border botrder-solid border-gray-400 w-[200px]">
      <p className="text-4xl text-primary font-bold">
        {number}+
      </p>
      <div className="flex items-start">
        <div className="w-10 h-[1px] bg-gray-400 mt-2" />
        <p className="dark:text-white text-gray-600">{title}</p>
      </div>
    </div>
  );
}
