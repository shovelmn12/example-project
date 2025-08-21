import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { generateServiceID, randomBool } from "@/utils";

import {
  type CreateServiceEvent,
  type ServiceState,
  type ServicesState,
} from "..";

export interface CreateUtils {
  readonly bus: EventsEmitter;
}

export function onCreate(
  _: CreateServiceEvent,
  { update }: BlocContext<ServicesState>,
  { bus }: CreateUtils
): void {
  const service: ServiceState = {
    type: "data",
    value: {
      id: generateServiceID(),
      name: "New Service",
      description: "This is a new service.",
    },
  };

  if (randomBool()) {
    update((state: ServicesState) => ({
      ...state,
      [service.value.id]: service,
    }));

    bus.emit("services", { type: "created", service: service.value });
  } else {
    bus.emit("app", {
      type: "error",
      error: {
        source: "services",
        error: {
          type: "unknown",
          error: "Some unknown error",
        },
      },
    });
  }
}
