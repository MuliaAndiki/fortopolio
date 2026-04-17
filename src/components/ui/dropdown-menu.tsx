"use client";

import {
  cloneElement,
  createContext,
  isValidElement,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  useContext,
  useState,
} from "react";
import { cn } from "@/utils/classname";

type DropdownMenuContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type TriggerChildProps = {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  "aria-expanded"?: boolean;
  "aria-haspopup"?: string;
};

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(
  null,
);

function useDropdownMenuContext() {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error(
      "Dropdown menu components must be used inside DropdownMenu",
    );
  }
  return context;
}

function mergeClickHandlers<E extends MouseEvent<HTMLElement>>(
  original?: (event: E) => void,
  next?: (event: E) => void,
) {
  return (event: E) => {
    original?.(event);
    if (!event.defaultPrevented) {
      next?.(event);
    }
  };
}

export interface DropdownMenuProps {
  children: ReactNode;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

export interface DropdownMenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function DropdownMenuTrigger({
  asChild,
  children,
  onClick,
  ...props
}: DropdownMenuTriggerProps) {
  const { open, setOpen } = useDropdownMenuContext();

  const handleClick = () => {
    setOpen(!open);
  };

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<TriggerChildProps>;
    return cloneElement(child, {
      onClick: mergeClickHandlers(child.props.onClick, handleClick),
      "aria-expanded": open,
      "aria-haspopup": "menu",
    });
  }

  return (
    <button
      type="button"
      onClick={mergeClickHandlers(onClick, handleClick)}
      aria-expanded={open}
      aria-haspopup="menu"
      {...props}
    >
      {children}
    </button>
  );
}

export type DropdownMenuContentProps = HTMLAttributes<HTMLDivElement>;

export function DropdownMenuContent({
  className,
  ...props
}: DropdownMenuContentProps) {
  const { open } = useDropdownMenuContext();

  if (!open) return null;

  return (
    <div
      role="menu"
      className={cn(
        "absolute right-0 z-50 mt-2 min-w-44 rounded-md border border-slate-200 bg-white p-1 shadow-md",
        className,
      )}
      {...props}
    />
  );
}

export type DropdownMenuItemProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function DropdownMenuItem({
  className,
  onClick,
  ...props
}: DropdownMenuItemProps) {
  const { setOpen } = useDropdownMenuContext();

  return (
    <button
      type="button"
      role="menuitem"
      className={cn(
        "flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100",
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        setOpen(false);
      }}
      {...props}
    />
  );
}
