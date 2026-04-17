"use client";

import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";
import { cn } from "@/utils/classname";

export type CommandProps = HTMLAttributes<HTMLDivElement>;

export function Command({ className, ...props }: CommandProps) {
  return (
    <div
      className={cn("rounded-md border border-slate-200 bg-white", className)}
      {...props}
    />
  );
}

export type CommandInputProps = InputHTMLAttributes<HTMLInputElement>;

export function CommandInput({ className, ...props }: CommandInputProps) {
  return (
    <input
      className={cn(
        "h-10 w-full border-b border-slate-200 px-3 text-sm outline-none",
        className,
      )}
      {...props}
    />
  );
}

export type CommandListProps = HTMLAttributes<HTMLDivElement>;

export function CommandList({ className, ...props }: CommandListProps) {
  return <div className={cn("max-h-60 overflow-auto", className)} {...props} />;
}

export type CommandEmptyProps = HTMLAttributes<HTMLDivElement>;

export function CommandEmpty({ className, ...props }: CommandEmptyProps) {
  return (
    <div
      className={cn("px-3 py-4 text-sm text-slate-500", className)}
      {...props}
    />
  );
}

export type CommandGroupProps = HTMLAttributes<HTMLDivElement>;

export function CommandGroup({ className, ...props }: CommandGroupProps) {
  return <div className={cn("p-1", className)} {...props} />;
}

export interface CommandItemProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onSelect"
> {
  value?: string;
  onSelect?: (value: string) => void;
}

export function CommandItem({
  className,
  onClick,
  onSelect,
  value,
  children,
  ...props
}: CommandItemProps) {
  const fallbackValue = typeof children === "string" ? children : "";

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-100",
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        onSelect?.(value ?? fallbackValue);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export type CommandSeparatorProps = HTMLAttributes<HTMLDivElement>;

export function CommandSeparator({
  className,
  ...props
}: CommandSeparatorProps) {
  return (
    <div
      className={cn("my-1 h-px w-full bg-slate-200", className)}
      {...props}
    />
  );
}
