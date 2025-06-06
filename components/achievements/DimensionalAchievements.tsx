// components/DimensionalAchievements.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Button from '../ui/Button'; // Sua importação do componente Button

// Interface para os dados do certificado
interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyLink?: string | null;
  skills?: string[];
  // certificateImage?: string;
}

// Seus dados de certificação
const certificationsData: Certification[] = [
  {
    id: 'meta-frontend',
    title: 'Introduction to Front-End Development',
    issuer: 'Meta (via Coursera)',
    date: '12 de Dezembro de 2024',
    credentialId: 'BANDKMZGZ5W6',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/BANDKMZGZ5W6',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Front-End Development', 'Web Development', 'Responsive Design', 'Web Accessibility'],
  },
  {
    id: 'scrimba-redux',
    title: 'Redux in JavaScript and React',
    issuer: 'Scrimba (via Coursera)',
    date: '20 de Dezembro de 2024',
    credentialId: '5JDXUXI3SI4K',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/6JDXUXIBSI4K',
    skills:['Redux', 'JavaScript', 'React', 'State Management', 'Asynchronous Actions', 'Middleware', 'Web Development Tools', 'Web Development' ],
  },
  {
    id: 'rocketseat-react',
    title: 'React JS',
    issuer: 'Rocketseat',
    date: 'Novembro de 2023',
    verifyLink: null,
    skills: ['Vite', 'TypeScript', 'JavaScript', 'API REST', 'Axios', 'React Hooks', 'Styled-components', 'React Router'],
  },
];

// Variantes de animação para o modal
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2, ease: "easeIn" } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};


export default function DimensionalAchievements() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Attempting to open modal. Current isModalOpen state:", isModalOpen);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    console.log("Attempting to close modal. Current isModalOpen state:", isModalOpen);
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("isModalOpen state changed to:", isModalOpen);
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);  return (
    <section className="relative py-16 md:py-32">
      {/* Adicionado um z-index aqui para garantir que a seção esteja em um contexto de empilhamento, caso necessário */}      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-12 md:mb-20 bg-gradient-to-r from-purple-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent"
        >
          Certificados e Licenças
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {certificationsData.map((cert, index) => (            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative border-l-4 border-cyan-400 pl-6 md:pl-8 py-4 md:py-6 group"
            >
              <div className="absolute w-6 h-6 md:w-8 md:h-8 bg-cyan-400 rounded-full -left-3 md:-left-4 top-4 md:top-6 shadow-lg shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110" />
              <h3 className="text-xl md:text-2xl font-bold text-cyan-300 mb-2">
                {cert.title}
              </h3>
              <p className="text-purple-300 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-400 text-xs mb-3">{cert.date}</p>
              {cert.credentialId && (
                <p className="text-gray-500 text-xs mb-3">
                  ID da Credencial: {cert.credentialId}
                </p>
              )}
              {cert.skills && cert.skills.length > 0 && (
                <div className="mt-3 mb-3">
                  <p className="text-gray-400 text-sm mb-1">Principais competências:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-purple-500/10 rounded-full text-cyan-300 text-xs border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Botão para abrir o Modal usando seu componente Button */}          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: certificationsData.length * 0.1 }}
            className="text-center mt-16 md:mt-24 relative z-10"
          >            <Button
              type="button"
              onClick={openModal}
              className="inline-block px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-white hover:scale-105 transition-transform transform duration-200 shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 cursor-pointer pointer-events-auto relative z-10"
            >
              Verificar Certificados Online
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-[9999]"
            onClick={closeModal}
          >
            <motion.div
              key="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-900/90 backdrop-blur-lg border border-purple-500/40 rounded-xl p-6 md:p-8 shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700">
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                  Verificação de Certificados
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Fechar modal"
                >
                  <XMarkIcon className="w-7 h-7" />
                </button>
              </div>
              
              <div className="space-y-5 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                {certificationsData.map((cert) => (
                  <div key={`modal-${cert.id}`} className="p-4 bg-gray-800/60 rounded-lg border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                    <h4 className="font-semibold text-cyan-300 text-lg mb-0.5">{cert.title}</h4>
                    <p className="text-sm text-purple-300 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 mb-3">{cert.date}</p>
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="mb-3">
                        <p className="text-gray-400 text-xs mb-1 font-medium">Competências abordadas:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 bg-purple-600/20 rounded-md text-cyan-200 text-[11px] border border-purple-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {cert.verifyLink ? (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-100 font-medium group mt-1 py-1 px-3 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all duration-200"
                      >
                        <span>Acessar Certificado</span>
                        <span className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1">▹</span>
                      </a>
                    ) : (
                      <p className="text-sm text-gray-500 italic mt-1">
                        Link de verificação não disponível
                      </p>
                    )}
                  </div>
                ))}
                {certificationsData.length === 0 && (
                  <p className="text-gray-400 text-center py-8">Nenhum certificado para exibir no momento.</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4f46e5; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4338ca; 
        }
      `}</style>
    </section>
  );
}
