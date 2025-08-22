import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type DeleteProfileEvent, type ProfilesState } from "..";

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
 * Handles the `delete` event for the profiles BLoC.
 * @param event The `delete` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onDelete(
  event: DeleteProfileEvent,
  { getState, update }: BlocContext<ProfilesState>,
  { bus }: DeleteUtils
): void {
  const profile = getState()[event.id];

  update((state: ProfilesState) => {
    const next = {
      ...state,
    };

    delete next[event.id];

    return next;
  });

  bus.emit("profiles", { type: "deleted", profile });
}
