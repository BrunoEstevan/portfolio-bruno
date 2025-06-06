"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <motion.div
      variants={slideInFromRight(0.8)}
      className="hidden lg:flex flex-col items-center w-full h-full justify-center"
    >
      <div className="max-w-xs w-full rounded-2xl overflow-hidden">
        <Image
          src="/me/me.jpg"
          alt="profile-picture"
          className="aspect-[14/13] w-full rounded-2xl object-cover"
          width={350}
          height={350}
        />
        <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
          Bruno Estevan da Silva Nunes
        </h3>
        <p className="text-base leading-7 text-gray-300">22 anos</p>
        <p className="text-sm leading-6 text-gray-500"> Porto Alegre, Rio Grande do Sul</p>
      </div>
    </motion.div>
  );
};

export default ProfileImage;
