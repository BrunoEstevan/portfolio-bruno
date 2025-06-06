"use client";

import React, { AnchorHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

interface LinkBaseProps extends VariantProps<typeof linkStyles> {
  children: React.ReactNode;
  className?: string;
}

type LinkProps = LinkBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const linkStyles = cva(
  "relative flex flex-row items-center justify-center cursor-pointer group z-[20]",
  {
    variants: {
      variant: {
        gradient:
          "text-transparent bg-clip-text bg-gradient-to-r from-purple-900 from- to-blue-900 hover:from-indigo-900 hover:to-purple-800",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "md",
    },
  }
);

const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant,
  size,
  className,
  ...props
}) => {
  const combinedClasses = clsx(linkStyles({ variant, size }), className);

  return (
    <a href={href} className={combinedClasses} {...props}>
      <span>{children}</span>
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-purple-900 to-blue-900 transition-all duration-500 group-hover:w-full"></span>
    </a>
  );
};

export default Link;
