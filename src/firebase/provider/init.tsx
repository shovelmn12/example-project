import { initializeApp } from "firebase/app";

import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type FirebaseState, type InitFirebaseEvent } from "..";

export interface InitUtils {
  readonly bus: EventsEmitter;
}

export function onInit(
  event: InitFirebaseEvent,
  { update }: BlocContext<FirebaseState>,
  { bus }: InitUtils
): void {
  try {
    const app = initializeApp(event.config);

    update({ type: "initialized", app });

    bus.emit("firebase", { type: "initialized" });
  } catch (error) {
    update({ type: "error", error });

    bus.emit("app", {
      type: "error",
      error: {
        source: "firebase",
        error: {
          type: "unknown",
          error,
        },
      },
    });
  }
}
