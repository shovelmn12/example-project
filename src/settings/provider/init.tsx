import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type SettingsState, type InitSettingsEvent } from "..";
import { none } from "@/utils";

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
 * Handles the `init` event for the settings BLoC.
 * @param _ The `init` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onInit(
  _: InitSettingsEvent,
  { update }: BlocContext<SettingsState>,
  { bus }: InitUtils
): void {
  try {
    update({
      type: "data",
      value: {
        theme: {
          mode: "auto",
          type: "default",
        },
      },
    });

    bus.emit("settings", { type: "initialized" });
  } catch (error) {
    update({
      type: "error",
      value: none,
      error: {
        type: "unknown",
        error,
      },
    });

    bus.emit("app", {
      type: "error",
      error: {
        source: "settings",
        error: {
          type: "unknown",
          error,
        },
      },
    });
  }
}
