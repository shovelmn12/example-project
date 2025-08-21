import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";
import { type FirebaseApp } from "@/firebase";
import { none, fromNullable } from "@/utils";

import { type AuthState, type InitAuthEvent } from "..";
import { getAuth } from "firebase/auth";

export interface InitUtils {
  readonly bus: EventsEmitter;
  readonly firebase: FirebaseApp;
}

export async function onInit(
  _: InitAuthEvent,
  { update }: BlocContext<AuthState>,
  { firebase, bus }: InitUtils
): Promise<void> {
  try {
    update({
      type: "loading",
      value: none,
    });

    const token = await getAuth(firebase).currentUser?.getIdToken();

    update({
      type: "data",
      value: fromNullable(token),
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
