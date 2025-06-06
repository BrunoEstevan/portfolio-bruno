"use client";

import React, {useState} from "react";
import ProjectCard from "./ProjectCard";

import { ProjectData } from "@/components/projects/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";
import {  RxGithubLogo } from "react-icons/rx";
import Button from "@/components/ui/Button";
import { Video } from "lucide-react";

interface ProjectListProps {
  projects: ProjectData[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  
 const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

 const handleOpenModal = (project: ProjectData) => {
    setSelectedProject(project);
  };

   const handleCloseModal = () => {
    setSelectedProject(null);
  };

   return (
    <>
      <div className="h-full w-full flex flex-col md:flex-row flex-wrap justify-center gap-10 px-5 max-w-7xl mt-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDetailsClick={handleOpenModal} // Passa a função para o Card
          />
        ))}
      </div>

      {/* 3. AQUI ESTÁ A "PARTE DO MODAL" - O COMPONENTE DIALOG DA SHADCN UI */}
      {selectedProject && ( // Só renderiza o Dialog se um projeto estiver selecionado
        <Dialog open={!!selectedProject} onOpenChange={(isOpen) => { if (!isOpen) handleCloseModal(); }}>
          <DialogContent className="bg-gray-950 border-purple-700 text-white sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-0 shadow-2xl shadow-purple-500/30">
            {/* Botão de Fechar Personalizado */}
            <DialogClose asChild className="absolute right-3 top-3 z-50 ">
              <button className="p-1 rounded-full hover:bg-gray-700/50 transition-colors">
               </button>
            </DialogClose>

            {/* GIF de Demonstração */}
            {selectedProject.gifSrc && (
              <div className="relative w-full aspect-video overflow-hidden bg-black/30">
                <Image
                  src={selectedProject.gifSrc}
                  alt={`GIF de demonstração de ${selectedProject.title}`}
                  layout="fill"
                  objectFit="contain"
                  unoptimized
                />
              </div>
              
            )}
 
              {selectedProject.vidsrc && (
              <div className="relative w-full aspect-video overflow-hidden bg-black/30">
                <video
                  src={selectedProject.vidsrc}
                  loop
                  muted
                  autoPlay

                />
              </div>
              
            )}

            {/* Conteúdo de Texto do Modal */}
            <div className="p-6 md:p-8">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <DialogDescription className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                {selectedProject.description}
              </DialogDescription>

              <div className="mb-6">
                <h3 className="text-md md:text-lg font-semibold text-purple-300 mb-3">
                  Tecnologias Utilizadas:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800/70 border border-purple-700/50 text-purple-300 px-3 py-1 text-xs md:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
                <Button
                  href={selectedProject.repoLink}
                  target="_blank"
                  icon={<RxGithubLogo className="text-lg md:text-xl mr-2" />}
                  variant="ghost"
                  className="border-purple-600 text-purple-300 hover:bg-purple-600/20 hover:text-purple-200 w-full sm:w-auto"
                >
                  Ver Repositório
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
 


export default ProjectList;
