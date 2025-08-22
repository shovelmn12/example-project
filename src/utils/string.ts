import { isUndefined } from ".";

/**
 * Parses a boolean from a string.
 * @param value The string to parse.
 * @param defaultValue The default value to return if the string is undefined.
 * @returns The parsed boolean.
 */
export function parseBoolean(
  value: string | undefined,
  defaultValue: boolean
): boolean {
  if (isUndefined(value)) {
    return defaultValue;
  }

  return value === "true";
}
