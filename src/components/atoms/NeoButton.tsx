import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'destructive' | 'warning' | 'success' | 'info';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantStyles = {
  primary: 'bg-yellow-400 text-black hover:bg-yellow-300',
  secondary: 'bg-pink-400 text-black hover:bg-pink-300',
  accent: 'bg-cyan-300 text-black hover:bg-cyan-200',
  destructive: 'bg-red-500 text-black hover:bg-red-400',
  warning: 'bg-orange-400 text-black hover:bg-orange-300',
  success: 'bg-lime-400 text-black hover:bg-lime-300',
  info: 'bg-sky-400 text-black hover:bg-sky-300',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`
          font-bold border-2 border-black
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
          hover:translate-x-0.5 hover:translate-y-0.5
          active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
          active:translate-x-1 active:translate-y-1
          transition-all duration-75 cursor-pointer
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeoButton.displayName = 'NeoButton';
