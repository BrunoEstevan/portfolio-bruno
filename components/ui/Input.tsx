"use client";

import React, { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

interface InputProps 
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, 
    VariantProps<typeof inputStyles> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const inputStyles = cva(
  "w-full bg-black/20 backdrop-blur-md border border-purple-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "hover:border-purple-600/70",
        error: "border-red-500/70 focus:ring-red-500/50 focus:border-red-500",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  variant,
  size,
  className,
  ...props
}) => {
  const combinedClasses = clsx(
    inputStyles({ variant: error ? "error" : variant, size }),
    className
  );

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          className={clsx(combinedClasses, icon && "pl-10")}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;
