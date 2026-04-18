'use client';

import {
  cloneElement,
  createContext,
  type HTMLAttributes,
  isValidElement,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

import { cn } from '@/utils/classname';

type SidebarState = 'expanded' | 'collapsed';

type SidebarButtonChildProps = {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  className?: string;
  title?: string;
};

type SidebarContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  state: SidebarState;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('Sidebar components must be used inside SidebarProvider');
  }
  return context;
}

export function useSidebar() {
  return useSidebarContext();
}

export interface SidebarProviderProps {
  children: ReactNode;
  defaultOpen?: boolean;
}

export function SidebarProvider({ children, defaultOpen = true }: SidebarProviderProps) {
  const [open, setOpen] = useState(defaultOpen);
  const state: SidebarState = open ? 'expanded' : 'collapsed';

  const value = useMemo<SidebarContextValue>(
    () => ({
      open,
      setOpen,
      toggleSidebar: () => setOpen((prev) => !prev),
      state,
    }),
    [open, state]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  collapsible?: 'icon' | 'none';
}

export function Sidebar({ className, children, collapsible, ...props }: SidebarProps) {
  const { state } = useSidebarContext();

  return (
    <aside
      className={cn(
        'bg-background transition-all duration-200',
        collapsible === 'icon' && state === 'collapsed' ? 'w-20' : 'w-72',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
}

export type SidebarInsetProps = HTMLAttributes<HTMLDivElement>;

export function SidebarInset({ className, ...props }: SidebarInsetProps) {
  return <div className={cn('flex-1', className)} {...props} />;
}

export type SidebarHeaderProps = HTMLAttributes<HTMLDivElement>;

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return <div className={cn('px-4 py-3', className)} {...props} />;
}

export type SidebarContentProps = HTMLAttributes<HTMLDivElement>;

export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return <div className={cn('p-2', className)} {...props} />;
}

export type SidebarGroupProps = HTMLAttributes<HTMLDivElement>;

export function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return <section className={cn('space-y-2', className)} {...props} />;
}

export type SidebarGroupLabelProps = HTMLAttributes<HTMLHeadingElement>;

export function SidebarGroupLabel({ className, ...props }: SidebarGroupLabelProps) {
  return (
    <h3
      className={cn('px-2 text-xs font-semibold uppercase tracking-wide text-slate-500', className)}
      {...props}
    />
  );
}

export type SidebarGroupContentProps = HTMLAttributes<HTMLDivElement>;

export function SidebarGroupContent({ className, ...props }: SidebarGroupContentProps) {
  return <div className={cn('space-y-1', className)} {...props} />;
}

export type SidebarMenuProps = HTMLAttributes<HTMLUListElement>;

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return <ul className={cn('space-y-1', className)} {...props} />;
}

export type SidebarMenuItemProps = HTMLAttributes<HTMLLIElement>;

export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return <li className={cn('list-none', className)} {...props} />;
}

export interface SidebarMenuButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> {
  asChild?: boolean;
  tooltip?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
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

export function SidebarMenuButton({
  asChild,
  tooltip,
  className,
  children,
  onClick,
  ...props
}: SidebarMenuButtonProps) {
  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<SidebarButtonChildProps>;

    return cloneElement(child, {
      title: tooltip,
      onClick: mergeClickHandlers(child.props.onClick, onClick),
      className: cn('block w-full', child.props.className),
    });
  }

  return (
    <button
      type="button"
      title={tooltip}
      className={cn(
        'flex w-full items-center rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
