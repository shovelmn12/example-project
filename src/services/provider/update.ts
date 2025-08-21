import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import {
  type UpdateServiceEvent,
  type ServiceState,
  type ServicesState,
} from "..";

export interface UpdateUtils {
  readonly bus: EventsEmitter;
}

export function onUpdate(
  { service }: UpdateServiceEvent,
  { update }: BlocContext<ServicesState>,
  { bus }: UpdateUtils
): void {
  const updatedService: ServiceState = {
    type: "data",
    value: service,
  };

  update((state: ServicesState) => ({
    ...state,
    [service.id]: updatedService,
  }));

  bus.emit("services", { type: "updated", service });
}
