import React from 'react';

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  shadow?: 'md' | 'lg' | 'xl' | 'none';
  borderColor?: 'black' | 'white';
  children: React.ReactNode;
}

const shadowStyles = {
  md: 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
  lg: 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
  xl: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
  none: '',
};

export const NeoCard = React.forwardRef<HTMLDivElement, NeoCardProps>(
  (
    {
      shadow = 'md',
      borderColor = 'black',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          border-2 ${borderColor === 'black' ? 'border-black' : 'border-white'}
          bg-white text-black
          ${shadowStyles[shadow]}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NeoCard.displayName = 'NeoCard';
