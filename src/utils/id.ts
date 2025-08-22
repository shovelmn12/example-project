import { createId } from "@paralleldrive/cuid2";

/**
 * Generates a new profile ID.
 * @returns A new profile ID.
 */
export function generateProfileID(): string {
  return `prfl_${createId()}`;
}

/**
 * Generates a new project ID.
 * @returns A new project ID.
 */
export function generateProjectID(): string {
  return `prj_${createId()}`;
}

/**
 * Generates a new service ID.
 * @returns A new service ID.
 */
export function generateServiceID(): string {
  return `srv_${createId()}`;
}
