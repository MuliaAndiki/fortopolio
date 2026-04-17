import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/classname";

type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";
type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClassMap: Record<ButtonVariant, string> = {
  default: "bg-slate-900 text-white hover:bg-slate-700",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
  destructive: "bg-red-600 text-white hover:bg-red-500",
};

const sizeClassMap: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3 text-xs",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10",
};

export function Button({
  variant = "default",
  size = "default",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50",
        variantClassMap[variant],
        sizeClassMap[size],
        className,
      )}
      {...props}
    />
  );
}
