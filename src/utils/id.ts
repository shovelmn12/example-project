import { createId } from "@paralleldrive/cuid2";

export function generateUserID(): string {
  return `usr_${createId()}`;
}
