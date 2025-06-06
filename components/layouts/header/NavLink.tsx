"use client";

import React from "react";
import Link from "@/components/ui/Link";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link className="mx-[10px]" href={href}>
      {label}
    </Link>
  );
};

export default NavLink;
