import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { generateServiceID, randomBool } from "@/utils";

import {
  type CreateServiceEvent,
  type Service,
  type ServiceError,
  type ServicesState,
} from "..";

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
 * Handles the `create` event for the services BLoC.
 * @param _ The `create` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onCreate(
  _: CreateServiceEvent,
  { update }: BlocContext<ServicesState>,
  { bus }: CreateUtils
): void {
  const service: Service = {
    id: generateServiceID(),
    name: "New Service",
    description: "This is a new service.",
  };

  if (randomBool()) {
    update((state: ServicesState) => ({
      ...state,
      [service.id]: {
        type: "data",
        value: service,
      },
    }));

    bus.emit("services", { type: "created", service });
  } else {
    const error: ServiceError = {
      type: "unknown",
      error: "Some unknown error",
    };
    bus.emit("app", {
      type: "error",
      error: {
        source: "services",
        error,
      },
    });
  }
}
