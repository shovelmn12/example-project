import { initializeApp } from "firebase/app";

import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type FirebaseState, type InitFirebaseEvent } from "..";

/**
 * The utils for the `onInit` function.
 */
export interface InitUtils {
  /**
   * The event bus.
   */
  readonly bus: EventsEmitter;
}

/**
 * Handles the `init` event for the Firebase BLoC.
 * @param event The `init` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
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
