import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";

interface ModalProps {
  title: string;
  description: string;
  languages: string[];
  url: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  languages,
  url,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col items-center justify-center bg-white p-6 w-[400px] rounded-lg shadow-lg">
        {/* Botón de cierre */}
        <div
          className="absolute -top-5 -right-5 cursor-pointer"
          onClick={onClose}
        >
          <IoMdCloseCircleOutline className="text-2xl text-white cursor-pointer" />
        </div>
        {/* Contenido del modal */}
        <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
        <p className="text-gray-600 mb-4 text-left">{description}</p>
        <div className="flex items-center mb-4 text-center">
          {languages.map((language, index) => (
            <p
              key={index}
              className="text-white text-xs bg-gray-400 rounded-full p-2 mr-2"
            >
              {language}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1">
          <IoOpenOutline className="text-primary ml-2" />
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  );
};
