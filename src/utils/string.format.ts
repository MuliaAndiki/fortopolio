export function kebabCaseToWords(value: string): string {
  const normalized = value.split("?")[0].split("#")[0];
  const segment = normalized.split("/").filter(Boolean).at(-1) ?? "home";

  return segment
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
