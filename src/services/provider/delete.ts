import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type DeleteServiceEvent, type ServicesState } from "..";

/**
 * The utils for the `onDelete` function.
 */
export interface DeleteUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
}

/**
 * Handles the `delete` event for the services BLoC.
 * @param event The `delete` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onDelete(
  { id }: DeleteServiceEvent,
  { getState, update }: BlocContext<ServicesState>,
  { bus }: DeleteUtils
): void {
  const service = getState()[id];

  if (service.type === "data") {
    update((state: ServicesState) => {
      const newState = { ...state };
      delete newState[id];
      return newState;
    });

    bus.emit("services", { type: "deleted", service: service.value });
  }
}
