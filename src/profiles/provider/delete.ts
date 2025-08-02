import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type DeleteProfileEvent, type ProfilesState } from "..";

export interface DeleteUtils {
  readonly bus: EventsEmitter;
}

export function onDelete(
  event: DeleteProfileEvent,
  { value, update }: BlocContext<ProfilesState>,
  { bus }: DeleteUtils
): void {
  const profile = value[event.id];

  update((state: ProfilesState) => {
    const next = {
      ...state,
    };

    delete next[event.id];

    return next;
  });

  bus.emit("profiles", { type: "deleted", profile });
}
