import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type ConfigState, type InitConfigEvent } from "..";
import { none, parseBoolean } from "@/utils";

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
 * Handles the `init` event for the config BLoC.
 * @param _ The `init` event.
 * @param context The BLoC context.
 * @param utils The utils.
 */
export function onInit(
  _: InitConfigEvent,
  { update }: BlocContext<ConfigState>,
  { bus }: InitUtils
): void {
  try {
    const env = import.meta.env;
    const config = {
      env: {
        firebase: JSON.parse(env.VITE_FIREBASE_CONFIG),
        api_url: env.VITE_API_URL,
      },
      log: parseBoolean(env.VITE_LOG, env.DEV),
    };

    update({
      type: "data",
      value: config,
    });

    bus.emit("config", { type: "initialized", config });
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
        source: "config",
        error: {
          type: "unknown",
          error,
        },
      },
    });
  }
}
