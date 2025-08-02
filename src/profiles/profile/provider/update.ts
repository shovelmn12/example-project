import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type ProfileState, type UpdateProfileEvent } from "../..";

export interface UpdateUtils {
  readonly bus: EventsEmitter;
}

export function onUpdate(
  event: UpdateProfileEvent,
  { value: state, update }: BlocContext<ProfileState>,
  { bus }: UpdateUtils
): void {
  if (state.type === "init") {
    return;
  } else if (state.type === "data") {
    const next = {
      ...state.value,
      ...event.profile,
    };

    update({
      type: "data",
      value: next,
    });

    bus.emit("profile", { type: "updated", profile: next });
  } else if (state.value._tag === "Some") {
    const next = {
      ...state.value.value,
      ...event.profile,
    };

    update({
      type: "data",
      value: next,
    });

    bus.emit("profile", { type: "updated", profile: next });
  }
}
