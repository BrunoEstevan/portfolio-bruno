"use client";

import React, { useState } from "react";
import NavLinkList from "./NavLinkList";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const NavLinks: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="hidden lg:flex w-[400px] h-full items-center justify-between lg:mr-15">
        <NavLinkList isVisible={true} />
      </div>

      <div className="flex lg:hidden">
        <button
          onClick={handleToggleSidebar}
          className="text-purple-600 focus:outline-none p-2"
        >
          {sidebarOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>

      <div
        className={`fixed left-0 w-64 bg-gray-900 text-white z-50 rounded transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-6">
          <NavLinkList isVisible={sidebarOpen} />
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
