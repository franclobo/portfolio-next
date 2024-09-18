import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import { Skills as SkillsType } from "@/types";
import "react-circular-progressbar/dist/styles.css";

export const Skills:React.FC<SkillsType> = ({title, percentage}) => {
  return (
    <div className="flex flex-col items-center p-4 w-40 h-40">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          path: {
            stroke: "hsl(var(--primary))",
          },
          text: {
            fill: "hsl(var(--primary))",
            fontSize: "20px",
          },
        }}
      />
      <p className="dark:text-white text-gray-600 mt-2 font-bold">{title}</p>
    </div>
  );
}

