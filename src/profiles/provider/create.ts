import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { generateProfileID, randomBool } from "@/utils";

import { type CreateProfileEvent, type Profile, type ProfilesState } from "..";

/**
 * The utils for the `onCreate` function.
 */
export interface CreateUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
}

/**
 * Handles the `create` event for the profiles BLoC.
 * @param _ The `create` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onCreate(
  _: CreateProfileEvent,
  { update }: BlocContext<ProfilesState>,
  { bus }: CreateUtils
): void {
  const profile: Profile = {
    id: generateProfileID(),
    name: {
      first: "Test",
      last: "Testing",
    },
  };

  if (randomBool()) {
    update((state: ProfilesState) => ({
      ...state,
      [profile.id]: {
        type: "data",
        value: profile,
      },
    }));

    bus.emit("profiles", {
      type: "created",
      profile: {
        type: "data",
        value: profile,
      },
    });
  } else {
    bus.emit("app", {
      type: "error",
      error: {
        source: "profiles",
        error: {
          type: "unknown",
          error: "Some unknown error",
        },
      },
    });
  }
}
