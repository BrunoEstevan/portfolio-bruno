"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion"; // Assuming this utility function is correctly defined

const DescriptionContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Novo Parágrafo 1 (mais conciso e incluindo menção ao React)
  const paragraph1 = `Como desenvolvedor autodidata, sou movido pela criação de soluções de software personalizadas e de impacto. Minha experiência prática abrange desde o desenvolvimento de interfaces front-end dinâmicas com React, até a criação de bots complexos para Discord (Node.js, Discord.js, TypeScript) com foco em automação e interatividade, além de outras aplicações que demonstram minha versatilidade. Busco sempre código limpo e escalável para entregar valor real.`;

  // Parágrafos 2 e 3 (permanecem os mesmos, serão exibidos ao expandir)
  const paragraph2 = `No âmbito mobile, fui responsável pela arquitetura e desenvolvimento do
        front-end para o projeto GymX. Utilizando React Native, Expo Router
        para navegação e RTK Query para um gerenciamento de estado eficaz e
        comunicação otimizada com a API, criei uma interface de usuário fluida
        e responsiva. Este trabalho envolveu uma integração coesa com um
        back-end robusto construído em NestJS, demonstrando minha capacidade de
        atuar em diferentes camadas de uma aplicação full-stack.`;

  const paragraph3 = `Minha paixão pela programação vai além da simples escrita de código;
        sou um entusiasta de código limpo, arquiteturas escaláveis e,
        fundamentalmente, da entrega de valor tangível através da tecnologia.
        Acredito que cada linha de código deve contribuir para uma solução
        elegante e eficaz, transformando desafios em produtos digitais que
        realmente fazem a diferença.`;

  return (
    <motion.div
      variants={slideInFromLeft(0.8)}
      className="text-sm lg:text-lg text-gray-400 mb-3 lg:mb-5 max-w-[600px]"
    >
      <p>{paragraph1}</p>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="expandable-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4">{paragraph2}</p>
            <p className="mt-4">{paragraph3}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleExpansion}
        className="text-indigo-400 hover:text-indigo-300 mt-3 text-sm lg:text-md font-medium cursor-pointer focus:outline-none transition-colors duration-150"
        aria-expanded={isExpanded}
        aria-controls="expandable-content"
      >
        {isExpanded ? "Ver menos" : "Ver mais"}
      </button>
    </motion.div>
  );
};

export default DescriptionContent;
