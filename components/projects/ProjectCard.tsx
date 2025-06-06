// src/components/projects/ProjectCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { RxGithubLogo, RxZoomIn } from "react-icons/rx";
import Button from "@/components/ui/Button";
import { ProjectData } from "@/components/projects/types"; // Importe a interface/tipo

// A interface Props original tinha src, title, repoLink, detailsLink.
// Vamos mudar para receber o objeto 'project' e 'onDetailsClick'.
interface Props {
  project: ProjectData; // Recebe o objeto project completo
  onDetailsClick: (project: ProjectData) => void; // Função para lidar com o clique em "Ver mais"
}

const ProjectCard = ({ project, onDetailsClick }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5, ease: "easeOut" };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className="relative overflow-hidden rounded-lg shadow-lg p-[2px] bg-gradient-to-r from-purple-900/50 to-blue-900/50 w-full sm:w-80 md:w-96 h-96 flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-900/60 hover:to-purple-800/60 group"
    >
      {/* Efeito de fundo criptográfico */}
      <div className="w-full flex items-start justify-center absolute inset-0 z-0 opacity-100 group-hover:opacity-80 transition-opacity">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
          src="/videos/encryption.webm" // Certifique-se que este caminho está correto
        />
      </div>

      {/* Conteúdo com fundo transparente */}
      <div className="backdrop-blur-sm rounded-lg flex flex-col h-full w-full relative z-10 bg-transparent">
        {/* Container da imagem */}
        <div className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
          <Image
            src={project.src} // Usa project.src
            alt={project.title} // Usa project.title
            width={400}
            height={400}
            quality={100}
            className="object-contain transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Footer do card */}
        <div className="p-4 text-center flex flex-col items-center justify-end h-28 bg-black/10 backdrop-blur-lg">
          <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-lg">
            {project.title} {/* Usa project.title */}
          </h1>

          {/* Botões */}
          <div className="flex gap-3 mt-4 items-center justify-center">
            <Button
              href={project.repoLink} // Usa project.repoLink
              target="_blank"
              icon={<RxGithubLogo className="text-xl" />}
              variant="ghost"
              className="px-4 py-2 hover:bg-purple-900/30 text-purple-200 "
            />
            
            <Button
              onClick={() => onDetailsClick(project)} // Chama onDetailsClick passando o projeto
              icon={<RxZoomIn className="text-xl" />}
              className="px-4 py-2 bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-700/90 hover:to-blue-700/90 text-white"
            >
              Ver mais
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;