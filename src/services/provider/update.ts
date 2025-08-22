import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type UpdateServiceEvent, type ServicesState } from "..";

/**
 * The utils for the `onUpdate` function.
 */
export interface UpdateUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
}

/**
 * Handles the `update` event for the services BLoC.
 * @param event The `update` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onUpdate(
  { service }: UpdateServiceEvent,
  { update }: BlocContext<ServicesState>,
  { bus }: UpdateUtils
): void {
  update((state: ServicesState) => ({
    ...state,
    [service.id]: {
      type: "data",
      value: service,
    },
  }));

  bus.emit("services", { type: "updated", service });
}
