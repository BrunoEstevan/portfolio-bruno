"use client";

import React, { ReactNode } from "react";

interface HeroContainerProps {
  children: ReactNode;
}

const HeroContainer: React.FC<HeroContainerProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col h-full w-full bg-gradient-to-b from-[#030014] via-transparent to-transparent pt-32 pb-56 md:pb-44" id="about-me">
      {children}
    </div>
  );
};

export default HeroContainer;
