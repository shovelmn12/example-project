import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type ProfilesState, type UpdateProfileEvent } from "..";

export interface UpdateUtils {
  readonly bus: EventsEmitter;
}

export function onUpdate(
  event: UpdateProfileEvent,
  { value, update }: BlocContext<ProfilesState>,
  { bus }: UpdateUtils
): void {
  const state = value[event.profile.id];

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
