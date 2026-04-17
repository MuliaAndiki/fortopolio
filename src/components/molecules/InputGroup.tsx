import { Input, Label } from "../atoms";
import type { InputProps } from "../atoms";

export interface InputGroupProps extends Omit<InputProps, "id" | "type"> {
  id: string;
  label: string;
  errorMessage?: string;
  containerClassName?: string;
}

export function InputGroup({
  id,
  label,
  errorMessage,
  containerClassName = "",
  ...inputProps
}: InputGroupProps) {
  const errorId = errorMessage ? `${id}-error` : undefined;
  const containerClasses =
    `flex w-full flex-col gap-2 ${containerClassName}`.trim();

  return (
    <div className={containerClasses}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="text"
        aria-invalid={Boolean(errorMessage)}
        aria-describedby={errorId}
        {...inputProps}
      />
      {errorMessage ? (
        <p id={errorId} className="text-sm text-red-600">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
