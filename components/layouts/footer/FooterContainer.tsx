"use client";

import React, { ReactNode } from "react";

interface FooterContainerProps {
  children: ReactNode;
}

const FooterContainer: React.FC<FooterContainerProps> = ({ children }) => {
  return (
    <div
      className="w-full h-full bg-gradient-to-t from-[#030014] via-purple-900/10 to-transparent text-gray-200 shadow-lg z-[20] pt-16 md:pt-28 pb-8 md:pb-16"
      id="contact-me"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto mb-20 md:mb-40">
        {children}
      </div>
    </div>
  );
};

export default FooterContainer;
