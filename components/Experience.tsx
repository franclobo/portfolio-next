import React from 'react'
import { Experience as ExperienceType } from "@/types";

export const Experience:React.FC<ExperienceType> = ({title, company, dateFrom, dateTo, city, icon:IconComponent, description}) => {
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  return (
    <div className="flex items-start justify-start gap-4">
      <div className="relative flex flex-col items-center">
        <div className="bg-primary p-2 rounded-full">
          <IconComponent className="text-white text-2xl" />
        </div>
        <div className="absolute w-[1px] h-[100px] bg-gray-400 top-0 -z-10" />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 bg-gray-300 rounded-full px-2">
            <p className="text-xs">
              {formatDate(dateFrom)} - {formatDate(dateTo)}
            </p>
          </div>
          <div className="flex gap-2">
            <h4 className="text-lg text-gray-700 font-bold">{title}</h4>
            <span className="text-lg text-gray-700 font-bold"> - </span>
            <p className="text-lg text-gray-700">{company}</p>
          </div>
          <p className="text-gray-600 text-sm">{city}</p>
        </div>
        <div className="flex flex-col gap-2">
          {description.map((activity, index) => (
            <p key={index} className="text-gray-600 self-left text-left">
              {activity.activity}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

