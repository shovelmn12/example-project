import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { type FirebaseApp } from "@/firebase";

import { type AuthState, type LoginAuthEvent } from "..";

export interface LoginUtils {
  readonly bus: EventsEmitter;
  readonly firebase: FirebaseApp;
}

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
