import Link from "next/link";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  logoText?: string;
  navigationItems?: NavigationItem[];
}

const defaultNavigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export function Header({
  logoText = "Forto",
  navigationItems = defaultNavigationItems,
}: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          {logoText}
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
