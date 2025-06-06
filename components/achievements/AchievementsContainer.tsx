"use client";

import React, { ReactNode } from "react";

interface AchievementsProps {
  children: ReactNode;
}

const Achievements: React.FC<AchievementsProps> = ({ children }) => {  return (
    <div className="relative flex flex-col h-full w-full pt-16 md:pt-28 pb-24 md:pb-32 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" id="achievements">
      {children}
    </div>
  );
};

export default Achievements;