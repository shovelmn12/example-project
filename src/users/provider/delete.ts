import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type DeleteUserEvent, type UsersState } from "..";

export interface DeleteUtils {
  readonly bus: EventsEmitter;
}

export function onDelete(
  event: DeleteUserEvent,
  { value, update }: BlocContext<UsersState>,
  { bus }: DeleteUtils
): void {
  const user = value[event.id];

  update((state: UsersState) => {
    const next = {
      ...state,
    };

    delete next[event.id];

    return next;
  });

  bus.emit("users", { type: "deleted", user });
}
