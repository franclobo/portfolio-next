"use client";
import React from "react";
import Image from "next/image";
import { Projects } from "@/types";

interface PortfolioProps {
  project: Projects;
  onClick: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ project, onClick }) => {
  return (
    <div
      className="dark:text-white relative flex flex-col items-start border border-solid border-gray-400 w-[360px] rounded-xl overflow-hidden"
      onClick={onClick} // Llamar onClick al hacer click en el proyecto
    >
      {/* Imagen del proyecto */}
      <div className="relative w-[360px] h-[200px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="absolute object-cover object-top cursor-pointer"
        />
      </div>
      {/* Título visible al hacer hover */}
      <div className="absolute bg-primary flex items-center justify-center w-[360px] h-[200px] opacity-0 hover:opacity-100">
        <p className="text-4xl text-white font-bold">{project.title}</p>
      </div>
    </div>
  );
};
