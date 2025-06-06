"use client";

import React from "react";
import { motion } from "framer-motion";
import WelcomeBox from "./WelcomeBox";
import TitleSection from "./TitleSection";
import DescriptionSection from "./DescriptionContent";
import ProfileImage from "./ProfileImage";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse lg:flex-row items-center justify-center px-5 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-3 lg:gap-5 justify-center m-auto text-start">
        <WelcomeBox />
        <TitleSection />
        <DescriptionSection />
      </div>
      <ProfileImage />
    </motion.div>
  );
};

export default HeroContent;
