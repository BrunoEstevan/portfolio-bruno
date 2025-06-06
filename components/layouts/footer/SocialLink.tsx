"use client";

import React from "react";
import { motion } from "framer-motion";

interface SocialLinkProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  onClick?: () => void;
  delay: number;
  inView: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  name,
  url,
  icon,
  onClick,
  delay,
  inView,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.a
      href={url}
      target={url.startsWith('http') ? "_blank" : "_self"}
      onClick={handleClick}
      className="relative flex flex-row items-center justify-start cursor-pointer group my-2 z-[20] px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 w-full max-w-[280px]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
        {icon}
      </div>
      <span className="text-sm md:text-base ml-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 group-hover:from-purple-200 group-hover:to-blue-200 relative flex-1">
        {name}
        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </motion.a>
  );
};

export default SocialLink;
