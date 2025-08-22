import { getAuth, signOut } from "firebase/auth";

import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { type FirebaseApp } from "@/firebase";

import { type AuthState, type LogoutAuthEvent } from "..";

/**
 * The utils for the `onLogout` function.
 */
export interface LogoutUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
  /**
   * The Firebase app.
   */
  readonly firebase: FirebaseApp;
}

/**
 * Handles the `logout` event for the auth BLoC.
 * @param _ The `logout` event.
 * @param __ The BLoC context.
 * @param utils The utils.
 */
export async function onLogout(
  _: LogoutAuthEvent,
  __: BlocContext<AuthState>,
  { firebase, bus }: LogoutUtils
): Promise<void> {
  try {
    const auth = getAuth(firebase);

    await signOut(auth);
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
