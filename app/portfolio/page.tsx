"use client";
import React, { useState } from "react";
import { ProjectsItems } from "@/constants";
import { Portfolio as MyPortfolio } from "@/components/Portfolio";
import { Modal } from "@/components/Modal";
import { Projects } from "@/types";

const PortfolioPage: React.FC<Projects> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

  const openModal = (project: Projects) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="relative flex flex-col text-center container px-20 mt-10">
      <h2 className="text-8xl text-gray-700 font-bold">
        My <span className="text-8xl text-primary font-bold">Portfolio</span>
      </h2>
      <div className="grid grid-cols-3 gap-2 my-10">
        {ProjectsItems.map((project) => (
          <MyPortfolio
            key={project.id}
            project={project}
            onClick={() => openModal(project)} // Llamar openModal con el proyecto seleccionado
          />
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && selectedProject && (
        <Modal
          title={selectedProject.title}
          description={selectedProject.description}
          languages={selectedProject.languages}
          url={selectedProject.url}
          onClose={closeModal} // Función para cerrar el modal
        />
      )}
    </div>
  );
};

export default PortfolioPage;
