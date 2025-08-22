import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type ProfilesState, type UpdateProfileEvent } from "..";

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
 * Handles the `update` event for the profiles BLoC.
 * @param event The `update` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onUpdate(
  event: UpdateProfileEvent,
  { getState, update }: BlocContext<ProfilesState>,
  { bus }: UpdateUtils
): void {
  const state = getState()[event.profile.id];

  if (state.type === "init") {
    return;
  } else if (state.type === "data") {
    const next = {
      ...state.value,
      ...event.profile,
    };

    update((state) => ({
      ...state,
      [next.id]: {
        type: "data",
        value: next,
      },
    }));

    bus.emit("profiles", { type: "updated", profile: next });
  } else if (state.value._tag === "Some") {
    const next = {
      ...state.value.value,
      ...event.profile,
    };

    update((state) => ({
      ...state,
      [next.id]: {
        type: "data",
        value: next,
      },
    }));

    bus.emit("profiles", { type: "updated", profile: next });
  }
}
