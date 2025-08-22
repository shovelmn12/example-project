import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { some } from "@/utils";

import { type AuthState, type LoggedInAuthEvent } from "..";

/**
 * The utils for the `onLoggedIn` function.
 */
export interface LoggedInUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
}

/**
 * Handles the `logged_in` event for the auth BLoC.
 * @param event The `logged_in` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
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
