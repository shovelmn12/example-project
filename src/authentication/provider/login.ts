import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { type FirebaseApp } from "@/firebase";
import { some } from "@/utils";

import { type AuthState, type LoginAuthEvent } from "..";

export interface LoginUtils {
  readonly bus: EventsEmitter;
  readonly firebase: FirebaseApp;
}

export async function onLogin(
  _: LoginAuthEvent,
  { update }: BlocContext<AuthState>,
  { firebase, bus }: LoginUtils
): Promise<void> {
  try {
    const auth = getAuth(firebase);
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    update({
      type: "data",
      value: some({
        id: result.user.uid,
        token: await result.user.getIdToken(),
      }),
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
