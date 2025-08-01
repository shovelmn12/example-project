import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { none } from "@/utils";

import { type AuthState, type LoggedOutAuthEvent } from "..";

export interface LoggedOutUtils {
  readonly bus: EventsEmitter;
}

export async function onLoggedOut(
  _: LoggedOutAuthEvent,
  { update }: BlocContext<AuthState>,
  { bus }: LoggedOutUtils
): Promise<void> {
  try {
    update({
      type: "data",
      value: none,
    });
  } catch (error) {
    bus.emit("app", {
      type: "error",
      error: {
        source: "auth",
        error: {
          type: "unknown",
          error,
        },
      },
    });
  }
}
