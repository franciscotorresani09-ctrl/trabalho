import { type InputHTMLAttributes, type ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
  children?: ReactNode;
}

export function Input({ asChild, children, className = "", ...props }: InputProps) {
  if (asChild && children) {
    return <>{children}</>;
  }

  return <input className={`input ${className}`} {...props} />;
}
