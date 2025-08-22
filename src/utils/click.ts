import { type SyntheticEvent } from "react";

/**
 * Stops the propagation of an event.
 * @param event The event to stop propagation for.
 * @template E The type of the event.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function stopPropegation<E extends SyntheticEvent<any>>(event: E): void {
  event.stopPropagation();
}
