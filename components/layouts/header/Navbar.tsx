"use client";

import React from "react";
import DownloadButton from "./DownloadButton";
import NavLinks from "./NavLinks";
import { ToastContainer } from "react-toastify";

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-cyan-500/50 bg-[#03001417] backdrop-blur-md z-30 px-5">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <NavLinks />
        <div className="flex flex-row gap-5">
          <DownloadButton />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
