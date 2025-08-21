import { createId } from "@paralleldrive/cuid2";

export function generateProfileID(): string {
  return `prfl_${createId()}`;
}

export function generateProjectID(): string {
  return `prj_${createId()}`;
}

export function generateServiceID(): string {
  return `srv_${createId()}`;
}
