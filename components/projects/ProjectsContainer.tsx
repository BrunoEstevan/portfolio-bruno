"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";
interface ProjectsContainerProps {
  children: React.ReactNode;
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ children }) => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
   return (      <div
      id="projects"
      className="flex flex-col items-center justify-center z-[20] gap-5 pt-16 md:pt-28 pb-24 md:pb-32 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent py-16 md:py-24"  
    >
      <motion.h1
        ref={titleRef}
        className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center font-semibold text-transparent z-[20] bg-clip-text bg-gradient-to-r from-purple-900 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-900"
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >  
        Meus Projetos Pessoais
      </motion.h1>
      {children}
      <div className="mt-8">
        <Button href="/projects">Ver todos os projetos (em manutenção)</Button>
      </div>
    </div>
  );
};

export default ProjectsContainer;
