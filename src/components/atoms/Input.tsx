import type { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const inputBaseStyles =
  'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200';

export function Input({ className = '', type = 'text', ...props }: InputProps) {
  const classes = `${inputBaseStyles} ${className}`.trim();

  return <input type={type} className={classes} {...props} />;
}
