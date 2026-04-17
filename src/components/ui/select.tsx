"use client";

import {
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { cn } from "@/utils/classname";

type SelectContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string | undefined;
  setValue: (value: string) => void;
  disabled?: boolean;
  labels: Record<string, string>;
  registerOption: (value: string, label: string) => void;
};

const SelectContext = createContext<SelectContextValue | null>(null);

function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used inside Select");
  }
  return context;
}

export interface SelectProps {
  children: ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  autoComplete?: string;
}

export function Select({
  children,
  defaultValue,
  onValueChange,
  disabled,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValueState] = useState<string | undefined>(defaultValue);
  const [labels, setLabels] = useState<Record<string, string>>({});

  const setValue = useCallback(
    (nextValue: string) => {
      setValueState(nextValue);
      onValueChange?.(nextValue);
      setOpen(false);
    },
    [onValueChange],
  );

  const registerOption = useCallback((optionValue: string, label: string) => {
    setLabels((current) => {
      if (current[optionValue] === label) return current;
      return { ...current, [optionValue]: label };
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      open,
      setOpen,
      value,
      setValue,
      disabled,
      labels,
      registerOption,
    }),
    [open, setOpen, value, setValue, disabled, labels, registerOption],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

export type SelectTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function SelectTrigger({
  className,
  onClick,
  children,
  ...props
}: SelectTriggerProps) {
  const { open, setOpen, disabled } = useSelectContext();

  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "flex w-full items-center justify-between rounded-md border border-slate-300 bg-white px-3 py-2 text-left text-sm",
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          setOpen(!open);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export interface SelectValueProps extends HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

export function SelectValue({
  placeholder,
  className,
  ...props
}: SelectValueProps) {
  const { value, labels } = useSelectContext();
  const displayValue = value ? (labels[value] ?? value) : placeholder;

  return (
    <span className={cn("block truncate", className)} {...props}>
      {displayValue}
    </span>
  );
}

export type SelectContentProps = HTMLAttributes<HTMLDivElement>;

export function SelectContent({ className, ...props }: SelectContentProps) {
  const { open } = useSelectContext();

  if (!open) return null;

  return (
    <div
      className={cn(
        "absolute z-50 mt-1 w-full rounded-md border border-slate-200 bg-white p-1 shadow-md",
        className,
      )}
      {...props}
    />
  );
}

export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function SelectItem({
  value,
  className,
  children,
  onClick,
  ...props
}: SelectItemProps) {
  const { value: selectedValue, setValue, registerOption } = useSelectContext();
  const label = typeof children === "string" ? children : value;

  useEffect(() => {
    registerOption(value, label);
  }, [registerOption, value, label]);

  return (
    <div
      role="option"
      aria-selected={selectedValue === value}
      className={cn(
        "cursor-pointer rounded-sm px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-100",
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          setValue(value);
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
}
