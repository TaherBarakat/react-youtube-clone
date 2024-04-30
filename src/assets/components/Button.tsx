import React, { ComponentProps } from "react";
import { VariantProps, cva } from "class-variance-authority";
const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
    },

    size: {
      default: ["rounder", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-content",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;
export default function Button({ variant, size, ...props }: ButtonProps) {
  return <button {...props} className={buttonStyles({ variant, size })} />;
}