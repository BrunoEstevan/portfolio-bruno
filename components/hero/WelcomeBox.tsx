"use client";

import React from "react";
import MessageBox from "@/components/ui/MessageBox";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const WelcomeBox: React.FC = () => {
  return (
    <MessageBox
      icon={<SparklesIcon className="text-cyan-400 h-4 lg:h-5 w-4 lg:w-5" />}
      message="Bem Vindo ao meu Portfolio!"
      animation={slideInFromTop}
      size={"xs"}
    />
  );
};

export default WelcomeBox;
