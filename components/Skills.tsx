import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Skills as SkillsType } from "@/types";


export const Skills:React.FC<SkillsType> = ({title, percentage}) => {
  return (
    <div className="flex flex-col items-center p-4 w-40 h-40">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: `rgba(124, 58, 237, ${percentage / 100})`,
          textColor: `rgba(124, 58, 237)`,
        })}
      />
      <p className="text-gray-600 mt-2 font-bold">{title}</p>
    </div>
  );
}

