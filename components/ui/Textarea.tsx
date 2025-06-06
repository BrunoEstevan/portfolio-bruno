"use client";

import React, { TextareaHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

interface TextareaProps 
  extends TextareaHTMLAttributes<HTMLTextAreaElement>, 
    VariantProps<typeof textareaStyles> {
  label?: string;
  error?: string;
}

const textareaStyles = cva(
  "w-full bg-black/20 backdrop-blur-md border border-purple-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 resize-none",
  {
    variants: {
      variant: {
        default: "hover:border-purple-600/70",
        error: "border-red-500/70 focus:ring-red-500/50 focus:border-red-500",
      },
      size: {
        sm: "px-3 py-2 text-sm min-h-[80px]",
        md: "px-4 py-3 text-base min-h-[120px]",
        lg: "px-5 py-4 text-lg min-h-[160px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  variant,
  size,
  className,
  ...props
}) => {
  const combinedClasses = clsx(
    textareaStyles({ variant: error ? "error" : variant, size }),
    className
  );

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}
      <textarea
        className={combinedClasses}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Textarea;
