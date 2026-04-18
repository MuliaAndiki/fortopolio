import Link, { type LinkProps } from 'next/link';
import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/classname';

export function navigationMenuTriggerStyle() {
  return 'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900';
}

export type NavigationMenuProps = HTMLAttributes<HTMLElement>;

export function NavigationMenu({ className, ...props }: NavigationMenuProps) {
  return <nav className={cn('w-fit', className)} {...props} />;
}

export type NavigationMenuListProps = HTMLAttributes<HTMLUListElement>;

export function NavigationMenuList({ className, ...props }: NavigationMenuListProps) {
  return <ul className={cn('flex items-center gap-2', className)} {...props} />;
}

export type NavigationMenuItemProps = HTMLAttributes<HTMLLIElement>;

export function NavigationMenuItem({ className, ...props }: NavigationMenuItemProps) {
  return <li className={cn('list-none', className)} {...props} />;
}

export interface NavigationMenuLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, LinkProps {
  children: ReactNode;
}

export function NavigationMenuLink({ className, children, ...props }: NavigationMenuLinkProps) {
  return (
    <Link className={cn(navigationMenuTriggerStyle(), className)} {...props}>
      {children}
    </Link>
  );
}
