type ClassDictionary = Record<string, boolean | undefined | null>;
type ClassArray = ClassValue[];
export type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | ClassDictionary
  | ClassArray;

function toClassName(input: ClassValue): string {
  if (!input) return '';

  if (typeof input === 'string' || typeof input === 'number') {
    return String(input);
  }

  if (Array.isArray(input)) {
    return input.map(toClassName).filter(Boolean).join(' ');
  }

  if (typeof input === 'object') {
    return Object.entries(input)
      .filter(([, isEnabled]) => Boolean(isEnabled))
      .map(([className]) => className)
      .join(' ');
  }

  return '';
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.map(toClassName).filter(Boolean).join(' ');
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Format currency
export function formatCurrency(amount: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

// Check if menu is active based on current pathname
export function isActiveMenu(menuUrl: string, currentPath: string): boolean {
  // Exact match untuk root/dashboard
  if (menuUrl === '/' && currentPath === '/') {
    return true;
  }

  // Jangan match root untuk path lain
  if (menuUrl === '/' && currentPath !== '/') {
    return false;
  }

  // Check if current path starts with menu URL
  // Contoh: menuUrl="/reports" akan match dengan "/reports/annual-report"
  return currentPath.startsWith(menuUrl);
}

export const smoothScrolltoSection = (elementId: string) => {
  if (elementId.startsWith('#')) {
    elementId = elementId.substring(1);
  }
  const element = document.getElementById(elementId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 110;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
