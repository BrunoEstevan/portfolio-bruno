"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillText = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.h1
        ref={ref}
        className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center font-semibold text-transparent z-[20] bg-clip-text bg-gradient-to-r from-purple-900 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-900"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Minhas competencias tecnicas
        
      </motion.h1>
    </div>
  );
};

export default SkillText;
