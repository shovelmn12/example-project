import { getAuth, signOut } from "firebase/auth";

import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { type FirebaseApp } from "@/firebase";
import { none } from "@/utils";

import { type AuthState, type LogoutAuthEvent } from "..";

export interface LogoutUtils {
  readonly bus: EventsEmitter;
  readonly firebase: FirebaseApp;
}

export async function onLogout(
  _: LogoutAuthEvent,
  { update }: BlocContext<AuthState>,
  { firebase, bus }: LogoutUtils
): Promise<void> {
  try {
    const auth = getAuth(firebase);

    await signOut(auth);

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
