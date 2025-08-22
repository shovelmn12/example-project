import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { type FirebaseApp } from "@/firebase";

import { type AuthState, type LoginAuthEvent } from "..";

/**
 * The utils for the `onLogin` function.
 */
export interface LoginUtils {
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
 * Handles the `login` event for the auth BLoC.
 * @param _ The `login` event.
 * @param __ The BLoC context.
 * @param utils The utils.
 */
export async function onLogin(
  _: LoginAuthEvent,
  __: BlocContext<AuthState>,
  { firebase, bus }: LoginUtils
): Promise<void> {
  try {
    const auth = getAuth(firebase);
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);
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
