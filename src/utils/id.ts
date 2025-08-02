import { createId } from "@paralleldrive/cuid2";

export function generateProfileID(): string {
  return `prfl_${createId()}`;
}
