import { isUndefined } from ".";

export function parseBoolean(
  value: string | undefined,
  defaultValue: boolean
): boolean {
  if (isUndefined(value)) {
    return defaultValue;
  }

  return value === "true";
}
