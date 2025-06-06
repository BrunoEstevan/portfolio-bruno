"use client";

import React, { ReactNode } from "react";

interface ProfessionalExperienceProps {
  children: ReactNode;
}

const Experience: React.FC<ProfessionalExperienceProps> = ({ children }) => {  return (
    <div className="relative flex flex-col h-full w-full pt-16 md:pt-28 pb-24 md:pb-32 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" id="experience">
      {children}
    </div>
  );
};

export default Experience;
