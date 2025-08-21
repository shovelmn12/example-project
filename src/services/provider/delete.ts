import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type DeleteServiceEvent, type ServicesState } from "..";

export interface DeleteUtils {
  readonly bus: EventsEmitter;
}

export function onDelete(
  { service }: DeleteServiceEvent,
  { update }: BlocContext<ServicesState>,
  { bus }: DeleteUtils
): void {
  update((state: ServicesState) => {
    const newState = { ...state };
    delete newState[service.id];
    return newState;
  });

  bus.emit("services", { type: "deleted", service });
}
