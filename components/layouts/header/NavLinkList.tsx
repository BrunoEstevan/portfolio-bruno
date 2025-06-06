import React from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { fadeInUp } from "@/utils/motion";
import { NAV_LINKS } from "@/constants";

interface NavLinkListProps {
  isVisible: boolean;
}

const NavLinkList: React.FC<NavLinkListProps> = ({ isVisible }) => {
  const links = NAV_LINKS;

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between space-y-6 lg:space-y-0 w-full">
      {links.map((link) => (
        <motion.div
          key={link.href}
          variants={fadeInUp(link.delay)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <NavLink href={link.href} label={link.label} />
        </motion.div>
      ))}
    </div>
  );
};

export default NavLinkList;
