import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { none } from "@/utils";

import { type AuthState, type LoggedOutAuthEvent } from "..";

/**
 * The utils for the `onLoggedOut` function.
 */
export interface LoggedOutUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
}

/**
 * Handles the `logged_out` event for the auth BLoC.
 * @param _ The `logged_out` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
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
