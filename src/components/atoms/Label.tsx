import type { LabelHTMLAttributes } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className = "", ...props }: LabelProps) {
  const classes = `text-sm font-medium text-slate-700 ${className}`.trim();

  return <label className={classes} {...props} />;
}
