'use client';

import {
  cloneElement,
  createContext,
  type HTMLAttributes,
  isValidElement,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { cn } from '@/utils/classname';

type PopoverContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type TriggerChildProps = {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  'aria-expanded'?: boolean;
};

const PopoverContext = createContext<PopoverContextValue | null>(null);

function usePopoverContext() {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error('Popover components must be used inside Popover');
  }
  return context;
}

function mergeClickHandlers<E extends MouseEvent<HTMLElement>>(
  original?: (event: E) => void,
  next?: (event: E) => void
) {
  return (event: E) => {
    original?.(event);
    if (!event.defaultPrevented) {
      next?.(event);
    }
  };
}

export interface PopoverProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Popover({ children, open, onOpenChange }: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const activeOpen = isControlled ? open : internalOpen;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange]
  );

  const value = useMemo(() => ({ open: activeOpen, setOpen }), [activeOpen, setOpen]);

  return (
    <PopoverContext.Provider value={value}>
      <div className="relative inline-block">{children}</div>
    </PopoverContext.Provider>
  );
}

export interface PopoverTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function PopoverTrigger({ asChild, children, onClick, ...props }: PopoverTriggerProps) {
  const { open, setOpen } = usePopoverContext();

  const toggleOpen = () => {
    setOpen(!open);
  };

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<TriggerChildProps>;

    return cloneElement(child, {
      onClick: mergeClickHandlers(child.props.onClick, toggleOpen),
      'aria-expanded': open,
    });
  }

  return (
    <button type="button" onClick={mergeClickHandlers(onClick, toggleOpen)} {...props}>
      {children}
    </button>
  );
}

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end';
  onEscapeKeyDown?: () => void;
}

export function PopoverContent({
  className,
  onEscapeKeyDown,
  onKeyDown,
  ...props
}: PopoverContentProps) {
  const { open, setOpen } = usePopoverContext();

  if (!open) return null;

  return (
    <div
      tabIndex={-1}
      className={cn(
        'absolute z-50 mt-2 min-w-52 rounded-md border border-slate-200 bg-white p-2 shadow-md',
        className
      )}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          onEscapeKeyDown?.();
          setOpen(false);
        }
        onKeyDown?.(event);
      }}
      {...props}
    />
  );
}
