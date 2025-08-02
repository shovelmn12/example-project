import { type BlocContext, type DataState } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { generateProfileID, randomBool } from "@/utils";

import { type CreateProfileEvent, type Profile, type ProfilesState } from "..";

export interface CreateUtils {
  readonly bus: EventsEmitter;
}

export function onCreate(
  _: CreateProfileEvent,
  { update }: BlocContext<ProfilesState>,
  { bus }: CreateUtils
): void {
  const profile: DataState<Profile> = {
    type: "data",
    value: {
      id: generateProfileID(),
      name: {
        first: "Test",
        last: "Testing",
      },
    },
  };

  if (randomBool()) {
    update((state: ProfilesState) => ({
      ...state,
      [profile.value.id]: profile,
    }));

    bus.emit("profiles", { type: "created", profile });
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
