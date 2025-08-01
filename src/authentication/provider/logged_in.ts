import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { some } from "@/utils";

import { type AuthState, type LoggedInAuthEvent } from "..";

export interface LoggedInUtils {
  readonly bus: EventsEmitter;
}

export async function onLoggedIn(
  event: LoggedInAuthEvent,
  { update }: BlocContext<AuthState>,
  { bus }: LoggedInUtils
): Promise<void> {
  try {
    update({
      type: "data",
      value: some(event.token),
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
