import { type SyntheticEvent } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function stopPropegation<E extends SyntheticEvent<any>>(event: E): void {
  event.stopPropagation();
}
