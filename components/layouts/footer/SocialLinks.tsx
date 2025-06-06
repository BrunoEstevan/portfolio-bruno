import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLink from "./SocialLink";
import ContactForm from "./ContactForm";

const SocialLinks = () => {
  const [showContactForm, setShowContactForm] = useState(false);
    const handleMailClick = () => {
    setShowContactForm(!showContactForm);
    toast.info(showContactForm ? "Formulário ocultado" : "Formulário de contato aberto!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };const links = [
    {
      name: "LinkedIn",
      icon: <RxLinkedinLogo className="text-[24px] text-white" />,
      url: "https://www.linkedin.com/in/bruno-estevan-474bb7254/",
    },
    {
      name: "GitHub",
      icon: <RxGithubLogo className="text-[24px] text-white" />,
      url: "https://github.com/BrunoEstevan",
    },
    {
      name: "Formulário de Contato",
      icon: <HiOutlineChatBubbleBottomCenterText className="text-[24px] text-white" />,
      url: "#",
      onClick: handleMailClick,
    },
  ];

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: linksRef, inView: linksInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-8 px-4 gap-8">
      {/* Título principal */}
      <div className="text-center">
        <motion.h1
          ref={titleRef}
          className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center font-semibold text-transparent z-[20] bg-clip-text bg-gradient-to-r from-purple-900 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-900 "
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Entre em Contato
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-gray-400 mt-2 text-sm md:text-base max-w-md mx-auto"
        >
          Vamos conversar sobre projetos, oportunidades ou trocar uma ideia sobre tecnologia!
        </motion.p>
      </div>

      {/* Container principal com layout responsivo */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
        
        {/* Links sociais */}
        <div className="w-full lg:w-auto lg:min-w-[300px] flex flex-col items-center">
          <motion.h2
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4"
          >
            Conecte-se Comigo
          </motion.h2>
          
          <div ref={linksRef} className="flex flex-col items-center space-y-2">
            {links.map((link, index) => (
              <SocialLink
                key={index}
                name={link.name}
                url={link.url}
                icon={link.icon}
                onClick={link.onClick}
                delay={index * 0.1}
                inView={linksInView}
              />
            ))}
          </div>
        </div>

        {/* Formulário de contato */}
        <div className="w-full lg:flex-1 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: showContactForm ? 1 : 0, 
              height: showContactForm ? "auto" : 0 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            {showContactForm && (
              <div className="w-full">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 text-center"
                >
                  Envie sua Mensagem
                </motion.h2>
                <ContactForm />
              </div>
            )}
          </motion.div>
          
          {!showContactForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center max-w-md"
            >              <div className="bg-black/10 backdrop-blur-md border border-purple-700/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
                  Vamos colaborar?
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Estou sempre aberto a novos desafios e oportunidades. Use o formulário de contato para enviar uma mensagem detalhada!
                </p>
                <div className="flex items-center justify-center space-x-2 text-cyan-400">
                  <HiOutlineChatBubbleBottomCenterText className="text-lg" />
                  <span className="text-sm">Clique em &quot;Formulário de Contato&quot;  para começar</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default SocialLinks;
