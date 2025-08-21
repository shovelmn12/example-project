import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type DeleteServiceEvent, type ServicesState } from "..";

export interface DeleteUtils {
  readonly bus: EventsEmitter;
}

export function onDelete(
  { serviceId }: DeleteServiceEvent,
  { getState, update }: BlocContext<ServicesState>,
  { bus }: DeleteUtils
): void {
  const service = getState()[serviceId];

  if (service.type === "data") {
    update((state: ServicesState) => {
      const newState = { ...state };
      delete newState[serviceId];
      return newState;
    });

    bus.emit("services", { type: "deleted", service: service.value });
  }
}
